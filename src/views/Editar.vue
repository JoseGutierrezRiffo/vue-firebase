<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="editarTarea(tarea)">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input type="text" v-model="$v.tarea.nombre.$model" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary mb-2" :disabled="$v.tarea.$invalid">Editar</button>
    </form>
    <small class="text-danger" v-if="!$v.tarea.nombre.required">Campo requirido</small>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id
    };
  },

  methods: {
    ...mapActions(["getTarea", "editarTarea"])
  },

  created() {
    this.getTarea(this.id);
  },

  computed: {
    ...mapState(["tarea"])
  },
  validations: {
    tarea: {
      nombre: { required }
    }
  }
};
</script>