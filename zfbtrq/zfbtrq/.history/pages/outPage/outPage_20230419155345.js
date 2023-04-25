Page({
  data: {
    link: "",
    bgtips:"",
    objectArray: [
      {
        id: 0,
        name: 'A.399元壁挂炉清洗A套餐',
        value: 'A套餐'
      },
      {
        id: 1,
        name: 'B.899元系统清洗保养B套餐',
        value: 'B套餐'
      },
      {
        id: 2,
        name: 'C.1099元全系统清洗保养1次C套餐',
      },
      {
        id: 3,
        name: 'D.1899元全系统清洗保养2次D套餐',
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
