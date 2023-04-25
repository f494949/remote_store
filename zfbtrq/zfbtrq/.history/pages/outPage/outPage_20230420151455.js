import utils from "/utils/utils";
import WxValidate from '../../utils/WxValidate.js'
Page({
  data: {
    formObj:Object,
    objectArray: [
      {
        id: 'A套餐',
        name: 'A.1748元BZ-WQ10GI嵌入式灶具',
        // value: 'A套餐'
      },
      {
        id: 'B套餐',
        name: 'B.1642元BZ-WQ21GLT嵌入式灶具',
        // value: 'B套餐'
      },
      {
        id: 'C套餐',
        name: 'C.1193元BZ-WQ22G嵌入式灶具',
        // value: 'C套餐'
      },
      {
        id: 'D套餐',
        name: 'D.1997元BW-K1607EMG热水器',
        // value: 'D套餐'
      },
      {
        id: 'E套餐',
        name: 'E.1901元BW-K1307EMG热水器',
        // value: 'D套餐'
      },
    ],
    arrIndex: 0,
  },
  onLoad(options) {
    let formObj = {
      name: '',
      phone: '',
      address: '',
      apiDate: '',
      objectArray: ''
    }
    this.setData({
      formObj:formObj
    })


    
    // let outurl = decodeURIComponent(this.parseParam(options,options.url));
    // console.log(options);

    // this.setData({
    //   link: outurl,
    //   bgtips:options.bgtips

    // })
  },
  onShow(){
    // this.getBindList();
  },
  onUnload(){
    console.log("页面卸载")

  },

  // parseParam(param,exportUrl) {
    
  //   Object.keys(param).map((key)=>{
  //       console.log(key,param[key]);
  //       if(key!='url'){
  //         exportUrl += '&'+key + '=' + param[key] ;	
  //       }
  //   })
    
  //   return exportUrl;

  // },


  getBindList() {
    let that = this;
    utils.myRequest('/user/bind-list', { uid: utils.getSS("ng_ali_openid") }, true).then(res => {
      if (res.code == "0") {
        if(res.data.length!=0){
          this.setData({
            userList: res.data
          })
          that.showTips();
        }else{
          utils.blinkTips("请先绑定户号","none").then(()=>{
            my.navigateTo({
              url: '/pages/Bind/Bind'
            });
          })
          // utils.blinkTips("请先绑定户号","none").then(()=>{             my.navigateTo({               url: '/pages/Bind/Bind'             });           })
        }
      }else{
        utils.tipsBack("查询失败请稍后重试","fail")
      }
      console.log(res);

    }).catch(err =>{
        utils.tipsBack("查询失败请稍后重试","fail")
    })
  },



  initValidate() {
    const rules = {
      name: {
        required: true
      },
      tel: {
        required: true,
      },
      address: {
        required: true
      },
      apiDate: {
        required:true
      },
      objectArray: {
        required: true
      },
      

    }
    const messages = {
      name: {
        required: "请输入正确姓名",
      },
      tel: {
        required: '请输入正确电话',
      },
      address: {
        required: "请输入正确地址"
      },
      apiDate: {
        required: "请选择您的预约日期"
      },
      objectArray: {
        required: "请选择您的套餐方案"
      },
      

    }
    this.WxValidate = new WxValidate(rules, messages);
  },

  

  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },


  apiDatePicker(){
    my.datePicker({
      format: 'yyyy-MM-dd',//返回的日期格式
      // currentDate: '2023-01-09 ',
      // startDate: date.now(),//最小日期时间
      // endDate: '2023-01-10',
      success: res => {
        this.setData({
          apiDate: res.date
        })
      },
    });
  },

  onSubmit(e){
    this.initValidate();
    console.log(e);
    let params = this.data.formObj;
    params.name = this.data.name
    params.tel = e.detail.formId;
    params.address = this.data.formtype;
    params.apiDate = this.data.areaIndex != null ? this.data.areaList[this.data.areaIndex].value : null;
    params.value = this.data.arrIndex != null ? this.data.objectArray[this.data.ar] : null;
    console.log(params)
    if (!this.WxValidate.checkForm(params)) {
      console.log(this.WxValidate.errorList[0].msg);

      const error = this.WxValidate.errorList[0].msg
      utils.tiperror(error)
      return false
    } else {
      this.apply(params);
    }
  },
  apply(params) {
    let that = this;
    utils.myRequest('/work-order/apply?type=1', params, true).then((res) => {
      console.log(res)
      if(res.code=="0"){
        that.setData({
          mask:true
        })
      }else{
        utils.blinkTips(res.msg, "none");
      }
    }).catch((err) => {
      utils.blinkTips("提交失败请重试", "none");
    })
  },


  /**
   * 关闭遮罩
   */
  closetips(){
    this.setData({
      bgtips:0
    })
  },

});
