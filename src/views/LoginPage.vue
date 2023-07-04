<template>
  <ion-page>
    <ion-content>
      <section id="login-section">
        <div class="login-wrapper">
          <h2>Welcome to the Ark!</h2>
          <form action="#">
            <ion-label>Username</ion-label>
            <ion-input placeholder="Enter Email"></ion-input>
            <ion-label>Password</ion-label>
            <ion-input placeholder="Enter Password"></ion-input>
            <div class="remember-section">
              <div class="remember">
                <div class="check">
                  <ion-checkbox>Themed checkbox</ion-checkbox>
                  <span class="remember-me-text">Remember Me</span>
                </div>
                <div class="forgot-password">
                  <router-link to="#">Forgot Password?</router-link>
                </div>
              </div>

              <ion-button> Login </ion-button>
            </div>
          </form>
          <span class="account-text"
            >Don't Have an account?
            <span
              ><router-link to="#" class="sign-text">SIgn Up</router-link></span
            ></span
          >
          <p class="login-with-text">Or Login with</p>
          <!-- Social links starts here -->
          <SocialLinks />
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonLabel,
  IonButton,
  IonContent,
  IonCheckbox,
} from "@ionic/vue";
import SocialLinks from "../components/SocialLinks.vue";
export default {
  components: {
    // ionic components
    IonPage,
    IonInput,
    IonLabel,
    IonButton,
    IonContent,
    IonCheckbox,
    // social links component
    SocialLinks,
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
#login-section {
  min-height: 92vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper {
  width: 100%;
}
.login-wrapper > h2 {
  text-align: center;
  font-size: var(--fs-28);
  color: #fff;
  font-weight: var(--fw-700);
  margin-bottom: 20px;
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
.remember {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
ion-checkbox {
  --size: 18px;
  --checkmark-color: #0f5b8f;
  margin-bottom: -4px;
}

ion-checkbox::part(container) {
  border-radius: 4px;
  background-color: #fff;
}
.remember-me-text {
  margin-left: 8px;
}
.forgot-password > * {
  color: #8ecbf5;
}
.account-text,
.login-with-text {
  text-align: center;
  display: block;
}
.account-text {
  margin-top: 16px;
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
.sign-text {
  font-weight: var(--fw-700);
  text-decoration: underline;
  color: #8ecbf5;
  margin-left: 8px;
  margin-bottom: 18px;
}
</style>
