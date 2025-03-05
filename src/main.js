import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProductPage from './pages/ProductPage.vue'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(VueRouter)

export const routes = [{
  path: '/',
  component: {
    default: HomePage,
    'wrapper': App
  }
},
{
    path: '/ProductPage/:itemId',
  component: {
    default: ProductPage,
    'wrapper': App
  }
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')


