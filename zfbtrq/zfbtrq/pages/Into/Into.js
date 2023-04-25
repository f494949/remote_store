import utils from "/utils/utils";
import WxValidate from '../../utils/WxValidate.js'


Page({
  data: {
    guideShow: false,
    guideJump: true,
    shopId:"",
    showDesc: false,
    step: 1,
    formObj: {},
    showBot: false,
    typeIndex: 0,
    typeList: [
      {
        id: 1,
        name: "湖北菜"
      },
      {
        id: 2,
        name: "川菜"
      },
      {
        id: 3,
        name: "粤菜"
      },
      {
        id: 4,
        name: "杭帮菜"
      },
      {
        id: 5,
        name: "西餐"
      },
      {
        id: 6,
        name: "日料"
      },
      {
        id: 7,
        name: "其他"
      }
    ],
    guideList: [

      {
        url: '/images/Mhh/1.png',
        x: '50%',
        y: '45%',
        width: '602rpx',
        height: '892rpx',

      },

      {
        url: '/images/Mhh/3.png',
        x: '50%',
        y: '45%',
        width: '602rpx',
        height: '892rpx',

      },

      {
        url: '/images/Mhh/2.png',
        x: '50%',
        y: '45%',
        width: '602rpx',
        height: '892rpx',

      }

    ]
  },
  onLoad() {
    this.checkStatus();
    this.setData({
      guideShow:utils.getSS("showguide")
    })
  },
  //验证函数
  initValidate() {
    let that = this;
    console.log(that.data.step == 2);
    
    const rules = {
      shopname: {
        required: true,
      },
      shoptype: {
        required: true
      },
      detailAdd: {
        required: true
      },
      conname: {
        required: true
      },
      phone: {
        required: true
      },
      cimg: {
        required: that.data.step == 2?true:false
      },
      fimg: {
        required: that.data.step == 2?true:false
      },


    }
    const messages = {
      shopname: {
        required: '请输入商家名称',
      },
      shoptype: {
        required: "请选择商家类型",
      },
      detailAdd: {
        required: "请输入详细地址"
      },
      conname: {
        required: "请输入联系人"
      },
      phone: {
        required: "请输入联系方式"
      },
      cimg: {
        required: "请上传营业执照"
      },
      fimg: {
        required: "请上传食物经营许可证"
      },

    }
    this.WxValidate = new WxValidate(rules, messages);
  },
  /**
   * 关闭活动说明
   */
  closeDeac() {
    this.setData({
      showDesc: false
    })
  },
  /**
   * 输入框
   */
  iptFn(e) {
    console.log(e)
    let item = e.currentTarget.dataset.name;
    this.data.formObj[item] = e.detail.value;
    this.setData({
      formObj: this.data.formObj
    })
  },
  /**
  * 打开遮罩 
  */
  onBotBtnTap(e) {
    console.log(1111);

    this.setData({
      showBot: true,
    });
  },
  /**
   * 关闭遮罩
   */
  onPopupClose() {
    this.setData({
      showBot: false,
    });
  },
  /**
   * 切换列表
   */
  chooseone(e) {
    
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    this.data.formObj.shoptype = this.data.typeList[index].id
    this.data.formObj.shoptypename = this.data.typeList[index].name
    this.setData({
      typeIndex: e.currentTarget.dataset.index,
      showBot: false,
      formObj: this.data.formObj
    })
    // this.getInvoiceList(this.data.userList[index].name);

  },
  /**
   * 下一步
   */
  toNext(e) {
    this.initValidate();

    let step = e.currentTarget.dataset.to;
    console.log(step);
    let params = this.data.formObj;
    if (step == 2||step == 3) {
      // console.log(e.detail.value);
      if (!this.WxValidate.checkForm(params)) {
        console.log(this.WxValidate.errorList[0].msg);

        const error = this.WxValidate.errorList[0].msg
        utils.tiperror(error)
        return false
      } else {
        if(step == 2 ){
          this.setData({
            step
          })
        }else if(step == 3){
          this.applyFn();
        }

      }
    }else{
      if(step == 4){
          my.reLaunch({
            url: '/pages/Mhh/Mhh'
          });
        }else if(step ==5){
          my.reLaunch({
            // url: '/pages/shopDetail/shopDetail?id='+this.data.shopId
            url: '/pages/Mhh/Mhh'
          });
        }
    }
  },
  /**
 * 图片上传返回为在线地址
 */
  imgupload: function (path,whichone ) {
    my.showLoading({
      title: '上传中',
    })
    let that = this;
    my.uploadFile({
      url: "https://wp.babel-group.cn/common/upload-img",
      fileType: 'image',
      fileName: 'file',
      filePath: path,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'token': utils.getSS("ng_ali_token")
      },
      success: function (img) {
        console.log(JSON.parse(img.data),whichone);
        if (JSON.parse(img.data).code == "0") {
          my.hideLoading();

          let path = JSON.parse(img.data).data;
          // let file_id = JSON.parse(img.data).data.file_id;
          that.data.formObj[whichone] = path;
          that.setData({
            formObj:that.data.formObj
          })

          // that.showimg(path, file_id);

        } else {
          utils.tiperror("上传失败请重试");
        }
      },
      fail: function (imgerr) {
        console.log(imgerr);
        my.hideLoading();
        utils.tiperror("上传失败请重试");
      }
    })
  },
  /**
   * 选择图来源
   */
  choosetype: function (e) {
    let that = this;
      my.chooseImage({
        count: 1,
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          console.log(res)
          that.imgupload(tempFilePaths[0],e.currentTarget.dataset.type);
          // that.showimg(tempFilePaths[0])
        }
      })
  },
  checkStatus(){
    let that = this;
    my.showLoading({
      content:"正在查询"
    });
    utils.myRequest("/restaurant/get-status", "", true).then((res) => {
      my.hideLoading();
      console.log(res);
      let status = 0;
      if (res.code == "0") {
        status = 1
        // this.setData({
        //   areaList: res.data
        // })
      } else if(res.code =="1001") {
        status = 3;
       }else if(res.code == "1002"){
         status = 4;

       }
      that.setData({
        step:status,
        shopId:res.data
      })
    })
  },
  applyFn(){
    let mydata = this.data.formObj;
    let params={
      name:mydata.shopname,//是	string	商家名称
      type:mydata.shoptype,//是	string	餐厅类型：1湖北菜2川菜3粤菜4杭帮菜5西餐6日料7其他
      address:mydata.detailAdd,//是	string	详细地址
      contact_name:mydata.conname,//是	string	联系人
      contact_tel:mydata.phone,//是	string	联系电话
      contact_email:mydata.emailnum,//是	string	联系email
      staff_no:mydata.usercode,//是	string	推荐员工工号
      yyzz_img:mydata.cimg,//是	string	营业执照照片url
      span_img:mydata.fimg,//是	string	食品安全照片url
    }
    let that = this;
    my.showLoading({
      content:"提交中"
    })
    utils.myRequest('/restaurant/apply', params, true).then((res) => {
      console.log(res)
      if(res.code == 0){
        my.hideLoading();
        that.setData({
          step:3
        })
      }else{
        utils.blinkTips("提交失败请重试", "none");
      }
    }).catch((err) => {
      utils.blinkTips("提交失败请重试", "none");
    })

  },
  previmg(e){
    let type = e.currentTarget.dataset.type;
    let url="";
    if(type==1){
      url = "https://upload-wp.babel-group.cn/backend/mhh2.png"
    }else if(type==2){
      url = "https://upload-wp.babel-group.cn/backend/mhh1.png"
    }
    my.previewImage({
      urls: [
        url
      ],
    });
  },
    /**
   * 关闭遮罩
   */
  closeGuide() {

    this.setData({

      guideShow: false,

    });
    utils.setSS("showguide",false);

  },
});
