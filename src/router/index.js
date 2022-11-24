import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import ContactsView from '../views/dashboard/contactsView.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
