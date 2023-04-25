import utils from "/utils/utils";

Page({
  data: {
    currentTypeI:0,
    typeList: [
      {
        name: "全部公告",
        id: 1
      }, {
        name: "停气公告",
        id: 2
      }, {
        name: "安检公告",
        id: 3
      }, {
        name: "其他公告",
        id: 4
      }
    ],
    listData:[]
  },
  onLoad() {
    this.getList("1")
  },
  getList(id) {
    let that = this;
    let params = {
      cate_id:id
    }
    utils.myRequest("/article/list", params, true).then(res => {
      console.log(res);
      that.setData({
        listData: res.data
      })
    }).catch(err => {
      utils.tipsBack("请重试","fail")
    })
  },
  changeType:function(e){
    let index = e.currentTarget.dataset.index;
    let tid = e.currentTarget.dataset.id;
    this.setData({
      currentTypeI:index
    })
    this.getList(tid);
  },
  /**
   * 去详情
   */
  toDetail(e){
    let index = e.currentTarget.dataset.index;
    if(this.data.listData[index].bool_link=='1'){
      my.navigateTo({
        url: '/pages/outPage/outPage?url='+this.data.listData[index].link_url
      });
    }else{
      my.navigateTo({
        url: '/pages/noticeDetail/noticeDetail?id='+this.data.listData[index].id
      });
    }
  }
});
