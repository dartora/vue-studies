import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Class24 from "@/components/Class24";
import TransformersContent from "@/components/TransformersContent";

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
      component: Class24,
      children: [
        {
          path: ":name",
          name: "transformersContent",
          component: TransformersContent
        }
      ]
    }
  ]
});
