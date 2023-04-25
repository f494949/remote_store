import utils from '/utils/utils';
import WxValidate from '/utils/WxValidate';

Page({
    data: {
        userList: [],
        userIndex: null,
        showBot: false,
        marqueeProps: {
            loop: true,
            leading: 1000,
            trailing: 800,
            fps: 40,
        },
        tipsN: '点击查看更多查看',
        bannerList: [
            // {
            //     id: '1',
            //     pos: '1',
            //     url: 'https://upload-wp.babel-group.cn/imgs/5a8e1d7e5dcab0b687e84c5647ef67e5.png',
            //     redirect_type: '2',
            //     redirect_url: '/pages/Mhh/Mhh',
            //     sort: '1',
            // },
            // {
            //     id: '2',
            //     pos: '1',
            //     url: 'https://upload-wp.babel-group.cn/imgs/9b04964daa04ba6ed20d64a64f5f446e.png',
            //     redirect_type: '1',
            //     redirect_url:
            //         'https://emcs.pa18.com/product/shop/shopProduct.html?shopId=3C5B51ED3A1E438A9A57674F94D7DDFE&appType=05&shopName=%E7%87%83%E6%B0%94%E4%BF%9D%E9%99%A9&isEmployee=01&bgtips=1',
            //     sort: '2',
            // },
        ],
        menuList: [
            {
                id: 0,
                out: false,
                needauth: true,
                // path:"alipays://platformapi/startapp?appid=20000193%26url=/www/ebill.htm?referer=gopay%26billkey=1401052472%26instid=whstrq2150%26subbiztype=gas&chInfo=ch_2021001184662156",
                path: 'alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D60000155%26chInfo%3Dch_2021001184662156',
            },
            
            {
                id: 1,
                out: false,
                needauth: false,
                path: '/pages/Map/Map',
            },
            {
                id: 2,
                out: false,
                needauth: true,
                path: '/pages/Invoice/Invoice',
            },
            {
                id: 3,
                out: true,
                needauth: false,
                path: 'https://emcs.pa18.com/product/shop/shopProduct.html?shopId=3C5B51ED3A1E438A9A57674F94D7DDFE&appType=05&shopName=%E7%87%83%E6%B0%94%E4%BF%9D%E9%99%A9&isEmployee=01&bgtips=1',
            },
            {
                id: 4,
                out: false,
                needauth: true,
                path: '/pages/Booking/Booking?type=3',
            },
            {
                id: 5,
                out: false,
                needauth: true,
                path: '/pages/Booking/Booking?type=2',
            },
            {
                id: 6,
                out: false,
                needauth: true,
                path: '/pages/O',
            },
        ],
    },
    onLoad() {
        this.homeInit();
    },
    noticeDetail() {
        my.navigateTo({
            url: '/pages/infoList/infoList',
        });
        console.log('查看更多');
    },
    towhere(e) {
        utils.toTar(e.currentTarget.dataset.url);
    },
    /**
     * 进二级页面
     */
    toInner(e) {
        let that = this;
        let index = e.currentTarget.dataset.index;
        let menu = this.data.menuList;
        console.log(index);
        if (index == 3) {
            return;
        }
        if (menu[index].out) {
            my.navigateTo({
                url: '/pages/outPage/outPage?url=' + menu[index].path,
            });
        } else {
            if (menu[index].needauth) {
                console.log('授权');
                if (utils.checkOpenid()) {
                    if (index == 0) {
                        that.getBindList();
                        // my.ap.navigateToAlipayPage({
                        //     // path:"alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000193%26url%3D%2Fwww%2FeBill.htm%3Freferer%3DGOPAY%26billKey%3D1400424845%26instId%3DWHSTRQ2150%26subBizType%3DGAS%26chInfo%3Dch_2021001184662156",
                        //     path:"alipays://platformapi/startapp?appId=20000193&url=/www/eBill.htm?referer=GOPAY&billKey=1400424845&instId=WHSTRQ2150&subBizType=GAS&chInfo=ch_2021001184662156",
                        //     success:(res) => {
                        //         console.log({content:'系统信息' + JSON.stringify(res)});
                        //     },
                        //     fail:(error) => {
                        //         console.log({content:'系统信息' + JSON.stringify(res)});
                        //     }
                        // })
                    } else {
                        my.navigateTo({
                            url: menu[index].path,
                        });
                    }
                } else {
                    this.setData({
                        needauth: true,
                    });
                }
            } else {
                my.navigateTo({
                    url: menu[index].path,
                });
            }
        }
    },
    homeInit() {
        let that = this;
        my.showLoading({
            content: '加载中...',
        });
        // my.request({
        //   url: 'https://whng-platform.babel-group.cn/common/banner',
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/x-www-form-urlencoded',
        //     'token':utils.getSS("ng_ali_token")
        //   },
        //   data: {
        //     pos:1,
        //   },
        //   dataType: 'json',
        //   success: (res) => {
        //     console.log(res);

        //     my.hideLoading({
        //       page: that,
        //     });
        //     if (res.code == "0") {
        //     this.setData({
        //       bannerList: res.data
        //     })
        //   }
        //   },
        //   fail(){
        //   }
        // });
        utils.myRequest('/common/banner', { pos: 1, platform: 2 }, true).then(res => {
            if (res.code == '0') {
                this.setData({
                    bannerList: res.data.banners,
                    tipsN: res.data.tips,
                    marqueeProps: {
                        loop: true,
                        leading: 1000,
                        trailing: 800,
                        fps: 40,
                    },
                });
            }
        });
    },
    outpage(e) {
        let index = e.currentTarget.dataset.index;
        let bannertemp = this.data.bannerList;
        let type = bannertemp[index].redirect_type;
        // let url = bannertemp[index].redirect_url;
        // let url = decodeURIComponent(bannertemp[index].redirect_url);
        let url = decodeURIComponent(bannertemp[index].redirect_url);

        console.log(url);

        if (url != '' && url != null) {
            if (type == 1) {
                //外链
                my.navigateTo({
                    url: '/pages/outPage/outPage?url=' + url,
                });
            } else if (type == 2) {
                my.navigateTo({
                    url: decodeURIComponent(url),
                });
            } else if (type == 3) {
                my.ap.navigateToAlipayPage({
                    path: url,
                    success: res => {
                        console.log({ content: '系统信息' + JSON.stringify(res) });
                    },
                    fail: error => {
                        console.log({ content: '系统信息' + JSON.stringify(error) });
                    },
                });
            }else if(type == 4){
              my.ap.openURL({
                url: url,
                success: res => {
                    console.log({ content: '系统信息' + JSON.stringify(res) });
                },
                fail: error => {
                    console.log({ content: '系统信息' + JSON.stringify(error) });
                },
            });
            }
        }
    },
    /**
     * 列表
     */
    getBindList() {
        utils
            .myRequest('/user/bind-list', { uid: utils.getSS('ng_ali_openid') }, true)
            .then(res => {
                if (res.code == '0') {
                    if (res.data.length != 0) {
                        this.setData({
                            userList: res.data,
                            showBot: true,
                        });
                    } else {
                        utils.blinkTips('请先绑定户号', 'none').then(() => {
                            my.navigateTo({ url: '/pages/Bind/Bind' });
                        });
                    }
                } else {
                    utils.tipsBack('查询已绑户号失败请稍后重试', 'fail');
                }
                console.log(res);
            })
            .catch(err => {
                utils.tipsBack('查询已绑户号失败请稍后重试', 'fail');
            });
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
        let that = this;
        console.log(e.currentTarget.dataset.index);
        let index = e.currentTarget.dataset.index;
        this.setData({
            userIndex: e.currentTarget.dataset.index,
            showBot: false,
        });

        my.call(
            'startApp',
            {
                appId: '20000193',
                param: {
                    url:
                        '/www/eBill.htm?referer=GOPAY&billKey= ' +
                        that.data.userList[index].userno +
                        '&instId=WHSTRQ2150&subBizType=GAS',
                    appClearTop: false,
                    startMultApp: 'YES',
                },
            },
            res => {
                console.info(JSON.stringify(res));
            }
        );
        // my.ap.navigateToAlipayPage({
        //   path: "alipays://platformapi/startapp?appId=20000193&url=/www/eBill.htm?referer=GOPAY&billKey=" + that.data.userList[index].userno + "&instId=WHSTRQ2150&subBizType=GAS&chInfo=ch_2021001184662156",
        //   success: (res) => {
        //     console.log({ content: '系统信息' + JSON.stringify(res) });
        //   },
        //   fail: (error) => {
        //     console.log({ content: '系统信息' + JSON.stringify(error) });
        //   }
        // })
    },
    addCard: function () {
        my.ap.navigateToAlipayPage({
            path: 'https://render.alipay.com/p/s/mygrace/ndetail.html?__webview_options__=sms%3DYES%26pd%3DNO&type=VOUCHER&id=20201204000730027370076EXT5R',
        });
    },
});
