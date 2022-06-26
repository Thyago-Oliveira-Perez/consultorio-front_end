<template>
  <table class="table table-css">
    <thead>
      <tr>
        <th>Data</th>
        <th>Paciente</th>
        <th>Secretaria</th>
        <th>Observações</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in infos" :key="info.id">
        <td>{{ info.data.getDate }}</td>
        <td>{{ info.paciente }}</td>
        <td>{{ info.secretaria }}</td>
        <td>{{ info.observacao }}</td>
        <td>{{ info.statusAgenda }}</td>
        <td>
          <button id="button-status">Desativar</button>
          <button id="button-edit">
            <router-link to="/" style="text-decoration: none; color: black"
              >Editar</router-link
            >
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
tr,
td {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

td {
  flex-direction: column;
}

button {
  margin: 2px;
  height: 26px;
  border-radius: 5px;
}

#button-status {
  background-color: red;
}

#button-edit {
  background-color: #42b983;
}

.table-css {
  width: 100%;
  border-radius: 5px;
}
</style>

<script lang="ts">
import { Historico } from "../../../model/historico.model"
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    infos: Historico,
  },
})
export default class TableHistorico extends Vue {
  infos!: Historico[];
}
</script>
