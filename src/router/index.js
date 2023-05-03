import { createRouter, createWebHistory } from "@ionic/vue-router";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUpPage.vue"),
  },
  {
    path: "/otpsent",
    name: "otpsent",
    component: () => import("../views/OtpSent.vue"),
  },
  {
    path: "/otpverified",
    name: "otpverified",
    component: () => import("../views/OtpVerified.vue"),
  },
  {
    path: "/forgotpassword",
    name: "forgotpassword",
    component: () => import("../views/ForgotPasswordPage.vue"),
  },
  {
    path: "/resetlink",
    name: "resetlink",
    component: () => import("../views/ResetLinkPage.vue"),
  },
  {
    path: "/plansetup",
    name: "plansetup",
    component: () => import("../views/PlanSetupPage.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
