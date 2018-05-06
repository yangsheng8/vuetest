import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestDemo from '@/components/testdemo/testdemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/testdemo',
      name:'testdemo',
      component:TestDemo
    }
  ]
})
