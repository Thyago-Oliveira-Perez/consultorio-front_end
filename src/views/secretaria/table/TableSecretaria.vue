<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Pis</th>
        <th>Data de Contratação</th>
        <th>Opções</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in infos" :key="info.id">
        <td>{{ info.nome }}</td>
        <td>{{ info.pis }}</td>
        <td>{{ info.dataContratacao }}</td>
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
</style>

<script lang="ts">
import { Secretaria } from "@/model/secretaria.model";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    infos: Secretaria,
  },
})
export default class TableSecretaria extends Vue {
  infos!: Secretaria[];
}
</script>
