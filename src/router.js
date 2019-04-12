import Vue from 'vue'
import Router from 'vue-router'

var firebase = require("firebase/app");


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "registro" */ './views/Registro.vue')
    },
    {
      path: '/',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "inicio" */ './views/Inicio.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import(/* webpackChunkName: "ingreso" */ './views/Ingreso.vue')
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import(/* webpackChunkName: "agregar" */ './views/Agregar.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import(/* webpackChunkName: "editar" */ './views/Editar.vue'),
      meta: { requiresAuth: true }
    }
  ]
})



router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser;

  if( rutaProtegida === true && user === null ){
    next({name: 'ingreso'})
  }else{
    next()
  }
})


export default router
