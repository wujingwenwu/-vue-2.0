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
router.beforeEach((to, from, next) => {
  const lockFlag = localStorage.getItem('password');
  if(lockFlag === '0'&&from.path!=="/lockScreen"){  
      next(false)
  }else{
    next()
  }
})
export default router;
