module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'www.test.com', 
              changeOrigin: true, //允许跨域
              onProxyReq: function (proxyReq, req, res) {
                // 实在不知道代理后的路径，可以在这里打印出出来看看2
                console.log('原路径1：' + req.originalUrl, '代理路径1：' + req.path)
              }

            }
        }
    }
}
