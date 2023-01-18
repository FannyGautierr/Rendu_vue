import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JournalView from '../views/JournalView.vue'
import ClavierView from'../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/journal',
    name: 'about',
    component: JournalView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/contactForm',
    name: 'contactForm',
    component: ContactForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router