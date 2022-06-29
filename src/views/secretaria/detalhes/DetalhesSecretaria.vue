<template>
  <h1 class="title is-2">Detalhes</h1>
  <div id="container">
    <h1 class="title is-2" style="color: #ffff">Detalhes Pessoais</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>Nome</label>
        <p>{{ secretaria.nome }}</p>
      </div>
      <div id="input-field">
        <label>CPF</label>
        <p>{{ secretaria.cpf }}</p>
      </div>
      <div id="input-field">
        <label>RG</label>
        <p>{{ secretaria.rg }}</p>
      </div>
      <div id="input-field">
        <label>Telefone</label>
        <p>{{ secretaria.telefone }}</p>
      </div>
      <div id="input-field">
        <label>Celular</label>
        <p>{{ secretaria.celular }}</p>
      </div>
      <div id="input-field">
        <label>Nacionalidade</label>
        <div class="select select-option">
          <p>{{ secretaria.nacionalidade }}</p>
        </div>
      </div>
      <div id="input-field">
        <label>Email</label>
        <p>{{ secretaria.email }}</p>
      </div>
      <div id="input-field">
        <label>Login</label>
        <p>{{ secretaria.login }}</p>
      </div>
      <div id="input-field">
        <label>Senha</label>
        <p>{{ secretaria.senha }}</p>
      </div>
      <div id="input-field">
        <label>Sexo</label>
        <div class="select select-option">
          <p>{{ secretaria.sexo }}</p>
        </div>
      </div>
    </div>
  </div>
  <div id="container">
    <h1 class="title is-2" style="color: #ffff">Dados Profissionais</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>Salário</label>
        <p>{{ secretaria.salario }}</p>
      </div>
      <div id="input-field">
        <label>Pis</label>
        <p>{{ secretaria.pis }}</p>
      </div>
      <div id="input-field">
        <label>Data de Contratação</label>
        <p>{{ secretaria.dataContratacao }}</p>
      </div>
    </div>
  </div>
  <button class="button is-link" style="background-color: #42b983">
    <a @click="$router.go(-1)">Voltar</a>
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
import { Secretaria } from "@/model/secretaria.model";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    secretaria: Secretaria,
  },
})
export default class DetalhesSecretaria extends Vue {
  secretaria!: Secretaria;
}
</script>
