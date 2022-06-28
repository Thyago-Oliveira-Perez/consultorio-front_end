<template>
  <div class="column is-12">
    <h1>Lista de Agendamentos</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link" id="button-cadastrar">
      <router-link to="/cadastrarAgendamento" style="text-decoration: none;"
        >Adicionar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <TableAgendamentos :infos="agendas" />
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
import TableAgendamentos from "./table/TableAgendamentos.vue";
import { Agenda } from "@/model/agenda.model";

@Options({
  components: {
    TableAgendamentos,
  },
})
export default class AgendamentoView extends Vue {
  agendas = new Agenda();
}
</script>
