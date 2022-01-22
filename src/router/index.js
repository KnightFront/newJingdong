import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // 在访问页面之前执行
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      // 如果已经登录过，就跳转到Home页面
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 单页应用实现前端拦截
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === 'Login') {
    next()
  } else {
    next({ name: 'login' })
  }
})
export default router
