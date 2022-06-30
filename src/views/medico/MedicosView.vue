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
        <td>{{ info.especialidade.nome }}</td>
        <td style="display: flex; flex-direction: row">
          <button class="is-link button" id="button-status">Desativar</button>
          <button class="is-link button" id="button-edit">
            <router-link to="/" style="text-decoration: none"
              >Editar</router-link
            >
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <nav
    class="pagination is-centered"
    role="navigation"
    aria-label="pagination"
    style="background-color: #ffff; border-radius: 5px; padding: 20px"
  >
    <a
      class="pagination-previous"
      @click="toListMedicos(pageRequest.currentPage - 1)"
      >Anterior</a
    >
    <a
      class="pagination-next"
      @click="toListMedicos(pageRequest.currentPage + 1)"
      >Próxima</a
    >
  </nav>
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

#button-cadastrar {
  height: 40px;
  border-radius: 5px;
  background-color: #42b983;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

import { Medico } from "@/model/medico.model";
import { MedicoClient } from "../../client/medico.client";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export default class MedicosView extends Vue {
  public pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Medico> = new PageResponse();

  private medicoClient!: MedicoClient;
  public medicoList: Medico[] = [];

  public mounted(): void {
    this.medicoClient = new MedicoClient();
    this.toListMedicos(0);
  }

  public toListMedicos(page: number): void {
    this.pageRequest.currentPage = page;
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
