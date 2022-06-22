<template>
  <NavBar />
</template>

<script lang="ts">
import NavBar from "@/components/navBar/NavBar.vue";
import { Options, Vue } from "vue-class-component";


@Options({
  components: {
    NavBar
  },
})
export default class HomeView extends Vue {}
</script>
