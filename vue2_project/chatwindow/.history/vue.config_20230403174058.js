module.exports = {
    devServer:{
        open:true,
        proxy: {
            '/src/api': {  
              target: 'localhost', 
              changeOrigin: true, //允许跨域
            }
        }
    }
}
