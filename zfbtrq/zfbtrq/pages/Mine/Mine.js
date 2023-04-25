import utils from "/utils/utils";

Page({
  data: {
    accountList: [
      // {
      //   name: "某某某1",
      //   usercode: "1233445456",
      //   choose: true,
      //   address: "地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute: "个人用户"
      // },
      // {
      //   name: "某某某2",
      //   usercode: "1233445456",
      //   choose: false,
      //   address: "地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute: "个人用户"
      // },
      // {
      //   name: "某某某3",
      //   usercode: "1233445456",
      //   choose: false,
      //   address: "地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute: "个人用户"
      // },
      // {
      //   name: "某某某3",
      //   usercode: "1233445456",
      //   choose: false,
      //   address: "地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute: "个人用户"
      // },
      // {
      //   name: "某某某3",
      //   usercode: "1233445456",
      //   choose: false,
      //   address: "地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute: "个人用户"
      // }
    ]
  },
  onShow() {
    this.getBindList();
    // this.getUserBase();
  },
  towhere(e){
    utils.toTar(e.currentTarget.dataset.url)
  },
  onGetAuthorize(e) {
    // my.getPhoneNumber({
    //   success: (res) => {
    //     let encryptedData = res.response;
    //     utils.myRequest('/ali-gate/decrypt-phone', { encryptedData: encryptedData }, true).then((res) => {
    //       console.log(res)
    //       if (res.data.code == '0') {
    //         utils.setSS("phonenum", res.data.data.phone);
    //         my.navigateTo({
    //             url: '/pages/Bind/Bind'
    //           });
    //       } else {
    //         utils.blinkTips("手机号获取失败,请自行填写信息绑定", "none").then(() => {
              my.navigateTo({
                url: '/pages/Bind/Bind'
              });

    //         })
    //       }
    //     }).catch((err) => {
    //       utils.blinkTips("手机号获取失败,请自行填写信息绑定", "none");
    //       my.navigateTo({
    //         url: '/pages/Bind/Bind'
    //       });
    //     })
    //   },
    //   fail: (res) => {
    //     console.log(res);
    //     console.log('getPhoneNumber_fail');
    //     utils.blinkTips("手机号获取失败,请自行填写信息绑定", "none");
    //     my.navigateTo({
    //       url: '/pages/Bind/Bind'
    //     });
    //   },
    // });
  },
  onAuthError() {
    utils.blinkTips("手机号获取失败,请自行填写信息绑定", "none");
    my.navigateTo({
        url: '/pages/Bind/Bind'
      });
  },
  /**
   * 获取绑定的列表
   */
  getBindList(){
    utils.myRequest('/user/bind-list',{uid:utils.getSS("ng_ali_openid")},true).then(res=>{
      if(res.code== "0"){
        this.setData({
          accountList:res.data
        })
      }
      console.log(res);
      
    })
  },
  // getUserBase(){
  //   my.getOpenUserInfo({
  //     success: (userinfo) => {
  //     console.log(userinfo)
  //     }
  //   });
  // }
});
