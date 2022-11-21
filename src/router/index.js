import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import ContactsView from '../views/dashboard/contactsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
