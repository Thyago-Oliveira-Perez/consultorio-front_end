<template>
  <table class="table table-css">
    <thead>
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>Sexo</th>
        <th>Nacionalidade</th>
        <th>Telefone</th>
        <th>Tipo de Atendimento</th>
        <th>Convenio</th>
        <th>Data Vencimento Convenio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in infos" :key="info.id">
        <td>{{ info.nome }}</td>
        <td>{{ info.cpf }}</td>
        <td>{{ info.sexo }}</td>
        <td>{{ info.nacionalidade }}</td>
        <td>{{ info.telefone }}</td>
        <td>{{ info.tipoAtendimento }}</td>
        <td>{{ info.convenio }}</td>
        <td>{{ info.dataVencimento }}</td>
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
import { Paciente } from "@/model/paciente.model";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    infos: Paciente,
  },
})
export default class TablePaciente extends Vue {
  infos!: Paciente[];
}
</script>
