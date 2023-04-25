import utils from "/utils/utils";
Page({
  data: {
    status:3,//0查询中 1查询无或无手机号或直接点绑定新 2查询到多条 3确认
    phonehide:"156****1111",
    userinfo:{
      // address:"市东西湖区马池路环湖中路联通佳苑*****10楼1号",
      // dateline:1596450426,
      // easy_no:"884466221155cc11aa11",
      // iccard_no:"20679914",
      // id:3,
      // orgid:"1",
      // type:"2",
      // username:"*文旭",
      // userno:"1401052472",
    },
    phoneipt:"",
    accountList:[
      // {
      //   name:"某某某1",
      //   usercode:"1233445456",
      //   choose:true,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"      
      // },
      // {
      //   name:"某某某2",
      //   usercode:"1233445456",
      //   choose:false,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"
      // },
      // {
      //   name:"某某某3",
      //   usercode:"1233445456",
      //   choose:false,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"
      // },
      // {
      //   name:"某某某3",
      //   usercode:"1233445456",
      //   choose:false,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"
      // },
      // {
      //   name:"某某某3",
      //   usercode:"1233445456",
      //   choose:false,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"
      // },
      // {
      //   name:"某某某3",
      //   usercode:"1233445456",
      //   choose:false,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"
      // },
      // {
      //   name:"某某某3",
      //   usercode:"1233445456",
      //   choose:false,
      //   address:"地址地址地址地址地址地址地址地址地址地址地址地址地",
      //   attribute:"个人用户"
      // }
    ]
  },
  onLoad() {
    console.log(utils.getSS("phonenum"))
    if(utils.getSS("phonenum")==null){
      this.setData({
        status:1
      })
    }else{
      // 手机号查询接口补补补补补补补补
      this.setData({
        status:0,
        phoneipt:utils.getSS("phonenum")
      })
    }
  },
  onSubmit(e){
    if(e.detail.value.username==""||e.detail.value.userno==""){
      utils.blinkTips("请检查输入","none")
    }else{
      my.showLoading({
        content:"正在查询..."
      });
      console.log(e)
      utils.myRequest("/user/query-member-info",e.detail.value,true).then(res=>{
        my.hideLoading();
        console.log(res)
        if(res.code == 0){
          this.setData({
            userinfo:res.data,
            status:3,
            phoneipt:res.data.phone
          })
        }else{
          utils.blinkTips(res.msg,"none")

        }
      }).catch(err=>{
        my.hideLoading();
        console.log(err);
        utils.blinkTips("查询出错,请稍后重试","fail")
      })
    }
  },
  bindIpt(e){
    this.setData({
      phoneipt:e.detail.value
    })
  },
  /**
   * 验证码发送
   */
  onSend(){
    let that = this;
    
    if(!this.data.phoneipt || this.data.phoneipt == ""){
      utils.blinkTips("请输入手机号")
    }else{
      utils.myRequest("/common/send-sms",{phone:that.data.phoneipt},true).then(res=>{
        if(res.code == "0"){
          utils.blinkTips("发送成功","success")
        }else{
          
          utils.blinkTips(res.msg,"fail")
        }
      }).catch(err=>{
          utils.blinkTips("发送失败,请稍后重试","fail")
      })
    }
  },
  /**
   * 验证码输入
   */
  onInput(e){
    this.setData({
      verifyCode: e.detail.value,
    });
  },
  /**
   * 绑定确认
   */
  cfmSubmit(e){
    console.log(e.detail.value);
    let params = e.detail.value;
    params.member_id = this.data.userinfo.id;
    console.log(params);
    utils.myRequest("/user/bind",params,true).then(res=>{
      console.log(res);
      
      if(res.code=="0"){
        utils.tipsBack("绑定成功","success");
      }else{
          console.log("绑定不成功:"+res.data.msg);

        utils.blinkTips(res.msg,"none")
      }
    }).catch(err=>{
      utils.blinkTips("绑定失败,请稍后再试","fail")
    })
  }
});
