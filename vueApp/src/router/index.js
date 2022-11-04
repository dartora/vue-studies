import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Class24 from "@/components/Class24";
import TransformersContent from "@/components/TransformersContent";
import Class25 from "@/components/Class25";
import Class26 from "@/components/Class26";
import Class27 from "@/components/Class27";
import Class28 from "@/components/Class28";
import Error404 from "@/components/Error404";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HelloWorld
    },
    {
      path: "*",
      name: "error404",
      component: Error404
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
    },
    {
      path: "/class25",
      name: "class25",
      component: Class25,

      children: [
        {
          path: "/class25/arrow",
          name: "arrow",
          component: TransformersContent
        }
      ]
    },
    {
      path: "/class26",
      name: "class26",
      redirect: {
        name: "transformersContent",
        params: { name: "optmus-prime" }
      },
      component: Class26
    },
    {
      path: "/class27",
      name: "class27",
      component: Class27,
      children: [
        {
          path: ":name",
          name: "transformersContent",
          component: TransformersContent
        }
      ]
    },
    {
      path: "/class28",
      name: "class28",
      component: Class28
    }
  ]
});
