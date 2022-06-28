<template>
  <div id="container">
    <h1 class="title is-2" style="color: #ffff">Cadastro Pessoal</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>Nome</label>
        <input class="input" type="text" placeholder="Nome" />
      </div>
      <div id="input-field">
        <label>CPF</label>
        <input class="input" type="text" placeholder="000.000.000-00" />
      </div>
      <div id="input-field">
        <label>RG</label>
        <input class="input" type="text" placeholder="00.000.000-0" />
      </div>
      <div id="input-field">
        <label>Telefone</label>
        <input class="input" type="tel" placeholder="+00 (00) 0 0000-0000" />
      </div>
      <div id="input-field">
        <label>Celular</label>
        <input class="input" type="tel" placeholder="+00 (00) 0000-0000" />
      </div>
      <div id="input-field">
        <label>Nacionalidade</label>
        <div class="select select-option">
          <select>
            <option>Brasil</option>
            <option>Paraguai</option>
            <option>Argentina</option>
            <option>Uruguai</option>
            <option>Colômbia</option>
            <option>Bolívia</option>
          </select>
        </div>
      </div>
      <div id="input-field">
        <label>Email</label>
        <input class="input" type="email" placeholder="email@gmail.com" />
      </div>
      <div id="input-field">
        <label>Login</label>
        <input class="input" type="text" placeholder="loginTeste" />
      </div>
      <div id="input-field">
        <label>Senha</label>
        <input class="input" type="password" placeholder="*********" />
      </div>
      <div id="input-field">
        <label>Sexo</label>
        <div class="select select-option">
          <select>
            <option></option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div id="container">
    <h1 class="title is-2" style="color: #ffff">Cadastro de Secretaria</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>Salário</label>
        <input class="input" type="text" placeholder="R$ 00,00" />
      </div>
      <div id="input-field">
        <label>Pis</label>
        <input class="input" type="text" placeholder="000000000000" />
      </div>
      <div id="input-field">
        <label>Data de Contratação</label>
        <input class="input" type="text" placeholder="__/__/__" />
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
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
})
export default class CadastroSecretaria extends Vue {}
</script>
