import utils from "/utils/utils";
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

  // parseParam(param,exportUrl) {
    
  //   Object.keys(param).map((key)=>{
  //       console.log(key,param[key]);
  //       if(key!='url'){
  //         exportUrl += '&'+key + '=' + param[key] ;	
  //       }
  //   })
    
  //   return exportUrl;

  // },

  initValidate() {
    let that = this;
    console.log(that.data.step == 2);

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
      
      remark: {
        required: true
      },
      

    }
    const messages = {
      name: {
        required: "请输入您的姓名",
      },
      tel: {
        required: '请输入您的电话',
      },
      address: {
        required: "请输入您的地址"
      },
      type: {
        required: "请选择类别"
      },
      remark: {
        required: "请填写描述"
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
    if(e.detail.value.name==""||e.detail.value.phone==""||e.detail.value.address==""||
    e.detail.value.apiDate==""||e.detail.value.objectArray==""){
      utils.blinkTips("请检查输入","none")
    }else{
      my.showLoading({
        content:"正在预约..."
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


  /**
   * 关闭遮罩
   */
  closetips(){
    this.setData({
      bgtips:0
    })
  },

});
