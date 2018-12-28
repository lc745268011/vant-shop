import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import index from '@/page/index'
import goods from '@/page/goods'
import cart from '@/page/cart'
import order from '@/page/order'
import cardlist from '@/page/cardlist'
import orderDetail from '@/page/orderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/index',
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
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/cardlist',
      name: 'cardlist',
      component: cardlist
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
  ]
})
