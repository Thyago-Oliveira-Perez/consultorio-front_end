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
    <table class="table table-css">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Nacionalidade</th>
          <th>Telefone</th>
          <th>Tipo de Atendimento</th>
          <th>Convenio</th>
          <th>Data Vencimento Convenio</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in pacienteList" :key="info.id">
          <td>{{ info.nome }}</td>
          <td>{{ info.nacionalidade }}</td>
          <td>{{ info.telefone }}</td>
          <td>{{ info.tipoAtendimento }}</td>
          <td>{{ info.convenio }}</td>
          <td>{{ info.dataVencimento }}</td>
          <td style="display: flex; flex-direction: row">
            <button class="is-link button" id="button-status">Desativar</button>
            <button class="is-link button" id="button-edit">
              <router-link to="/" style="text-decoration: none; color: black"
                >Editar</router-link
              >
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
th {
  min-width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}

td {
  min-width: 10%;
  min-height: 70px;
}
tr {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button {
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
import { Vue } from "vue-class-component";

import { Paciente } from "@/model/paciente.model";
import { PacienteClient } from "@/client/paciente.client";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Convenio } from "@/model/convenio.model";

export default class PacientesView extends Vue {

  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Paciente> = new PageResponse();

  private pacienteClient!: PacienteClient;
  public pacienteList: Paciente[] = [];

  public mounted(): void {
    this.pacienteClient = new PacienteClient();
    this.toListPacientes();
  }

  private toListPacientes(): void {
    this.pacienteClient.findAll(this.pageRequest).then(
      (sucess) => {
        this.pageResponse = sucess;
        this.pacienteList = this.pageResponse.content;
      },
      (error) => console.log(error),
    );
  }

}
</script>
