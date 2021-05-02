import Vue from "vue";
import VueRouter from "vue-router";

import Home         from "../views/Home.vue";
import Houses       from  "../views/Houses.vue"
import HouseMembers from "../views/HouseMembers.vue";
import Error404     from "../views/404NotFound.vue";

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
  },
  {
    path: "/404-not-found",
    alias: "*",
    name: "error-page",
    component: Error404
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
