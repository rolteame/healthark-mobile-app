<template>
  <ion-page>
    <ion-content>
      <section id="otp-section">
        <div class="otp-wrapper">
          <p>OTP Sent to</p>
          <p>obendalee@gmail.com</p>
          <form action="#" class="otp-form">
            <p>Enter OTP to continue</p>
            <div class="input-otp-group">
              <ion-input maxlength="1"></ion-input>
              <ion-input maxlength="1"></ion-input>
              <ion-input maxlength="1"></ion-input>
              <ion-input maxlength="1"></ion-input>
            </div>
          </form>
          <p><router-link to="#" class="otp-link">Resend OTP</router-link></p>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonInput, IonContent } from "@ionic/vue";
export default {
  components: {
    // ionic components
    IonPage,
    IonInput,
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
.otp-wrapper > p {
  font-family: var(--ff-satoshi);
  font-style: normal;
  font-weight: var(--fw-500);
  font-size: var(--fs-22);
  text-align: center;
  margin-top: 16px;
  color: #d6d6d6;
}
.otp-form > p {
  font-family: var(--ff-satoshi);
  font-style: normal;
  color: #d6d6d6;
  font-size: var(--fs-16);
  line-height: var(--lh-22);
  text-align: center;
}
.input-otp-group {
  display: flex;
}
.input-otp-group > * {
  margin-left: 16px;
  width: 20% !important;
}
.otp-form + p {
  font-size: var(--fs-14);
  line-height: 19px;
  margin-top: 12px;
}
.otp-form + p > .otp-link {
  color: #8ecbf5;
  font-weight: var(--fw-700);
  text-decoration: none;
}
ion-input {
  --background: #d6d6d6;
  color: #697386;
  margin-top: 10px;
  font-weight: var(--fw-700);
  font-size: var(--fs-16);
  color: #2b3340;
}
</style>
