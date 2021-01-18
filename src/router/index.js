import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '@/components/Todos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/merregistration',
    name: 'MerRegistration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MerRegistration.vue')
  },
  {
    path: '/start',
    name: 'Start',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Start.vue')
  },
  {
    path: '/dog',
    name: 'Dog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dog.vue')
  },
  {
    path: '/cat',
    name: 'Cat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cat.vue')
  },
  {
    path: '/fish',
    name: 'Fish',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Fish.vue')
  },
  {
    path: '/bird',
    name: 'Bird',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bird.vue')
  },
  {
    path: '/petacc',
    name: 'PetAcc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PetAcc.vue')
  },
  {
    path: '/update/:id',
    name: 'Update',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Update.vue')
  },
  {
    path: '/updatebird/:id',
    name: 'UpdateBird',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateBird.vue')
  },
  {
    path: '/updatecat/:id',
    name: 'UpdateCat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateCat.vue')
  },
  {
    path: '/updatefish/:id',
    name: 'UpdateFish',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateFish.vue')
  },
  {
    path: '/updatepet/:id',
    name: 'UpdatePet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdatePet.vue')
  },
  {
    path: '/addnew',
    name: 'AddNew',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddNew.vue')
  },
  {
    path: '/order',
    name: 'OrderHistory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderHistory.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import(/* webpackChunkName: "p-components" */ '../views/Components.vue')
  },
  {
    path: '/router',
    name: 'Router',
    component: () => import(/* webpackChunkName: "p-router" */ '../views/Router.vue')
  },
  {
    path: '/vuex/:genre?',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "p-vuex" */ '../views/Vuex.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "p-components" */ '../views/Error.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
