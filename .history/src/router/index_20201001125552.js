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
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/lockScreen",
        name: "LockScreen",
        component: () =>
          import("../views/lockScreen/LockScreen")
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
router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  let user = localStorage.getItem('user')
  if (to.path === '/lockScreen') {
    next()
  } else {
    user ? next() : next('/lockScreen')

  }
})
export default router;
