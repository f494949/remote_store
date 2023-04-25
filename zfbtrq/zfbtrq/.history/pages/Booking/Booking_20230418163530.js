import utils from "/utils/utils";
import WxValidate from '../../utils/WxValidate.js'
Page({
  data: {
    mask:false,
    formObj:Object,
    userList: [],
    userIndex: 0,
    areaList: [{ "area_name": "汉阳", "area_id": 1, "value": "汉阳", "choose": false }, { "area_name": "武昌", "area_id": 2, "value": "武昌", "choose": false }, { "area_name": "洪山", "area_id": 3, "value": "洪山", "choose": false }, { "area_name": "江岸", "area_id": 4, "value": "江岸", "choose": false }, { "area_name": "江汉", "area_id": 5, "value": "江汉", "choose": false }, { "area_name": "硚口", "area_id": 6, "value": "硚口", "choose": false }, { "area_name": "东西湖", "area_id": 7, "value": "东西湖", "choose": false }, { "area_name": "车都", "area_id": 8, "value": "车都", "choose": false }, { "area_name": "光谷", "area_id": 9, "value": "光谷", "choose": false }],
    areaIndex: null,
    typeList: ["移表", "改管"],
    typeType: null,
    imgList: []
  },
  onLoad(options) {
    console.log(options);
    let formObj={
      classes: '',//	string	类型：2改管3安检
      member_id: '',//	string	客户列表里面的member_id
      tel: '',//	string	客户电话
      name: '',//	string	客户姓名EXT
      address: '',//	string	客户地址EXT2
      area: '',//	string	区域名称（例：东西湖）
      type: '',//	string	改管类别（只有改管有），“移表” 或“改管”，只有这两个值
      remark: '',//	string	备注
      imgs: '',//	string	图片地址，逗号分隔
      form_id: '',//	string	表单id，发消息用
    }
    this.setData({
      formObj:formObj
    })
    this.changeTitle(options.type);
    this.getArea();
  },
  onShow(){
    this.getBindList();
  },
  onUnload(){
    console.log("页面卸载")

  },
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
      area: {
        required:true
      },
      address: {
        required: true
      },
      type: {
        required: that.data.formtype == 2 ? true : false
      },
      remark: {
        required: true
      },
      imgs:{
        required: that.data.formtype == 2 ? true : false
      }


    }
    const messages = {
      name: {
        required: "请填写联系人姓名",
      },
      tel: {
        required: '请填写联系方式',
      },
      area: {
        required: "请选择所在区域"
      },
      address: {
        required: "请输入地址"
      },
      type: {
        required: "请选择类别"
      },
      remark: {
        required: "请填写描述"
      },
      imgs: {
        required: "请上传图片"
      }

    }
    this.WxValidate = new WxValidate(rules, messages);
  },
  changeTitle(type) {
    this.setData({
      formtype: type
    })
    my.setNavigationBar({
      title: type == 2 ? '我要改管' : '我要安检'
    })
  },
  /**
   * 列表
   */
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
  /**
* 打开遮罩 
*/
  onBotBtnTap(e) {
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
    this.setData({
      userIndex: e.currentTarget.dataset.index,
      showBot: false,
    })

  },
  getArea() {
    let parms = {
      type:1
    }
    utils.myRequest("/common/area-list", parms, true).then((res) => {
      console.log(res);
      if (res.code == "0") {
        res.data.splice(0, 1)
        this.setData({
          areaList: res.data
        })
      } else { }
    })
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      areaIndex: e.detail.value,
    });
  },
  bindObjPickerChange1(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      typeIndex: e.detail.value,
    });
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
   * 提交
   */
  onSubmit(e) {
    this.initValidate();
    console.log(e);
    let params = this.data.formObj;
    params.member_id = this.data.userList[this.data.userIndex].member_id
    params.form_id = e.detail.formId;
    params.classes = this.data.formtype;
    params.area = this.data.areaIndex != null ? this.data.areaList[this.data.areaIndex].value : null;
    params.type = this.data.typeIndex != null ? this.data.typeList[this.data.typeIndex] : null;
    params.imgs = this.data.imgList.toString()

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
  chooseImage: function (e) {
    var that = this;
    if (this.data.imgList.length == 9) {
      my.showToast({
        title: '最多9张',
      })
    } else {
      my.chooseImage({
        count: 1,
        success: (res) => {
          console.log(res)
          const path = res.apFilePaths[0];
          my.uploadFile({
            url: "https://wp.babel-group.cn/common/upload-img",
            fileType: 'image',
            fileName: 'file',
            filePath: path,
            header: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'token': utils.getSS("ng_ali_token")
            },
            success: (result) => {
              let list = that.data.imgList;
              if (JSON.parse(result.data).code == "0") {
                list.push(JSON.parse(result.data).data)
              }
              console.log(list)
              that.setData({
                imgList: list.splice(0, 9)
              })
            },
            fail: (err) => {
              console.log(err);

            }
          });
        },
        fail: (err) => {
          console.log(err);

        }
      })

    }
  },
  delimg: function (e) {
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    var list = this.data.imgList
    list.splice(index, 1)
    this.setData({
      imgList: list
    })
  },
  backToHome(){
    my.reLaunch({
      url: '/pages/HomePage/HomePage'
    });
  },
  showTips(){
    let content;
    if (this.data.formtype == 2) {
      content= "此工作单申请仅受理预约改管业务，金属波纹管连接，维修，漏气抢修业务请致电本公司热线中心电话96511"

    } else if(this.data.formtype==3) {
      content = "此工作单申请仅受理预约安检业务。金属波纹管连接，维修，漏气抢修业务请致电本公司热线中心电话96511"

    }
    my.alert({
      title: '温馨提示',
      content,
      buttonText: '知道了',
    });
  }
});
