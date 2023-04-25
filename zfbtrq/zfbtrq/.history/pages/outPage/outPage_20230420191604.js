import utils from "/utils/utils";
import WxValidate from '../../utils/WxValidate.js'
Page({
  data: {
    disabled: false,
    style:'button_show',
    mask:false,
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
      date: '',
      value: ''
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
        required: true,
        name:true
      },
      phone: {
        required: true,
        tel:true,
      },
      address: {
        required: true,
        address:true
      },
      date: {
        required:true
      },
      value: {
        required: true
      },
      

    }
    const messages = {
      name: {
        required: "请输入您的姓名",
      },
      phone: {
        required: '请输入您的电话',
      },
      address: {
        required: "请输入您的地址"
      },
      date: {
        required: "请选择您的预约日期"
      },
      value: {
        required: "请选择您的套餐方案"
      },
      

    }
    this.WxValidate = new WxValidate(rules, messages);
  },

  
  iptFn(e) {
    console.log(e)
    let item = e.currentTarget.dataset.name;
    this.data.formObj[item] = e.detail.value;
    this.setData({
      formObj: this.data.formObj
    })
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
          date: res.date
        })
      },
    });
  },

  onSubmit(e){
    this.initValidate();
    console.log(e);
    let params = this.data.formObj;
    params.value = this.data.arrIndex != null ? this.data.objectArray[this.data.arrIndex].id : null;
    params.date = this.data.date != null ? this.data.date : null;
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
    my.request({
      url:'https://ali-activity.babel-group.com/api/backend.php',
      method: 'POST',
      dataType: 'json',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        // 'token':getSS("ng_ali_token")
      },
      data: params,
      success: (res) => {
        console.log(res)
        my.hideLoading();
         if(res.data.code=="1003"){
           blinkTips("重新鉴权,请重试")
          //  getToken();
           return;
        }
        if (res.data.code=="0") {
          that.setData({
            disabled:true,
            style: 'button_display'

          })
          my.showToast({
            type: 'success',
            content: '预约成功！'+'<br>+'请等待工作人员联系',
            
          });
        } else {
          my.showToast({
            type: 'fail',
            content: '预约失败！',

          });
        }
        // resolve(res.data);
      },
      // 当程序出错或是网络请求失败都会执行该方法
      fail: function (error) {
        my.showToast({
          type: 'fail',
          content: '网络错误！',

        });
        // reject(error);
      }
    });
  //   utils.myRequest('http://ali-activity.babel-group.com/api/backend.php', params, true).then((res) => {
  //     console.log(res)
  //     if(res.code=="0"){
  //       that.setData({
  //         mask:true
  //       })
  //     }else{
  //       utils.blinkTips(res.msg, "none");
  //     }
  //   }).catch((err) => {
  //     utils.blinkTips("提交失败请重试", "none");
  //   })
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
