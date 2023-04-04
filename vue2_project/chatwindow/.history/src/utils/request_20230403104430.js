/** **   request.js   ****/
// 导入axios
import axios from 'axios'
import config from '@/config/index'
const baseUrl =process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
// 1. 创建新的axios实例，
const service = axios.create({
  // 公共接口--这里注意后面会讲
  baseURL: baseUrl,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000,
})
// 2.请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = JSON.stringify(config.data) // 数据转化,也可以使用qs转换
    config.headers = {
      'Content-Type': 'application/json', // 配置请求头
    }
    //如有需要：注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    //const token = getCookie('名称');//这里取token之前，你肯定需要先拿到token,存一下
    //    if(token){
    //       config.params = {'token':token} //如果要求携带在参数中
    //       config.headers.token= token; //如果要求携带在请求头中
    //     }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 3.响应拦截器
service.interceptors.response.use(
  (response) => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response
  },
  (error) => {
    /***** 接收到异常响应的处理开始 *****/

    return Promise.resolve(error.response)
  }
)
//4.导入文件
export default service
