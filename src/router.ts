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
    // * For Demo
    {
      path: "/tabulasa/dist/",
      component: () => import("./views/Editor.vue")
    },
    {
      path: "/dist/",
      component: () => import("./views/Editor.vue")
    },
    {
      path: "/options",
      component: () => import("./views/Options.vue")
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/gist",
      component: () => import("./views/Gist.vue")
    },
    {
      path: "/*",
      component: () => import("./views/Error.vue")
    }
  ]
});
