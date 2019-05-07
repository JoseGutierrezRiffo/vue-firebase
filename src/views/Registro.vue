<template>
    <div>
        <h1>Registro de Usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, pass: pass1})" class="form-signin">

            <label for="" class="sr-only">Email Address</label>
            <input type="email" class="form-control" v-model="$v.email.$model" placeholder="Email Address" autofocus>
            <small class="text-danger d-block" v-if="!$v.email.email">Email invalido</small>

            <label for="" class="sr-only">Password</label>
            <input type="password" class="form-control" v-model="pass1" placeholder="Password" >
            <small class="text-danger d-block" v-if="!$v.pass1.minLength">Minimo 6 carácteres</small>

            <label for="" class="sr-only">Password</label>
            <input type="password" class="form-control" v-model="pass2" placeholder="Confirm Password">
             <small class="text-danger d-block" v-if="!$v.pass2.sameAs">Contraseña no coincide</small>
            <!--  -->
            <button class="btn btn-primary" type="submit" :disabled="!desactivar">Crear usuario</button>
        </form>
        <p v-if="error === 'auth/email-already-in-use'">Email ya registrado</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },

    methods: {
        ...mapActions(['crearUsuario'])
    },

    computed: {
        ...mapState(['error']),
        desactivar(){
            return this.pass1 === this.pass2 && this.pass1 != ''
        }
    },
    validations: {
      email: { required, email },
      pass1: { required, minLength:minLength(6)},
      pass2: { sameAs: sameAs('pass1')}
    }
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
