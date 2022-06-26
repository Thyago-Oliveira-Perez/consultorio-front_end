<template>
  <table class="table table-css">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Ativo</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in infos" :key="info.id">
        <td>{{ info.nome }}</td>
        <td>{{ info.ativo }}</td>
        <td>{{ info.valor }}</td>
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
import { Options, Vue } from "vue-class-component";
import { Convenio } from "@/model/convenio.model";

@Options({
  components: {},
  props: {
    infos: Convenio,
  },
})
export default class TableConvenio extends Vue {
  infos!: Convenio[];
}
</script>
