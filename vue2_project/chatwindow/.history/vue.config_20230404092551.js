module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'localhost', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
            }
            }
        }
    }
}
