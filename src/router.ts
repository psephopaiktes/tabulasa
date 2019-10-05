import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index.html",
      component: () => import("./views/Editor.vue")
    },
    {
      path: "/",
      component: () => import("./views/Editor.vue")
    },
    {
      path: "/customize",
      component: () => import("./views/Customize.vue")
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/*",
      component: () => import("./views/Error.vue")
    }
  ]
});
