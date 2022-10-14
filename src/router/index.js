import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ClientHome from '../pages/client/home-client/home-client.vue'
import MainHome from '../pages/main'
import Order from '../pages/client/order/order.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHome',
      component: MainHome
    },
    {
      path: '/pos_parent',
      name: 'HomeClient',
      component: ClientHome
    },
    {
      path: '/order',
      name: 'OrderClient',
      component: Order
    }
    // not found
  ],
  mode: 'history'
})
