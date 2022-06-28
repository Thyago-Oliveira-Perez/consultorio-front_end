<template>
  <div class="column is-12">
    <h1>Convênios</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link" id="button-cadastrar">
      <router-link to="/cadastrarConvenio" style="text-decoration: none;"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <TableConvenio :infos="convenios" />
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
import TableConvenio from "./table/TableConvenio.vue";
import { Convenio } from "@/model/convenio.model";

@Options({
  components: {
    TableConvenio,
  },
})
export default class ConvenioView extends Vue {
  convenios = new Convenio();
}
</script>
