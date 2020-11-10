// import Vue from 'vue'
// import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainBox',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/articles/:id',
        name: 'm-article',
        props: true,
        component: () => import('../views/Article.vue')
      }
    ]
  },
  {
    path: '/heroes/:id',
    name: 'hero',
    props: true,
    component: () => import('../views/Hero.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
