<template>
  <div class="column is-12">
    <h1>Especialidades</h1>
  </div>
    <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link button" id="button-cadastrar">
      <router-link
        to="/cadastrarEspecialidade"
        style="text-decoration: none;"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <TableEspecialidade :infos="especialidades" />
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
import { Options, Vue } from "vue-class-component";
import TableEspecialidade from "./table/TableEspecialidade.vue";
import { Especialidade } from "@/model/especialidade.model";

@Options({
  components: {
    TableEspecialidade,
  },
})
export default class EspecialidadeView extends Vue {
  especialidades = new Especialidade();
}
</script>
