<template>
  <div class="column is-12">
    <h1>Especialidades</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link button" id="button-cadastrar">
      <router-link to="/cadastrarEspecialidade" style="text-decoration: none"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <table class="table table-css">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ativo</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in especialidadeList" :key="info.id">
          <td>{{ info.nome }}</td>
          <td v-if="info.ativo">Habilitado</td>
          <td v-if="!info.ativo">Desabilitado</td>
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
        @click="toListEspecialidades(pageRequest.currentPage - 1)"
        >Anterior</a
      >
      <a
        class="pagination-next"
        @click="toListEspecialidades(pageRequest.currentPage + 1)"
        >Próxima</a
      >
    </nav>
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

#button-cadastrar {
  height: 40px;
  border-radius: 5px;
  background-color: #42b983;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

import { EspecialidadeClient } from "@/client/especialidade.client";
import { Especialidade } from "@/model/especialidade.model";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export default class EspecialidadeView extends Vue {
  public pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Especialidade> = new PageResponse();

  private especialidadeClient!: EspecialidadeClient;
  public especialidadeList: Especialidade[] = [];

  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient();
    this.toListEspecialidades(0);
  }

  public toListEspecialidades(page: number): void {
    this.pageRequest.currentPage = page;
    this.especialidadeClient.findAll(this.pageRequest).then(
      (sucess) => {
        this.pageResponse = sucess;
        this.especialidadeList = this.pageResponse.content;
        console.log(this.pageResponse.content);
      },
      (error) => console.log(error)
    );
  }
}
</script>
