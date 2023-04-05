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
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUpPage.vue"),
  },
  {
    path: "/otpsent",
    name: "otpsent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OtpSent.vue"),
  },
  {
    path: "/otpverified",
    name: "otpverified",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OtpVerified.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
