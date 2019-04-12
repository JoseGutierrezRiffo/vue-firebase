<template>
    <div>
        <h1>Ingreso de Usuario</h1> 
        <form @submit.prevent="ingresoUsuario({email: email, pass: pass})" class="form-signin">

            <label for="" class="sr-only">Email Address</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email Address" required autofocus>

            <label for="" class="sr-only">Password</label>
            <input type="password" class="form-control" v-model="pass" placeholder="Password" required>

            <button class="btn btn-success" type="submit">Ingresar</button> 
        </form> 
        <p>{{error}}</p>  
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Ingreso',
    data() {
        return {
            email: '',
            pass: ''
        }
    },

    methods: {
        ...mapActions(['ingresoUsuario'])
    },

    computed: {
        ...mapState(['error'])
    },
}
</script>

<style scoped>
/* html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
} */

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
