module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'www.test.com:80', 
              changeOrigin: true, //允许跨域
            }
        }
    }
}
