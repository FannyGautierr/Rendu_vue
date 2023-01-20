import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ClavierView from'../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'clavier',
    component: ClavierView
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
