//@param condition 过滤条件
//@param data 需要过滤的数据
const filter = (condition, data) => {
  console.log(condition,data);
  
  return data.filter(item => {
    return Object.keys(condition).every(key => {
      return String(item[key]).toLowerCase().includes(
        String(condition[key]).trim().toLowerCase())
    })
  })
}
var flag = 0;
const simpleRequest = async(url, params ,token) => {
  return await new Promise((resolve, reject) => {
    my.showLoading();
    my.request({
      // url: defalutUrl(url),
      method: 'POST',
      dataType: 'json',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'token':getSS("ng_ali_token")
      },
      data: params,
      success: (res) => {
        console.log(res)
        my.hideLoading();
         if(res.data.code=="1003"){
           blinkTips("重新鉴权,请重试")
           getToken();
           return;
        }
        resolve(res.data);
      },
      // 当程序出错或是网络请求失败都会执行该方法
      fail: function (error) {
        my.hideLoading();
        reject(error);
      }
    });
  })
  
}
const myRequest = (url, params ,token) => {
  console.log("step:"+(flag++)+'+url:'+url);
  let t = getSS("ng_ali_token");
  if(t == null){
    return auth().then(res => {
      console.log(res)
      return simpleRequest(url, params ,token)
    });
  }else{
    return simpleRequest(url, params ,token)
  }
  
}
/**
 * 通过某个属性名找对象
 */
const findObj = (array, str, _id) => {
  console.log(array, str, _id)
  let result = array.find((item) => {
    console.log(item[str] == _id)
    return item[str] == _id
  })
  return result;
}
/**
 * 提示获取失败并后退
 */
const tipsBack = (str,icon) => {
  my.showToast({
    type: icon||'fail',
    content: str,
    duration: 3000,
    success: () => {
      my.navigateBack();
    },
  });
}
/**
 * 时间戳转换时间
 */
const getdate = (timestemp) => {
  var now = timestemp;
  // console.log(now);
  now = new Date(now)
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}
/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
*/

const timestampToDate = (timestemp) => {
  var date = new Date(timestemp*1000);

  var y = date.getFullYear();

  var m = date.getMonth() + 1;

  m = m < 10 ? ('0' + m) : m;

  var d = date.getDate();

  d = d < 10 ? ('0' + d) : d;

  var h = date.getHours();

  h = h < 10 ? ('0' + h) : h;

  var minute = date.getMinutes();

  var second = date.getSeconds();

  minute = minute < 10 ? ('0' + minute) : minute;

  second = second < 10 ? ('0' + second) : second;

  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;//年月日时分秒

  //return h + ':' + minute;
}
/**
 * 检查openid
 */
const checkOpenid = page => {
  let that = page;
  let flag = false;
  try {
    var value = getSS('ng_ali_openid');
    if (value && value != null) {
      flag = true;
    }
  } catch (e) {

  }
  return flag;
}
/**
 * 获取openid
 */
const getId = async() => {
  return await new Promise((resolve, reject) => {
    my.getAuthCode({
      scopes: 'auth_base', // 主动授权：auth_user，静默授权：auth_base
      success: (res) => {
        if (res.authCode) {
          // 认证成功
          myRequest('/auth/login2', { auth_code: res.authCode + "" }).then(data => {
            setSS("ng_ali_openid", data.data.uid);
            setSS("ng_platform_id", data.data.platform_id);

            // 干净登录时重新获取token
            if (getSS("ng_ali_token") && getSS("ng_ali_token") != null) { } else {
              getToken();
            }
            resolve()
            //成功的方法
          }).catch(err => {
            console.log("登录失败原因:"+JSON.stringify(err))
            blinkTips("登录失败,请重试", "fail");
            reject()
          })
        }
      },
    })
  })
}
/**
 * 获取token
 */
const getToken = data => {
  let parmas = {
    uid: getSS("ng_ali_openid"),
    platform_id: getSS("ng_platform_id"),
    platform: 2
  }
  myRequest("/auth/get-token", parmas).then((res) => {
    my.hideLoading({});
    setSS("ng_ali_token", res.data.token)
  }).catch(err => {
    getToken();
    blinkTips("鉴权失败,请重试");
  })
}
/**
 *  提示 
 */
const blinkTips = (str, icon) => {
  return new Promise((resolve, reject) => {
    my.showToast({
      type: icon,
      content: str,
      duration: 3000,
      success: () => {
        resolve();
      }
    });
  })
}
/**
 * 同步存 
 */
const setSS = (key, value) => {
  my.setStorageSync({
    key,
    data: value
  });
}
/**
 * 同步取 
 */
const getSS = (key => {
  return my.getStorageSync({ key: key }).data
})
/**
 * 默认接口地址
 */
const defalutUrl = path => {
  return "https://wp.babel-group.cn" + path
}
/**
 * 跳大页
 */
const toTar =( url =>{
  my.reLaunch({
      url
  });
})

/**
 * 弱提示
 */
const tiperror = text => {
  
  my.showToast({
    content: text
  })
}

const authUid = async() => {
  return await new Promise((resolve, reject) => {
    my.getAuthCode({
      scopes: 'auth_base', // 主动授权：auth_user，静默授权：auth_base
      success: (res) => {
        my.request({
          url: defalutUrl('/auth/login2'),
          method: 'POST',
          data: { auth_code: res.authCode + "" },
          success: (res) => {
            let data = res.data;
            setSS("ng_ali_openid", data.data.uid);
            setSS("ng_platform_id", data.data.platform_id);

            resolve({"ng_ali_openid":data.data.uid,"ng_platform_id":data.data.platform_id})
          },
          fail: function (error) {
            reject(error);
          }
        })
      }
    })
  })
}
const authToken = async() => {
  return await new Promise((resolve, reject) => {
    let params = {
      uid: getSS("ng_ali_openid"),
      platform_id: getSS("ng_platform_id"),
      platform: 2
    }
    my.request({
      url: defalutUrl('/auth/get-token'),
      method: 'POST',
      data: params,
      success: (res) => {
        let data = res.data;
        setSS("ng_ali_token", data.data.token)

        resolve(data.data.token)
      },
      fail: function (error) {
        reject(error);
      }
    })
  })
}
const auth = async() =>{
  return await new Promise((resolve, reject) => {
    let uidP = authUid()
      
    uidP.then(res => {
      var ng_ali_openid = res.ng_ali_openid;
      var ng_platform_id = res.ng_platform_id;
      let tokenP = authToken()
      tokenP.then(res => {
        resolve({"ng_ali_openid":ng_ali_openid,"ng_platform_id":ng_platform_id,"ng_ali_token":res})
      }).catch(err => {
        reject(err)
      })
    }).catch(err =>{
      reject(err);
    })
  })
}

module.exports = {
  myRequest: myRequest,
  filter: filter,
  findObj: findObj,
  tipsBack: tipsBack,
  getdate: getdate,
  checkOpenid: checkOpenid,
  defalutUrl: defalutUrl,
  getToken: getToken,
  blinkTips: blinkTips,
  getSS,
  setSS,
  getId,
  toTar,
  tiperror,
  timestampToDate:timestampToDate
}
