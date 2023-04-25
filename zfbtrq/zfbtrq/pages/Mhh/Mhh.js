import utils from "/utils/utils";

Page({
  data: {
    ordernum: 1,
    typeList: ['湖北菜', '川菜', '粤菜', '杭帮菜', '西餐', '日料', '其他'],
    shopList: [
      // {
      //   id: 1,
      //   banner: "images/banner/1.png",
      //   url: "/images/banner/1.png",
      //   name: "粗茶淡饭·隐庐私厨",
      //   areadyC: "130000",
      //   per: "100",
      //   type: "湖北菜",
      //   where: "徐东大街",
      //   dis: "0.5",
      //   discountList: [
      //     {
      //       id: 111,
      //       desc: "满200-20"
      //     },
      //     {
      //       id: 222,
      //       desc: "满200-20"
      //     }
      //   ]

      // },
      // {
      //   id: 1,
      //   banner: "images/banner/1.png",
      //   url: "/images/banner/1.png",
      //   name: "粗茶淡饭·隐庐私厨",
      //   areadyC: "130000",
      //   per: "100",
      //   type: "湖北菜",
      //   where: "徐东大街",
      //   dis: "0.5",
      //   discountList: [
      //     {
      //       id: 111,
      //       desc: "满200-20"
      //     },
      //     {
      //       id: 222,
      //       desc: "满200-20"
      //     }
      //   ]

      // },
      // {
      //   id: 1,
      //   banner: "images/banner/1.png",
      //   url: "/images/banner/1.png",
      //   name: "粗茶淡饭·隐庐私厨",
      //   areadyC: "130000",
      //   per: "100",
      //   type: "湖北菜",
      //   where: "徐东大街",
      //   dis: "0.5",
      //   discountList: [
      //     {
      //       id: 111,
      //       desc: "满200-20"
      //     },
      //     {
      //       id: 222,
      //       desc: "满200-20"
      //     }
      //   ]

      // }
    ],
    hasLocation: false,
    // guideShow: false,
    // guideJump: true,
    // guideList: [

    //   {
    //     url: '/images/Mhh/1.png',
    //     x: '50%',
    //     y: '45%',
    //     width: '602rpx',
    //     height: '892rpx',

    //   },

    //   {
    //     url: '/images/Mhh/3.png',
    //     x: '50%',
    //     y: '45%',
    //     width: '602rpx',
    //     height: '892rpx',

    //   },

    //   {
    //     url: '/images/Mhh/2.png',
    //     x: '50%',
    //     y: '45%',
    //     width: '602rpx',
    //     height: '892rpx',

    //   }

    // ]
  },
  onLoad() {
    // this.setData({
    //   guideShow:utils.getSS("showguide")
    // })
  },
  onShow() {
    // this.getLocation();
    this.showListInit();
  },
  towhere(e) {
    utils.toTar(e.currentTarget.dataset.url)
  },
  toShopDetail(e) {
    let index = e.currentTarget.dataset.index
    my.navigateTo({
      url: '/pages/shopDetail/shopDetail?id=' + this.data.shopList[index].id
    });
  },
  toJoin(e) {
    my.navigateTo({
      url: '/pages/Into/Into'
    });
  },
  getLocation() {
    var that = this;
    my.showLoading();
    my.getLocation({
      success(res) {
        my.hideLoading();
        console.log(res)
        that.setData({
          hasLocation: true,
          location: {
            longtitude: res.longitude,
            latitude: res.latitude
          }
        })
        that.showListInit()
      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
        that.showListInit();
      },
    })
  },
  shopInit() {//弃用
    let params = {
      page: "",
      limit: "",
      lat: this.data.location.latitude,
      lng: this.data.location.longitude,
      order: this.data.ordernum
    };
    // page	是	string	页码，默认为1
    // limit	是	string	每页数量，默认为20
    // lat	是	string	用户当前纬度
    // lng	是	string	用户当前经度
    // order	是	string	排序，1人气优先2优惠优先3距离优先，默认为3

    utils.myRequest("/restaurant/list", params, true).then((res) => {
      console.log(res);
      if (res.code == "0") {
        this.setData({
          shopList: res.data
        })
      } else {
        utils.tiperror("获取失败,请稍后重试", "none")
      }
    })
  },
  showListInit(){
    let params = {
      page: 1,
      limit: 20,
    };
    utils.myRequest("/mhh/list", params, true).then((res) => {
      console.log(res);
      if (res.code == "0") {
        this.setData({
          shopList: res.data
        })
      } else {
        utils.tiperror("获取失败,请稍后重试", "none")
      }
    })
  },
  changeList(e) {
    this.setData({
      ordernum: e.currentTarget.dataset.order
    })
    this.showListInit()
  },
  // /**
  //  * 关闭遮罩
  //  */
  // closeGuide() {

  //   this.setData({

  //     guideShow: false,

  //   });
  //   utils.setSS("showguide",false);

  // },
  /**
   * 进商家首页
   */
  goSDetail(e){
    let index = e.currentTarget.dataset.index;
    my.navigateTo({
      url:"/pages/shopDetail/shopDetail?id="+this.data.shopList[index].id
    })
  }
});
