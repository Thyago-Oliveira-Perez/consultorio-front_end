<template>
  <div class="column is-12">
    <h1>Historicos</h1>
  </div>
  <div class="column is-12">
    <TableHistorico :infos="historico" />
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
import { Historico } from "../../model/historico.model";
import { Options, Vue } from "vue-class-component";
import TableHistorico from "./table/TableHistorico.vue";

@Options({
  components: {
    TableHistorico,
  },
})
export default class HistoricosView extends Vue {
  historico = new Historico();
}
</script>
