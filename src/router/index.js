import { createRouter, createWebHistory } from "vue-router";
import isAuthenticated from "@/router/guards";
import { useAuthStore } from "@/stores/auth";
import axiosInstance from "@/config/axios/index.js";

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
          path: "verified/:id/:token",
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
      beforeEnter: isAuthenticated,
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
      beforeEnter: isAuthenticated,
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
      beforeEnter: isAuthenticated,
      children: [
        {
          path: "add-movie",
          name: "add-movie",
          component: () => import("@/components/AddMovie.vue"),
        },
      ],
    },
    {
      path: "/movie-description/:id",
      name: "movie-description",
      component: () => import("@/views/MovieDescription.vue"),
      beforeEnter: isAuthenticated,
      children: [
        {
          path: "add-quote",
          name: "add-quote",
          component: () => import("@/components/AddQuote.vue"),
        },
        {
          path: "edit-quote/:quoteId",
          name: "edit-quote",
          component: () => import("@/components/EditQuote.vue"),
        },
        {
          path: "edit-movie",
          name: "edit-movie",
          component: () => import("@/components/EditMovie.vue"),
        },
      ],
    },
    {
      path: "/view-quote/:quoteId",
      name: "view-quote",
      component: () => import("@/components/ViewQuote.vue"),
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("@/components/CallbackGoogle.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/components/NotFound.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.authenticated === null) {
    try {
      await axiosInstance.get(`/check-user`);
      authStore.authenticated = true;
    } catch (err) {
      authStore.authenticated = false;
    } finally {
      return next();
    }
  }
  return next();
});
export default router;
