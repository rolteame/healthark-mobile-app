<template>
  <ion-page>
    <ion-content>
      <section id="forgot-password-section">
        <div class="forgot-password-wrapper">
          <h2>Forget password?</h2>
          <p>
            Enter the email address associated with this account and your
            password reset link will be sent to you
          </p>
          <form action="#" class="forgot-password-form">
            <ion-label>Email</ion-label>
            <ion-input placeholder="Enter Email"></ion-input>
            <ion-button> Reset password </ion-button>
          </form>
          <p>Or login with</p>
          <!-- Social Links starts here -->
          <SocialLinks />
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonInput, IonLabel, IonButton, IonContent } from "@ionic/vue";
import SocialLinks from "../components/SocialLinks.vue";
export default {
  components: {
    // ionic components
    IonPage,
    IonInput,
    IonLabel,
    IonButton,
    IonContent,
    // social links component
    SocialLinks,
  },
  setup() {},
};
</script>

<style scoped>
* {
  font-family: var(--ff-satoshi) !important;
  /* font-weight: var(--fw-700) !important; */
}
ion-content {
  --padding-top: 20px;
  --padding-bottom: 20px;
  --padding-start: 20px;
  --padding-end: 20px;
  --background: var(--bg-gradient);
  overflow-y: hidden !important;
}
#forgot-password-section {
  min-height: 92vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.forgot-password-wrapper {
  width: 100%;
}
.forgot-password-wrapper > h2 {
  text-align: center;
  font-size: var(--fs-28);
  color: #fff;
  font-weight: var(--fw-700);
  margin-bottom: 20px;
}
.forgot-password-wrapper > p {
  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: 19px;
  text-align: center;
  color: #d6d6d6;
}
ion-label {
  font-size: var(--fs-14);
  margin-top: 15px !important;
  display: block;
  color: #fff !important;
}
ion-input {
  --background: #d6d6d6;
  border-radius: 8px;
  color: #697386;
  margin-top: 10px;
}
ion-button {
  border-radius: 4px;
  width: 100%;
  margin-top: 18px;
  --background: #0f5b8f !important;
  text-transform: none !important;
  font-size: 16px;
  font-weight: var(--fw-700);
}
.forgot-password-form + p {
  margin-top: 16px;
  font-weight: var(--fw-700);
  font-size: var(--fs-14);
  color: #d5d5d5;
}
</style>
