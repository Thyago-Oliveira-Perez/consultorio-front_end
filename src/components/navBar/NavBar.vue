<template>
  <div id="navBar">
    <div id="menu">
      <div id="sub-menu">
        <SubMenu :options="valoresAgenda" />
      </div>
      |
      <div id="sub-menu">
        <SubMenu :options="valoresPessoa" />
      </div>
      |
      <div id="sub-menu">
        <SubMenu :options="valoresAdmin" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SubMenu from "./submenu/SubMenu.vue";

@Options({
  components: {
    SubMenu,
  },
})
export default class NavBar extends Vue {
  valoresAgenda = {
    menu: "Agenda",
    options: [
      {
        name: "Agendamentos",
        url: "/agendamentos",
      },
    ],
  };

  valoresPessoa = {
    menu: "Pessoas",
    options: [
      {
        name: "Medicos",
        url: "/medicos",
      },
      {
        name: "Secretarias",
        url: "/secretarias",
      },
      {
        name: "Pacientes",
        url: "/pacientes",
      },
    ],
  };

  valoresAdmin = {
    menu: "Administração",
    options: [
      {
        name: "Convênio",
        url: "/convenios",
      },
      {
        name: "Historico",
        url: "/historicos",
      },
    ],
  };
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  align-items: center;
  justify-content: center;
}

#navBar {
  display: flex;
  width: auto;
  align-items: center;
  justify-content: space-around;
}

#menu {
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  background-color: #f8f8f8;
  border-radius: 3px;
  padding: 5px;
}

#sub-menu{
  width: auto;
}
</style>
