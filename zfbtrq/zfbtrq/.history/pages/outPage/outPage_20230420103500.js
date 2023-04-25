Page({
  data: {
    link: "",
    bgtips:"",
    formObj:Object,
    // currentDate: '',
    // startDate: '',
    // endDate: '',
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
      address: ''
    }


    // let url = decodeURIComponent(options);
    // decodeURIComponent(options.url)
    // console.log(url);
    let outurl = decodeURIComponent(this.parseParam(options,options.url));
    // let outurl1 = decodeURIComponent(outurl)
    console.log(options);
    
    // console.log(this.parseParam(options,options.url));

    this.setData({
      link: outurl,
      bgtips:options.bgtips

    })
  },
  parseParam(param,exportUrl) {
    
    Object.keys(param).map((key)=>{
        console.log(key,param[key]);
        if(key!='url'){
          exportUrl += '&'+key + '=' + param[key] ;	
        }
    })
    // exportUrl = exportUrl.substring(exportUrl.length-1,1)
    // console.log(exportUrl);   
    return exportUrl;

  },

  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },

  // datePicker() {
  //   const _today = this.formatDate(new Date())
  //   this.setData({
  //     startDate: _today,
  //     endDate: '',
  //     currentDate: _today
  //   });
  // },

  apiDatePicker(time){
    let date = new Date(time)

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

  /**
   * 关闭遮罩
   */
  closetips(){
    this.setData({
      bgtips:0
    })
  },

  // datePicker() {
  //   my.datePicker({
  //     success: (res) => {
  //       my.alert({
  //         content: '您选择的日期为: ' + res.date
  //       });
  //     },
  //   });
  // },
});
