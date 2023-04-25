import utils from '/utils/utils';
Page({
    data: {
        invoiceData: {},
        isopen: false,
        showBot: false,
        userIndex: 0,
        isFlag: true,
        evalue: null,
        userList: [
            //   {
            //   name:"名字啊1",
            //   type:"个人用户",
            //   usercode:"123456231",
            //   address:"地址地址地址地址地址地址地址地址地址"
            // },{
            //   name:"名字啊2",
            //   type:"个人用户",
            //   usercode:"123456231",
            //   address:"地址地址地址地址地址地址地址地址地址"
            // },{
            //   name:"名字啊3",
            //   type:"个人用户",
            //   usercode:"123456231",
            //   address:"地址地址地址地址地址地址地址地址地址"
            // },{
            //   name:"名字啊4",
            //   type:"个人用户",
            //   usercode:"123456231",
            //   address:"地址地址地址地址地址地址地址地址地址"
            // }
        ],
    },

    onShow() {
        // this.getInvoiceList(this.data.userList[0].usercode);
        // this.getInvoiceList('1401052472');
        this.getBindList();
        // console.log( utils.getdate("1595865600"))
    },
    /**
     * 打开遮罩
     */
    onBotBtnTap(e) {
        this.setData({
            showBot: true,
        });
    },
    /**
     * 关闭遮罩
     */
    onPopupClose() {
        this.setData({
            showBot: false,
        });
    },
    /**
     * 切换列表
     */
    chooseone(e) {
        console.log(e.currentTarget.dataset.index);
        let index = e.currentTarget.dataset.index;
        this.setData({
            userIndex: e.currentTarget.dataset.index,
            showBot: false,
        });
        this.getInvoiceList(this.data.userList[index].userno);
    },
    verifyResult() {
        console.log('验证通过');
        this.setData({
            isFlag: true,
        });
        this.creatInvoice(this.data.evalue);
    },
    /**
     * 查看开票情况
     */
    getInvoiceList(no) {
        let that = this;
        my.showLoading({
            content: '加载中...',
        });
        my.request({
            url: 'https://whngfp.babel-group.cn/order/index',
            method: 'GET',
            data: {
                no,
                dataorgid: 1,
            },
            success: res => {
                my.hideLoading({
                    page: that,
                });
                if (res.data.code == '0000') {
                    if (res.data.data.type == 2) {
                        let tempList = [];
                        for (const key in res.data.data.invoicing) {
                            if (res.data.data.invoicing.hasOwnProperty(key)) {
                                const element = res.data.data.invoicing[key];
                                console.log(element[0]); // 11 22
                                tempList.push(element[0]);
                            }
                        }
                        res.data.data.invoicing = tempList;
                    }
                    for (let i = 0; i < res.data.data.invoiced.length; i++) {
                        res.data.data.invoiced[i].ticket_total_amount_has_tax = parseFloat(
                            res.data.data.invoiced[i].ticket_total_amount_has_tax
                        ).toFixed(2);
                        res.data.data.invoiced[i].ticket_date = utils.timestampToDate(
                            res.data.data.invoiced[i].ticket_date
                        );
                    }
                    that.setData({
                        invoiceData: res.data.data,
                    });
                } else {
                    utils.tipsBack('获取失败，请稍后重试');
                }
            },
            fail() {
                utils.tipsBack('获取失败，请稍后重试');
            },
        });
    },
    /**
     * 切换票类型
     */
    switchtype(e) {
        let type = e.currentTarget.dataset.type;
        if (type == 'aready') {
            this.setData({
                isopen: true,
            });
        } else {
            this.setData({
                isopen: false,
            });
        }
    },
    /**
     * 获取绑定的列表
     */
    getBindList() {
        utils
            .myRequest('/user/bind-list', { uid: utils.getSS('ng_ali_openid') }, true)
            .then(res => {
                if (res.code == '0') {
                    if (res.data.length == 0) {
                        utils.blinkTips('请先绑定户号', 'none').then(() => {
                            my.navigateTo({
                                url: '/pages/Bind/Bind',
                            });
                        });
                    } else {
                        this.setData({
                            userList: res.data,
                        });
                        // this.getInvoiceList("1401052472");
                        if (this.data.userList[this.data.userIndex].userno) {
                            this.getInvoiceList(this.data.userList[this.data.userIndex].userno);
                        } else {
                            this.getInvoiceList(res.data[0].userno);
                        }
                    }
                } else {
                }
            });
    },
    openIvoice(e) {
        let id = e.currentTarget.dataset.id;
        console.log(e.currentTarget.dataset);
        my.navigateTo({
            url: '/pages/InvoiceDetail/InvoiceDetail?id=' + id,
        });

        // my.downloadFile({
        //   // 示例 url，并非真实存在
        //   url,
        //   header: {
        //     'token': utils.getSS("ng_ali_token")
        //   },
        //   success({ apFilePath }) {
        //     my.hideLoading();
        //     my.openDocument({
        //       filePath: apFilePath,
        //       fileType: 'pdf',
        //       success: (res) => {
        //         console.log('open document success')
        //       }
        //     })
        //   }
        // })
    },
    applyInvoiceOpen: function (e) {
        this.setData({ evalue: e, isFlag: false });
    },
    creatInvoice(e) {
        let that = this;
        let index = e.currentTarget.dataset.index;
        let temp = this.data.invoiceData.invoicing[index];
        let params = {
            orderData: JSON.stringify(temp),
            dataorgid: 1,
            userid: utils.getSS('ng_platform_id'),
        };
        my.showLoading({
            content: '正在开票,请稍等',
        });
        my.request({
            url: 'https://whngfp.babel-group.cn//order/ali-invoice',
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            data: params,
            success: res => {
                console.log(res);
                if (res.data.msg == 'SUCCESS') {
                    var to = setTimeout(() => {
                        my.hideLoading();
                        utils
                            .blinkTips(
                                '开票成功,您可以在已开票列表或支付宝发票管家中查看详情',
                                'success'
                            )
                            .then(res => {
                                that.getBindList();
                            });
                        clearTimeout(to);
                    }, 3000);
                } else {
                    utils.tiperror('开票失败,请稍后重试', 'none');
                }
            },
            fail: err => {
                utils.tiperror('开票失败,请稍后重试', 'none');
            },
        });
    },
    saveFile() {
        my.getFileInfo({});
    },
});
