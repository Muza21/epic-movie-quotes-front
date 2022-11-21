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
        {
          path: "forgot-password",
          name: "forgot-password",
          component: () => import("@/components/ForgotPassword.vue"),
        },
        {
          path: "new-password",
          name: "new-password",
          component: () => import("@/components/NewPassword.vue"),
        },
      ],
    },
  ],
});

export default router;
