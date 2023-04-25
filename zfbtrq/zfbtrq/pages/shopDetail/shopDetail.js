import utils from "/utils/utils";

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 5000,
    circular: false,
    duration: 1500,
    shop:{
      id:null
    }
  },
  onShow(){
    if(this.data.shop.id!=null){
      this.shopDetail(this.data.shop.id)
    }
  },
  onLoad(options) {
    console.log(options);
    let id = options.id;
    this.shopDetail(id)
    
  },
  shopDetail(id){
    let params={
      id:id
    }
    
    utils.myRequest("/mhh/detail", params, true).then((res) => {
      console.log(res);
      if (res.code == "0") {
        this.setData({
          shop: res.data
        })
      } else {
        utils.tipsBack("获取失败,请稍后重试", "none")
      }
    })
  },
  clickCoupon(e){
    let index = e.currentTarget.dataset.index;
    let thisitem = this.data.shop.coupons[index];
    let userStatus = thisitem.user_got>thisitem.user_limit||thisitem.user_got==thisitem.user_limit;
    let cStatus = thisitem.status;
    if(userStatus){
        utils.tiperror("已达到领取上限","none");
      
    }else{
      if(cStatus == 2){
        utils.tiperror("该券领取结束","none");
      }else{
        let params = {
          coupon_id:thisitem.id
        }
        utils.myRequest("/mhh/get-coupon", params, true).then((res) => {
          console.log(res);
          if (res.code == "0") {
            my.ap.navigateToAlipayPage({
              path: 'https://render.alipay.com/p/s/mygrace/ndetail.html?__webview_options__=sms%3DYES%26pd%3DNO&type=VOUCHER&id='+res.data.voucher_id,
              error(err){
                console.log(err);
                
              }
            });
          } else {
            utils.tiperror(res.msg, "none")
          }
        })
      }
    }
  }
});
