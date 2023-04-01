module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {
              target: 'http://localhost:8080/', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}
