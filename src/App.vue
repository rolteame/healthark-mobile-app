<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
</script>

<style>
:root {
  /* color */
  --whitelike: #d6d6d6;
  /* background color */
  --bg-gradient: linear-gradient(
    188.69deg,
    #0f5b8f -7.9%,
    rgba(5, 151, 214, 0.282862) 56.91%,
    rgba(1, 174, 242, 0) 107.7%
  );
  /* font family */
  --ff-satoshi: "Satoshi", sans-serif;

  /* font size */
  --fs-28: 28px;
  --fs-24: 24px;
  --fs-22: 22px;
  --fs-16: 16px;
  --fs-14: 14px;
  --fs-12: 12px;

  /* font weight */
  --fw-700: 700;
  --fw-500: 500;
  --fw-400: 400;

  /* line height */
  --lh-37: 37.8;
  --lh-38: 38px;
  --lh-32: 32px;
  --lh-30: 30px;
  --lh-22: 22px;
}

* {
  font-family: var(--ff-satoshi) !important;
}
</style>
