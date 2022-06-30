<template>
  <div id="container">
    <h1 class="title is-2" style="color: #ffff">Cadastro de Convênio</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>Nome do convênio</label>
        <input
          class="input"
          v-model="convenio.nome"
          type="text"
          placeholder="Nome"
        />
      </div>
      <div id="input-field">
        <label>Valor</label>
        <input class="input" type="text" placeholder="R$ 00,00" />
      </div>
    </div>
  </div>
  <button class="button is-link" style="background-color: #42b983">
    <a @click="$router.go(-1)">Cancelar</a>
  </button>
  <button class="button is-link button" style="background-color: #42b983">
    Cadastrar
  </button>
</template>

<style>
#container {
  margin: 5px 0;
}

#cadastro {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 100%;
  margin: 10px 0;
}

#input-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 30%;
  margin: 6px 0;
}

.select-option {
  width: 100%;
}

select {
  width: 100%;
}

label,
h1 {
  color: #ffff;
}

a {
  text-decoration: none;
  color: #ffff;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

import { Convenio } from "@/model/convenio.model";
import { ConvenioClient } from "@/client/convenio.client";

export default class CadastroConvenio extends Vue {
  private convenioClient!: ConvenioClient;
  public convenio = new Convenio();

  public mounted(): void {
    this.convenioClient = new ConvenioClient();
  }

  public registerConvenio(): void {
    this.convenioClient.register(this.convenio).then(
      (sucess) => {
        console.log(sucess);
        this.convenio = new Convenio();
      },
      (error) => console.log(error)
    );
  }
}
</script>
