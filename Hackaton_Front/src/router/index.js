import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import('../views/RegisterView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () =>
        import('../views/LoginView.vue')
    },
      {
      path: '/forget',
      name: 'forget',
      component: () =>
        import('../views/ForgetView.vue')
    },
      {
      path: '/profil',
      name: 'profil',
      component: () =>
        import('../views/ProfilView.vue')
    },   {
      path: '/slide',
      name: 'slide',
      component: () =>
        import('../components/slidebar.vue')
    },
      {
      path: '/project',
      name: 'project',
      component: () =>
        import('../views/ProjectView.vue')
    },  
  ]
})

export default router
