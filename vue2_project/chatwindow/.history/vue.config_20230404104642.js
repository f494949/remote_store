module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/api': {  
              target: 'http://localhost:2236', 
              changeOrigin: true, //允许跨域
            }
        }
    }
}
