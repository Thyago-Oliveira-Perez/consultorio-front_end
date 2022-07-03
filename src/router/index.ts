import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MedicosView from "../views/medico/MedicosView.vue";
import PacientesView from "../views/paciente/PacientesView.vue";
import SecretariasView from "../views/secretaria/SecretariasView.vue";
import HistoricosView from "../views/historico/HistoricosView.vue";
import ConvenioView from "../views/convenio/ConvenioView.vue";
import AgendamentoView from "../views/agendamentos/AgendamentoView.vue";
import EspecialidadeView from "../views/especialidades/EspecialidadeView.vue";
import CadastroMedico from "../views/medico/formCadastro/CadastroMedico.vue";
import CadastroPaciente from "../views/paciente/formCadastro/CadastroPaciente.vue";
import CadastroSecretaria from "../views/secretaria/formCadastro/CadastroSecretaria.vue";
import CadastroAgendamento from "../views/agendamentos/formCadastro/CadastroAgendamento.vue";
import CadastroEspecialidade from "../views/especialidades/formCadastro/CadastroEspecialidade.vue";
import CadastroConvenio from "../views/convenio/formCadastro/CadastroConvenio.vue";
import DetalhesSecretaria from "../views/secretaria/detalhes/DetalhesSecretaria.vue";
import DetalhesEspecialidade from "../views/especialidades/detalhes/DetalhesEspecialidade.vue";

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
  {
    path: "/especialidades",
    name: "especialidades",
    component: EspecialidadeView,
  },
  {
    path: "/cadastrarMedico",
    name: "cadastroMedico",
    component: CadastroMedico,
  },
  {
    path: "/cadastrarPaciente",
    name: "cadastroPaciente",
    component: CadastroPaciente,
  },
  {
    path: "/cadastrarSecretaria/:id?",
    name: "cadastroSecretaria",
    component: CadastroSecretaria,
    props: (router) => ({ id: router.params.id }),
  },
  {
    path: "/cadastrarEspecialidade/:id?",
    name: "cadastroEspecialidade",
    component: CadastroEspecialidade,
    props: (router) => ({ id: router.params.id }),
  },
  {
    path: "/cadastrarConvenio",
    name: "cadastrarConvenio",
    component: CadastroConvenio,
  },
  {
    path: "/cadastrarAgendamento",
    name: "cadastroAgendamento",
    component: CadastroAgendamento,
  },
  {
    path: "/detalhesSecretaria/:id?",
    name: "detalhesSecretaria",
    component: DetalhesSecretaria,
    props: (router) => ({ id: router.params.id }),
  },
  {
    path: "/detalhesEspecialidades/:id?",
    name: "detalhesEspecialidades",
    component: DetalhesEspecialidade,
    props: (router) => ({ id: router.params.id }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
