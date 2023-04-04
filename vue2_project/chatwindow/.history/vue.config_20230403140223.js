module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/src/api': {  
              target: 'http://localhost:', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}
