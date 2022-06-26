import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MedicosView from "../views/medico/MedicosView.vue";
import PacientesView from "../views/paciente/PacientesView.vue";
import SecretariasView from "../views/secretaria/SecretariasView.vue";
import HistoricosView from "../views/historico/HistoricosView.vue";
import ConvenioView from "../views/convenio/ConvenioView.vue";
import AgendamentoView from "../views/agendamentos/AgendamentoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/medicos",
    name: "medicos",
    component: MedicosView,
  },
  {
    path: "/secretarias",
    name: "secretarias",
    component: SecretariasView,
  },
  {
    path: "/pacientes",
    name: "pacientes",
    component: PacientesView,
  },
  {
    path: "/historicos",
    name: "historicos",
    component: HistoricosView,
  },
  {
    path: "/convenios",
    name: "convenios",
    component: ConvenioView,
  },
  {
    path: "/agendamentos",
    name: "agendamentos",
    component: AgendamentoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
