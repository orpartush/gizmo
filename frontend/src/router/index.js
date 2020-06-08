import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home.vue'
import editorPage from '../views/editor.vue'
import templatePage from '../views/template.vue'
import website from '../views/website.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/editor/:id',
    name: 'Editor',
    component: editorPage
  },
  {
    path: '/template',
    name: 'Template',
    component: templatePage
  },
  {
    path: '/website/:id',
    name: 'Website',
    component: website
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
