import utils from "/utils/utils";

Component({
  mixins: [],
  data: {},
  props: {
    accountList:Array,
    isshow:Boolean
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    /**
     * 选中item
     */
    pickOne(e){
      console.log(e)
      let index = e.currentTarget.dataset.index;
      // console.log(this.props.accountList)
      let listtemp =  this.props.accountList;
      for(let i in listtemp){
        listtemp[i].choose = false
      }
      listtemp[index].choose = !listtemp[index].choose;
      this.setData({
        accountList:listtemp
      })
    },
    /**
     * 默认item
     */
    defaultOne(e){
      let index = e.currentTarget.dataset.index;
      // 成功后::::
      let listtemp =  this.props.accountList;
      for(let i in listtemp){
        listtemp[i].choose = false
      }
      listtemp[index].choose = !listtemp[index].choose;
      listtemp.sort((a, b) => a.choose < b.choose)
      this.setData({
        accountList:listtemp
      })
    },
    /**
     * 解绑item
     */
    freeBind(e){
      let that = this;
      // console.log(that.props.accountList);
      let index = e.currentTarget.dataset.index;
      let bind_id = that.props.accountList[index].bind_id;
      my.confirm({
        title: '确认',
        content: '您是否想解绑：\n'+that.props.accountList[index].userno+'',
        confirmButtonText: '确认',
        cancelButtonText: '暂不',
        success: (result) => {
          console.log(result);
          if(result.confirm){
            // console.log("解绑");
            my.showLoading({
              content:"正在解绑..."
            });
            
            utils.myRequest("/user/unbind",{bind_id:bind_id},true).then(res=>{
              if(res.code=="0"){
                utils.blinkTips("解绑成功","success");
                // 成功后::::
                let listtemp =  this.props.accountList;
                listtemp.splice(index,1);
                this.setData({
                  accountList:listtemp
                })
              }else{
                utils.blinkTips(res.msg)
              }
            }).catch(err=>{
                utils.blinkTips("解绑失败,请稍后重试","fail")
            })

          }else{

          }
        },
      });
      

    }
  },
});
