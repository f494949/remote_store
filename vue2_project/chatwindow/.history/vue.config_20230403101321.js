module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'http://localhost/', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}
