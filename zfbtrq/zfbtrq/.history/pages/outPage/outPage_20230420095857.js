Page({
  data: {
    link: "",
    bgtips:"",
    // currentDate: '',
    // startDate: '',
    // endDate: '',
    objectArray: [
      {
        id: 'A套餐',
        name: 'A.399元壁挂炉清洗A套餐',
        // value: 'A套餐'
      },
      {
        id: 'B套餐',
        name: 'B.899元系统清洗保养B套餐',
        // value: 'B套餐'
      },
      {
        id: 'C套餐',
        name: 'C.1099元全系统清洗保养1次C套餐',
        // value: 'C套餐'
      },
      {
        id: 'D套餐',
        name: 'D.1899元全系统清洗保养2次D套餐',
        // value: 'D套餐'
      },
    ],
    arrIndex: 0,
  },
  onLoad(options) {
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

  apiDatePicker(){
    my.datePicker({
      format: 'yyyy-MM-dd',//返回的日期格式
      currentDate: '2023-01-09 11:11:11',//初始选择的日期时间，默认当前时间
      startDate: '2012-01-01 11:11:11',//最小日期时间
      endDate: '2023-01-10 11:11:11',//最大日期时间
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
