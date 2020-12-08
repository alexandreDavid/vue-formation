import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
    beforeEnter: (to, from, next) => {
      if (!to.query || !to.query.search) {
        next({ name: 'Home' })
      }
      // if the search is empty we go back to the home page
      next()
    }
  },
  {
    path: '/my-list',
    name: 'MyList',
    component: () => import('../views/MyList.vue')
  },
  { path: '/:pathMatch(.*)', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
