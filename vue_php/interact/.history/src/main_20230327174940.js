import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    //配置路由
    router,
    components: { App },
    template: '<App/>'
  })