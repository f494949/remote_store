import utils from "/utils/utils";

Page({
  data: {},
  onLoad(options) {
    let id = options.id;
    this.getInvoiceList(id)

  },
  /**
   * 发票详情
   */
  getInvoiceList(id) {
    let that = this;
    my.showLoading({
      content: '加载中...'
    });
    my.request({
      url: 'https://whngfp.babel-group.cn/invoice/detail',
      method: 'GET',
      data: {
        b_unique_id: id
      },
      success: (res) => {
        console.log(res);
        res.data.data.ticket_total_amount_has_tax = parseFloat(res.data.data.ticket_total_amount_has_tax).toFixed(2);
        if(res.data.data.platform == 1){
          res.data.data.platform_name = '微信';
        }else if(res.data.data.platform == 2){
          res.data.data.platform_name = '支付宝';
        }else{
          res.data.data.platform_name = '线下柜台';
        }
        that.setData({
          incoiceObj: res.data.data
        })
        my.hideLoading({

        });
        if (res.data.code == "1000") {

        } else {
          utils.tipsBack("加载失败，请稍后重试")
        }
        console.log(res)
      },
      fail() {
        utils.tipsBack("加载失败，请稍后重试")

      }
    });
  },
  /**
   * 去发票详情
   */
  goInvoice() {
    if(this.data.incoiceObj.platform == 2){
      utils.blinkTips("即将跳转发票管家，您可以在【我的发票】中查看详情", "none").then(() => {
        my.ap.navigateToAlipayPage({
          path: "https://render.alipay.com/p/s/i/?scheme=alipays://platformapi/startapp?appId=77700150&page=&enbsv=0.2.2010222024.41&chInfo=ch_share__chsub_CopyLink",
          success: (res) => {
            console.log({ content: '系统信息' + JSON.stringify(res) });
          },
          fail: (error) => {
            console.log({ content: '系统信息' + JSON.stringify(error) });
          }
        })
      })
    }else{
      utils.tiperror("此发票在其他平台开具，您可以在对应的开票平台查看", "none")
    }
    

  }
});
