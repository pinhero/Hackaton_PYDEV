import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import('../views/RegisterView.vue')
    },
    {
      path: '/login',
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
    },
    {
      path: '/project',
      name: 'project',
      component: () =>
        import('../views/ProjectView.vue')
    },  
      {
      path: '/pop',
      name: 'pop',
      component: () =>
        import('../components/popup.vue')
    },  
  ]
})

export default router
