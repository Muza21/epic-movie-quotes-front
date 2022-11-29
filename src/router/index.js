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

        //notifications
        {
          path: "registered",
          name: "registered",
          component: () =>
            import("@/components/notifications/RegisteredSuccessfully.vue"),
        },
        {
          path: "reseted-password",
          name: "reseted-password",
          component: () =>
            import("@/components/notifications/ResetedPassword.vue"),
        },
        {
          path: "change-password",
          name: "change-password",
          component: () =>
            import("@/components/notifications/ResetPassword.vue"),
        },
        {
          path: "verified",
          name: "verified",
          component: () =>
            import("@/components/notifications/VerifiedSuccessfully.vue"),
        },
      ],
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfilePage.vue"),
      children: [
        {
          path: "new-email",
          name: "new-email",
          component: () => import("@/components/NewEmail.vue"),
        },
      ],
    },
    {
      path: "/newsfeed",
      name: "newsfeed",
      component: () => import("@/views/NewsFeed.vue"),
      children: [
        {
          path: "new-quote",
          name: "new-quote",
          component: () => import("@/components/NewQuote.vue"),
        },
      ],
    },
    {
      path: "/movielist",
      name: "movielist",
      component: () => import("@/views/MovieList.vue"),
      children: [
        {
          path: "add-movie",
          name: "add-movie",
          component: () => import("@/components/AddMovie.vue"),
        },
        {
          path: "edit-quote",
          name: "edit-quote",
          component: () => import("@/components/EditQuote.vue"),
        },
        {
          path: "add-quote",
          name: "add-quote",
          component: () => import("@/components/AddQuote.vue"),
        },
      ],
    },
  ],
});

export default router;
