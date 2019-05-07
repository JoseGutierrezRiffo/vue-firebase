import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/firestore");

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");

const config = require("../config");


const firebaseApp = firebase.initializeApp(config.firebase);

firebaseApp.firestore()

export default firebaseApp.firestore()


Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user) => {
  // console.log(user);
  if(user){
    store.dispatch('detectarUsuario', { email: user.email, uid: user.uid})
  }else{
    store.dispatch('detectarUsuario', null)
  }


  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

})


