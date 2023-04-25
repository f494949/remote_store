import utils from "/utils/utils";
Page({
  data: {
    pageIndex: 1,
    modalOpened: false,
    isarea: null,
    areaList: [{
      name: "全部地区",
      value: "",
      choose: true
    }, {
      name: "汉阳区",
      value: "汉阳区",
      choose: false
    }, {
      name: "东西湖区",
      value: "东西湖区",
      choose: false
    }, {
      name: "硚口区",
      value: "硚口区",
      choose: false
    }, {
      name: "武昌区",
      value: "武昌区",
      choose: false
    }, {
      name: "洪山区",
      value: "洪山区",
      choose: false
    }, {
      name: "江汉区",
      value: "江汉区",
      choose: false
    }, {
      name: "江岸区",
      value: "江岸区",
      choose: false
    }, {
      name: "其他",
      value: "其他"
    }],
    typeList: [
      //   {
      //   name: "全部类型",
      //   value: "",
      //   choose: true
      // }, {
      //   name: "营业厅",
      //   value: "营业厅",
      //   choose: false
      // }, {
      //   name: "服务点",
      //   value: "服务点",
      //   choose: false
      // }, {
      //   name: "圈存点",
      //   value: "圈存点",
      //   choose: false
      // }
    ],
    showtop: false,//地区遮罩
    flobj: {
      area: "",
      type: ""
    },
    mylocat: {},//我的位置
    locat: {},//当前点位
    ismap: true,
    pickedPoint: null,//被选中的点
    hasLocation: false,//是否有坐标
    mapset: {
      // 手势
      gestureEnable: 1,
      // 比例尺
      showScale: 1,
      // 指南针
      showCompass: 1,
      //双手下滑
      tiltGesturesEnabled: 1,
      // 交通路况展示
      trafficEnabled: 0,
      // 地图 POI 信息
      showMapText: 0,
    },
    markersList: [],
    backmarkersList: [],

  },
  onLoad() {
    this.getLocation();
    this.selInit();
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
          mylocat: res
        })
        that.getMapItem(res.latitude, res.longitude);

        // that.ChangeC(that.data.markersList[0].latitude,that.data.locat.longitude = that.data.markersList[0].longitude)
      },
      fail() {
        my.hideLoading();
        utils.tipsBack("地理位置获取失败", "fail")
      },
    })
  },
  /**
   * 单个详情
   */
  pickonePoint(e, initdata) {
    console.log(initdata)
    let temp;
    if (initdata) {
      // temp = initdata
      temp = this.data.markersList[0]
    } else {
      temp = utils.findObj(this.data.markersList, 'id', e.markerId);
    }
    this.setData({
      pickedPoint: temp,
    })
    this.ChangeC(temp.latitude, temp.longitude)
  },
  /**
   * 换中心点
   */
  ChangeC(lat, lng) {
    this.data.locat.latitude = lat;
    this.data.locat.longitude = lng;
    this.setData({
      locat: this.data.locat
    })
  },
  /**
   * 新点
   */
  searchAround(e) {
    console.log(e.detail.value)
  },
  /**
   * 模式切换 
   */
  changeTpye(e) {
    let type = e.currentTarget.dataset.type;
    let tempb = this.data.ismap;
    if (type == "map") {
      tempb = true;
    } else {
      tempb = false;
    }
    this.setData({
      ismap: tempb
    })
  },
  /**
   * 打开遮罩 
   */
  onTopBtnTap(e) {
    let ctype = e.currentTarget.dataset.ctype;
    if (ctype == "area") {
      this.setData({
        isarea: true,
        showTop: true
      })
    } else {
      this.setData({
        showTop: true,
        isarea: false
      })
    }
  },
  /**
   * 关闭遮罩
   */
  onPopupClose() {
    this.setData({
      showTop: false,
    });
  },
  /**
   * 筛选 
   */
  chooseone(e) {
    let value = e.currentTarget.dataset.value;
    let index = e.currentTarget.dataset.index;
    let that = this;
    // for(let i in this.data.typeList){
    //   that.data.typeList[i].value = that.data.typeList[i].type_name
    // }


    let tempList = [];
    let listname = "";

    if (this.data.isarea) {
      tempList = this.data.areaList;
      this.data.flobj.area = value;
      this.data.flobj.areaid = tempList[index].area_id;
      listname = "areaList";
    } else {
      tempList = this.data.typeList;
      this.data.flobj.type = value;
      this.data.flobj.typeid = tempList[index].type_id;
      listname = "typeList";
    }
    for (let i in tempList) {
      tempList[i].choose = false;
    }
    tempList[index].choose = true;
    this.setData({
      flobj: this.data.flobj,
      showTop: false,
      [listname]: tempList,
      pageIndex: 1
    })
    let parmas = {
      platform:2,
      page: that.data.pageIndex,
      limit: '',
      lat: that.data.mylocat.latitude,
      lng: that.data.mylocat.longitude,
      type: that.data.flobj.typeid,
      area: that.data.flobj.areaid
    }
    my.showLoading();
    utils.myRequest("/office/list", parmas, true).then((res) => {
      if (res.code == "0") {
        let addlist = res.data.list;
        that.setData({
          markersList: addlist,
          // backmarkersList: addlist,
        })
        my.hideLoading();
        my.pageScrollTo({
          scrollTop: parseInt(1),
          duration: 300,
        });


      } else {
        utils.tipsBack("获取圈存点数据失败,请重试", "fail")
      }
    }).catch((err) => {
      utils.tipsBack("获取圈存点数据失败,请重试", "fail")
    })

    // if (this.data.flobj.area == "" && this.data.flobj.type == "") {
    //   console.log("双空");

    //   this.setData({
    //     markersList: this.data.backmarkersList
    //   })
    // } else {
    //   if (this.data.flobj.area == "") {
    //     console.log("筛类型");

    //     this.setData({
    //       markersList: utils.filter({ "type_name": this.data.flobj.type }, this.data.backmarkersList)
    //     })
    //   } else if (this.data.flobj.type == "") {
    //     console.log("筛地域");

    //     this.setData({
    //       markersList: utils.filter({ "area_name": this.data.flobj.area }, this.data.backmarkersList)
    //     })
    //   } else {
    //     console.log("双筛");

    //     this.setData({
    //       markersList: utils.filter({ "area_name": this.data.flobj.area, "type_name": this.data.flobj.type }, this.data.backmarkersList)
    //     })
    //   }
    // }
  },
  /**
   * 地图初始化
   */
  getMapItem(lat, lng,s_lat = '',s_lng = '',pickone = true) {
    my.showLoading();
    let that = this;
    let parmas = {
      page: that.data.pageIndex,
      limit: '',
      lat,
      lng,
      s_lat,
      s_lng,
      type: '',
      area: ''
    }
    utils.myRequest("/office/list", parmas, true).then((res) => {
      if (res.code == "0") {
        that.setData({
          formapList: res.data.list,
          markersList: res.data.list,
          // backmarkersList: res.data.list,
          bannerObj: res.data.banner
        })
        let obj = {
          latitude: "",
          longitude: ""
        };
        obj.latitude = lat;
        obj.longitude = lng;
        if(pickone){
          that.pickonePoint(false, obj);
        }
        

      } else {
        utils.tipsBack("获取圈存点失败,请重试", "fail")
      }
    }).catch((err) => {
      utils.tipsBack("获取圈存点失败,请重试", "fail")
    })

  },
  /**
 * 下拉初始化
 */
  selInit() {
    utils.myRequest("/common/area-list", "", true).then((res) => {
      console.log(res);
      if (res.code == "0") {
        this.setData({
          areaList: res.data
        })
      } else { }
    })
    utils.myRequest("/office/type-list", "", true).then((res) => {
      console.log(res);
      if (res.code == "0") {
        // let all = {
        //   id: "",
        //   type_name: "全部类型",
        //   choose: true
        // }
        // res.data.splice(0, 0, all)
        this.setData({
          typeList: res.data
        })
      } else { }
    })
  },
  /**
   * 排序
   */
  compare(val1, val2) {
    return val1.distance - val2.distance;
  },
  openModal(e) {
    console.log(e.currentTarget.dataset.id);

    let showmodel = utils.filter({ "id": e.currentTarget.dataset.id }, this.data.markersList);
    console.log(showmodel);

    this.setData({
      modalOpened: true,
      showmodel
    })
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  },
  mChangeFn(e) {
    var that = this;
    if(e.type == 'end' && e.causedBy == 'drag'){
      //console.log('update')
      that.getMapItem(that.data.mylocat.latitude,that.data.mylocat.longitude,e.latitude,e.longitude,false)
    }
  },
  outpage() {
    let bannertemp = this.data.bannerObj;
    let type = bannertemp[0].redirect_type;
    let url = decodeURIComponent(bannertemp[0].redirect_url);

    console.log(url)
    if (url != "" && url != null) {
      if (type == 1) {//外链
        my.navigateTo({
          url: "/pages/outPage/outPage?url=" + url
        })
      } else if (type == 2) {
        my.navigateTo({
          url
        })
      } else if (type == 3) {
        my.ap.navigateToAlipayPage({
          path: url,
          success: (res) => {
            console.log({ content: '系统信息' + JSON.stringify(res) });
          },
          fail: (error) => {
            console.log({ content: '系统信息' + JSON.stringify(error) });
          }
        })
      }

    }
  },
  events: {
    onReachBottom() {
      let that = this;
      this.setData({
        pageIndex: this.data.pageIndex * 1 + 1
      })
      let parmas = {
        page: that.data.pageIndex,
        limit: '',
        lat: that.data.mylocat.latitude,
        lng: that.data.mylocat.longitude,
        type: that.data.flobj.typeid,
        area: that.data.flobj.areaid
      }
      console.log("到底了");
      my.showLoading();
      utils.myRequest("/office/list", parmas, true).then((res) => {
        if (res.code == "0") {
          let addlist = res.data.list;
          that.setData({
            markersList: that.data.markersList.concat(addlist),
            // backmarkersList: that.data.markersList.concat(addlist),
          })
          my.hideLoading();

        } else {
          utils.tipsBack("获取圈存点数据失败,请重试", "fail")
        }
      }).catch((err) => {
        utils.tipsBack("获取圈存点数据失败,请重试", "fail")
      })
    },

  },
});
