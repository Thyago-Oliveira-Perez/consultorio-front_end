<template>
  <div class="column is-12">
    <h1>Convênios</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button class="button is-link" id="button-cadastrar">
      <router-link to="/cadastrarConvenio" style="text-decoration: none"
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
          <th>Valor</th>
          <th>Opões</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in conveniosList" :key="info.id">
          <td>{{ info.nome }}</td>
          <td>{{ info.ativo }}</td>
          <td>{{ info.valor }}</td>
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

#button-cadastrar {
  height: 40px;
  border-radius: 5px;
  background-color: #42b983;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

import { ConvenioClient } from "@/client/convenio.client";
import { Convenio } from "@/model/convenio.model";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export default class ConvenioView extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Convenio> = new PageResponse();

  private convenioClient!: ConvenioClient;
  public conveniosList: Convenio[] = [];

  public mounted(): void {
    this.convenioClient = new ConvenioClient();
    this.toListConvenios();
  }

  private toListConvenios(): void {
    this.convenioClient.findAll(this.pageRequest).then(
      (sucess) => {
        this.pageResponse = sucess;
        this.conveniosList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
}
</script>
