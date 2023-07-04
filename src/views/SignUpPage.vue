<template>
  <ion-page>
    <ion-content>
      <section id="signup-section">
        <div class="signup-wrapper">
          <h2>Sign Up</h2>
          <form action="#">
            <ion-label>First name</ion-label>
            <ion-input placeholder="Enter First name"></ion-input>
            <ion-label>Last name</ion-label>
            <ion-input placeholder="Enter Last name"></ion-input>
            <ion-label>Email</ion-label>
            <ion-input placeholder="Enter Email"></ion-input>
            <ion-label>Password</ion-label>
            <ion-input placeholder="Enter Password"></ion-input>
            <ion-label>Confirm password</ion-label>
            <ion-input placeholder="Confirm password"></ion-input>
            <div class="terms-section">
              <div class="terms">
                <ion-checkbox labelPlacement="end"> </ion-checkbox> By
                continuing, you agree with our
                <router-link to="#" class="terms-condition"
                  >terms and conditions</router-link
                >
              </div>

              <ion-button> Sign up </ion-button>
            </div>
          </form>
          <span class="account-text"
            >Already registered?
            <span
              ><router-link to="#" class="login-text">Login</router-link></span
            ></span
          >
          <p class="continue-text">Or continue with</p>
          <!-- Social Links starts here -->
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
#signup-section {
  min-height: 92vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-wrapper {
  width: 100%;
}
.signup-wrapper > h2 {
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
.terms {
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
.account-text,
.continue-text {
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
.login-text {
  font-weight: var(--fw-700);
  text-decoration: underline;
  color: #8ecbf5;
  margin-left: 8px;
  margin-bottom: 18px;
}
.terms-condition {
  color: #8ecbf5;
}

.terms-condition {
  text-decoration: none;
}
</style>
