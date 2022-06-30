<template>
  <div id="container">
    <h1 class="title is-2" style="color: #ffff">Cadastro Pessoal</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>Nome</label>
        <input
          class="input"
          v-model="medico.nome"
          type="text"
          placeholder="Nome"
        />
      </div>
      <div id="input-field">
        <label>CPF</label>
        <input
          class="input"
          v-model="medico.cpf"
          type="text"
          placeholder="000.000.000-00"
        />
      </div>
      <div id="input-field">
        <label>RG</label>
        <input
          class="input"
          v-model="medico.rg"
          type="text"
          placeholder="00.000.000-0"
        />
      </div>
      <div id="input-field">
        <label>Telefone</label>
        <input
          class="input"
          v-model="medico.telefone"
          type="tel"
          placeholder="+00 (00) 0 0000-0000"
        />
      </div>
      <div id="input-field">
        <label>Celular</label>
        <input
          class="input"
          v-model="medico.celular"
          type="tel"
          placeholder="+00 (00) 0000-0000"
        />
      </div>
      <div id="input-field">
        <label>Nacionalidade</label>
        <div class="select select-option">
          <select v-model="medico.nacionalidade">
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
        <input
          class="input"
          v-model="medico.email"
          type="email"
          placeholder="email@gmail.com"
        />
      </div>
      <div id="input-field">
        <label>Login</label>
        <input
          class="input"
          v-model="medico.login"
          type="text"
          placeholder="loginTeste"
        />
      </div>
      <div id="input-field">
        <label>Senha</label>
        <input
          class="input"
          v-model="medico.senha"
          type="password"
          placeholder="*********"
        />
      </div>
      <div id="input-field">
        <label>Sexo</label>
        <div class="select select-option">
          <select v-model="medico.sexo">
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
    <h1 class="title is-2" style="color: #ffff">Cadastro de Médico</h1>
    <div id="cadastro">
      <div id="input-field">
        <label>CRM</label>
        <input
          class="input"
          v-model="medico.crm"
          type="text"
          placeholder="000.000.000-00"
        />
      </div>
      <div id="input-field">
        <label>Consultório</label>
        <input
          class="input"
          v-model="medico.consultorio"
          type="text"
          placeholder="consultório A"
        />
      </div>
      <div id="input-field">
        <label>Porcentagem de Participação</label>
        <input
          class="input"
          v-model="medico.porcentParticipacao"
          type="text"
          placeholder="%"
        />
      </div>
      <div id="input-field">
        <label>Valor da consulta</label>
        <input
          class="input"
          v-model="medico.valorConsulta"
          type="text"
          placeholder="R$ 00,00"
        />
      </div>
      <div id="input-field">
        <label>Especialidade</label>
        <input
          class="input"
          v-model="medico.especialidade"
          type="text"
          placeholder="Cardiologista"
        />
      </div>
    </div>
  </div>
  <button class="button is-link" style="background-color: #42b983">
    <router-link to="/medicos">Cancelar</router-link>
  </button>
  <button
    class="button is-link button"
    style="background-color: #42b983"
    @click="registerMedicos"
  >
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

import { MedicoClient } from "@/client/medico.client";
import { Medico } from "../../../model/medico.model";

export default class CadastroMedico extends Vue {
  private medicoClient!: MedicoClient;
  public medico = new Medico();

  public mounted(): void {
    this.medicoClient = new MedicoClient();
  }

  public registerMedicos(): void {
    this.medicoClient.register(this.medico).then(
      (success) => {
        console.log(success);
        this.medico = new Medico();
      },
      (error) => console.log(error)
    );
  }
}
</script>
