import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/layout/layout"
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "",
    component: Home
  },
  {
    path: "",
    component: Layout,
    children:[
      {
        path: "/home",
        name: "Home",
        component: Home
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;