import { createRouter, createWebHistory } from 'vue-router'
import login from '@/view/login/index.vue'
import test1 from '@/view/test1/index.vue'
import test2 from '@/view/test2/index.vue'

const routes = [
  { path: '/', component: login },
  { path: '/test1', component: test1 },
  { path: '/test2', component: test2 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)

  next()
})

export default router
