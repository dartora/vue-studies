import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import class24 from "@/components/class24";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/class24",
      name: "class24",
      component: class24
    }
  ]
});
