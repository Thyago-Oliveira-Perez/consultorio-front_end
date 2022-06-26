<template>
  <div class="column is-12">
    <h1>Lista de Secretarias</h1>
  </div>
  <div class="column is-12" style="display: flex; align-items: center">
    <input class="input" type="text" placeholder="Procurar" />
    <button id="button-cadastrar">
      <router-link to="/" style="text-decoration: none; color: black"
        >Cadastrar</router-link
      >
    </button>
  </div>
  <div class="column is-12">
    <TableSecretaria :infos="secretaria" />
  </div>
</template>

<script lang="ts">
import { Secretaria } from "@/model/secretaria.model";
import { Options, Vue } from "vue-class-component";
import TableSecretaria from "./table/TableSecretaria.vue";

@Options({
  components: {
    TableSecretaria,
  },
})
export default class SecretariasView extends Vue {
  secretaria = new Secretaria();
}
</script>
