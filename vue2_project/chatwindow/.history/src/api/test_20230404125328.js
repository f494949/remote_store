import http from '../utils/http'
let url = 'www.test.com'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// get请求
const testApi = {
  postListAPI (data) {
    console.log(data)
    return http.post('/api/data.php/', data)
  }
  // // 企业刊物列表
  // postList2API (data) {
  //   return http.post(url + '/api/home/houseOrgan/select', data)
  // },
  // // 班组文化墙列表
  // postList3API (data) {
  //   return http.post(url + '/api/home/culturalWall/select', data)
  // },
  // // 成都人详情
  // postdetailAPI (data) {
  //   return http.post(url + '/api/home/beautifulPeole', data)
  // },
  // // 企业刊物详情
  // postdetail2API (data) {
  //   return http.post(url + '/api/home/houseOrgan', data)
  // },
  // // 班组文化墙详情
  // postdetail3API (data) {
  //   return http.post(url + '/api/home/culturalWall', data)
  // },
  // // 点击浏览量接口
  // posttouchAPI (data) {
  //   return http.post(url + '/api/home/houseOrgan/addViews', data)
  // },
  // getFormAPI (data) {
  //   return http.get('/api/user/reg', data)
  // }
}
export default testApi
