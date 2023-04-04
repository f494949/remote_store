module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/src/api': {  
              target: '', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}
