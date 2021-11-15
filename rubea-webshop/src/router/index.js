import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import firebase from 'firebase'
import 'firebase/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import('../views/Nav.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/order/:id',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/thankyou/:id',
    name: 'Thankyou',
    component: () => import('../views/Thankyou.vue')
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: () => import('../views/Tracker.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Admin.vue'),
  },
  {
    path: '/orders',
    name: 'Orders',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Orders.vue')
  },
  {
    path: '/items',
    name: 'Items',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Items.vue')
  },
  {
    path: '/add',
    name: 'Add',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Add.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('login');
  }else{
    next();
  }
});

export default router
