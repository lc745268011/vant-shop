import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import goods from '@/page/goods'
import cart from '@/page/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
  ]
})
