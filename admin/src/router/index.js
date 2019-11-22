import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    name: 'mainBox',
    component: Main,
    children: [
      {
        path: '/categories/list',
        name: 'categoryList',
        component: () => import('../views/CategoryList.vue')
      },
      {
        path: '/items/list',
        name: 'itemList',
        component: () => import('../views/ItemList.vue')
      },
      {
        path: '/heros/list',
        name: 'heroList',
        component: () => import('../views/HeroList.vue')
      },
      {
        path: '/articles/list',
        name: 'articleList',
        component: () => import('../views/ArticleList.vue')
      },
      {
        path: '/ads/list',
        name: 'adList',
        component: () => import('../views/AdList.vue')
      },
      {
        path: '/admin_users/list',
        name: 'adminUserList',
        component: () => import('../views/AdminUserList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    Vue.prototype.$message({
      type: 'error',
      message: '无权访问，请先登录'
    })
    return next('/login')
  }
  next()
})

export default router
