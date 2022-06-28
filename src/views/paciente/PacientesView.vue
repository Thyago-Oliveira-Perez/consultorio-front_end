<template>
  <div class="column is-12">
    <h1>Lista de Pacientes</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link button" id="button-cadastrar">
      <router-link to="/cadastrarPaciente" style="text-decoration: none"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <TablePaciente :infos="paciente" />
  </div>
</template>

<script lang="ts">
import { Paciente } from "@/model/paciente.model";
import { Options, Vue } from "vue-class-component";
import TablePaciente from "./table/TablePaciente.vue";

@Options({
  components: {
    TablePaciente,
  },
})
export default class PacientesView extends Vue {
  paciente = new Paciente();
}
</script>
