import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/forget-password",
      name: "forget password",
      component: () => import("@/views/ForgetPasswordView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
  ],
  strict: true,
  sensitive: true,
});

export default router;
