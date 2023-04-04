import { createRouter, createWebHistory } from "@ionic/vue-router";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  // {
  //   path: "/welcome",
  //   name: "welcome",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/WelcomePage.vue"),
  //   meta: { title: "Healthark App | Welcome" },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
