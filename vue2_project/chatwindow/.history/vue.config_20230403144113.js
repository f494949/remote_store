module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/src/api': {  
              target: 'localhost:8080', 
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/api': ''
             }
            }
        }
    }
}
