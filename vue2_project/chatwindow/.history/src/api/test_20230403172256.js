import http from '../utils/http'
// let url = 'localhost'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// get请求
const testApi = {
  postListAPI (params) {
    console.log(params)
    return http.post('url + /src/api/data.php', params)
  }
  // // 企业刊物列表
  // postList2API (params) {
  //   return http.post(url + '/api/home/houseOrgan/select', params)
  // },
  // // 班组文化墙列表
  // postList3API (params) {
  //   return http.post(url + '/api/home/culturalWall/select', params)
  // },
  // // 成都人详情
  // postdetailAPI (params) {
  //   return http.post(url + '/api/home/beautifulPeole', params)
  // },
  // // 企业刊物详情
  // postdetail2API (params) {
  //   return http.post(url + '/api/home/houseOrgan', params)
  // },
  // // 班组文化墙详情
  // postdetail3API (params) {
  //   return http.post(url + '/api/home/culturalWall', params)
  // },
  // // 点击浏览量接口
  // posttouchAPI (params) {
  //   return http.post(url + '/api/home/houseOrgan/addViews', params)
  // },
  // getFormAPI (params) {
  //   return http.get('/api/user/reg', params)
  // }
}
export default testApi
