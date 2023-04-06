module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'http://localhost:8081/', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}