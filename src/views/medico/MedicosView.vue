<template>
  <div class="column is-12">
    <h1>Lista de Medicos</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link button" id="button-cadastrar">
      <router-link to="/cadastrarMedico" style="text-decoration: none"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12"></div>
  <table class="table table-css">
    <thead>
      <tr>
        <th>Nome</th>
        <th>CRM</th>
        <th>Especialidade</th>
        <th>Opções</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in medicoList" :key="info.id">
        <td>{{ info.nome }}</td>
        <td>{{ info.crm }}</td>
        <td>{{ info.especialidade }}</td>
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

#button-cadastrar {
  height: 40px;
  border-radius: 5px;
  background-color: #42b983;
}
</style>

<script lang="ts">
import { Medico } from "@/model/medico.model";
import { Vue } from "vue-class-component";
import { MedicoClient } from "../../client/medico.client";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export default class MedicosView extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Medico> = new PageResponse();

  public medicoList: Medico[] = [];
  private medicoClient!: MedicoClient;

  private mount(): void {
    this.medicoClient = new MedicoClient();
    this.listarMedicos();
  }

  private listarMedicos(): void {
    this.medicoClient.findAll(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.medicoList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
}
</script>
