import utils, { getToken } from "/utils/utils";
import regeneratorRuntime from 'regenerator-runtime';
App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    my.setStorage({
      key: 'showguide',
      data: true
    });
    console.info('App onLaunch');
  },
  onShow(options) {
    // if(utils.checkOpenid()){

    // }else{
    //   // utils.auth()
      
    // }
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  
});
