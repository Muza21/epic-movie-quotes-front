import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/views/LandingPage.vue"),
      children: [
        {
          path: "signup",
          name: "signup",
          component: () => import("@/components/SignUp.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("@/components/LogIn.vue"),
        },
      ],
    },
  ],
});

export default router;
