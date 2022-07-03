<template>
  <div class="column is-12">
    <h1>Lista de Secretarias</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link button" id="button-cadastrar">
      <router-link to="/cadastrarSecretaria" style="text-decoration: none"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <table class="table table-css">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Pis</th>
          <th>Data de Contratação</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in secretariaList" :key="info.id">
          <td>{{ info.nome }}</td>
          <td>{{ info.pis }}</td>
          <td>{{ new Date(info.dataContratacao) }}</td>
          <td style="display: flex; flex-direction: row">
            <button class="is-link button" id="button-status">Desativar</button>
            <button class="is-link button" id="button-edit">
              <router-link to="/" style="text-decoration: none; color: black"
                >Editar</router-link
              >
            </button>
            <button class="is-link button" d="button-status" @click="details(info.id)">
              <router-link to="/detalhesSecretaria">Detalhes</router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <nav
    class="pagination is-centered"
    role="navigation"
    aria-label="pagination"
    style="background-color: #ffff; border-radius: 5px; padding: 20px"
  >
    <a
      class="pagination-previous"
      @click="toListSecretarias(pageRequest.currentPage - 1)"
      >Anterior</a
    >
    <a
      class="pagination-next"
      @click="toListSecretarias(pageRequest.currentPage + 1)"
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

import { Secretaria } from "@/model/secretaria.model";
import { SecretariaClient } from "@/client/secretaria.client";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export default class SecretariasView extends Vue {
  public pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Secretaria> = new PageResponse();

  private secretariaClient!: SecretariaClient;
  public secretariaList: Secretaria[] = [];

  public mounted(): void {
    this.secretariaClient = new SecretariaClient();
    this.toListSecretarias(0);
  }

  public toListSecretarias(page: number): void {
    this.pageRequest.currentPage = page;
    this.secretariaClient.findAll(this.pageRequest).then(
      (sucesss) => {
        this.pageResponse = sucesss;
        this.secretariaList = this.pageResponse.content;
        console.log(new Date(this.secretariaList[0].dataContratacao));
      },
      (error) => console.log(error)
    );
  }

    public details(id: number): void {
    this.$router.push({
      name: "detalhesSecretaria",
      params: { id: id },
    });
  }
}
</script>
