<template>
  <div class="column is-12">
    <h1>Lista de Medicos</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button id="button-cadastrar">
      <router-link to="/" style="text-decoration: none; color: black"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <TableMedico :infos="medico" />
  </div>
</template>

<style>
#button-cadastrar {
  height: 40px;
  border-radius: 5px;
  background-color: #42b983;
}
</style>

<script lang="ts">
import { Medico } from "@/model/medico.model";
import { Options, Vue } from "vue-class-component";
import TableMedico from "./table/TableMedico.vue";

@Options({
  components: {
    TableMedico,
  },
})
export default class MedicosView extends Vue {
  medico = new Medico();
}
</script>
