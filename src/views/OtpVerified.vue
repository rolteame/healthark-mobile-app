<template>
  <ion-page>
    <ion-content>
      <section id="otp-section">
        <div class="otp-wrapper">
          <h2>Verified</h2>
          <p>Your account has been verified successfully</p>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
export default {
  components: {
    // ionic components
    IonPage,
    IonContent,
  },
  setup() {},
};
</script>

<style scoped>
* {
  font-family: var(--ff-satoshi) !important;
}
ion-content {
  --padding-top: 20px;
  --padding-bottom: 20px;
  --padding-start: 20px;
  --padding-end: 20px;
  --background: var(--bg-gradient);
  overflow-y: hidden !important;
}
#otp-section {
  min-height: 92vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.otp-wrapper {
  width: 100%;
}
.otp-wrapper > h2 {
  font-weight: var(--fw-700);
  font-size: var(--fs-28);
  line-height: var(--lh-38);
  color: #d6d6d6;
  text-align: center;
}
.otp-wrapper > p {
  font-style: normal;
  font-weight: var(--fw-700);
  font-size: var(--fs-16);
  line-height: var(--lh-22);
  color: #d6d6d6;
  margin-top: 16px;
  text-align: center;
}
</style>
