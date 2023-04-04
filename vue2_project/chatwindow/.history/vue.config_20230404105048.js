module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'www.test.com', 
              changeOrigin: true, //允许跨域
            }
        }
    }
}
