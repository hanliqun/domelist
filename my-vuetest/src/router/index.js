import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/helloworld/HelloWorld'
import List from '@/components/list/list'
import Zhiling from '@/components/zhiling/zhiling'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld/',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/zhiling',
      name: 'Zhiling',
      component: Zhiling
    }
  ]
})
