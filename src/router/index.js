import Vue from "vue";
import VueRouter from "vue-router";

import Home         from "../views/Home.vue";
import Houses       from  "../views/Houses.vue"
import HouseMembers from "../views/HouseMembers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/houses",
    name: "Houses",
    component: Houses
  },
  {
    path: "/house/:namehouse",
    name: "house-members",
    component: HouseMembers,
    props: true,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
