module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {
             //设置你调用的接口域名和端口号 别忘了加http
              target: 'http://localhost:8080/', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}
