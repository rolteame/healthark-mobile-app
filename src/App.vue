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
  --clr-1: #2b3340;

  --clr-2: #f2f4f7;
  --clr-3: #0f5b8f;
  --clr-4: #e7eff4;
  --clr-5: #697386;
  /* font family */
  --ff-satoshi: "Satoshi", sans-serif;

  /* font size */
  --fs-28: 28px;
  --fs-24: 24px;
  --fs-22: 22px;
  --fs-16: 16px;
  --fs-14: 14px;
  --fs-12: 12px;
  --fs-10: 10px;

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

  /* box shadow */
  --card-shadow: 0px 0px 8px rgba(105, 115, 134, 0.25);
}

* {
  font-family: var(--ff-satoshi) !important;
}
</style>
