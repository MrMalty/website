import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPages from './pages/ProductsPages.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

createApp(App)
  .use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
      path: '/',
      component :ProductsPages,
    },{
      path: '/cart',
      component: ShoppingCartPage,
    }, {
      path: '/products',
      component: ProductsPages,
      }, {
      path: '/products/:productId',
        component: ProductDetailPage,
      }, {
      path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    }]
  }))
  .mount('#app')
