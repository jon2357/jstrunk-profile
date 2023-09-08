import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      // Vue Route Gaurd to external link
      beforeEnter(to, from) {
        window.location.href = "https://content.jonstrunk.com/";
      }
      //component: () => import("../views/blog/BlogListView.vue"),
    },
    {
      path: "/blog/:slug",
      name: "blogPost",
      props: true,
      component: () => import("../views/blog/BlogItemView.vue"),
    },
    {
      path: "/resources",
      name: "resources",
      component: () => import("../views/ResourcesView.vue"),
    },
    {
      path: "/specialization",
      name: "specialization",
      component: () => import("../views/SpecializationView.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("../views/legal/TermsOfUseView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/legal/PrivacyPolicyView.vue"),
    },
    //catch all 404
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
