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
      ————————————————
      版权声明：本文为CSDN博主「芝士焗红薯」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      原文链接：https://blog.csdn.net/weixin_44320032/article/details/126036444
            }
        }
    }
}
