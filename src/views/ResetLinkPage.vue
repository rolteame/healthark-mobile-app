<template>
  <ion-page>
    <ion-content>
      <section id="reset-link-section">
        <div class="reset-link-wrapper">
          <p class="reset-link-text">Reset link sent to</p>
          <p class="reset-email">obendalee@gmail.com</p>
          <form action="#">
            <ion-button> Continue to login </ion-button>
          </form>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent } from "@ionic/vue";
export default {
  components: {
    // ionic components
    IonPage,
    IonButton,
    IonContent,
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
#reset-link-section {
  min-height: 92vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.reset-link-wrapper {
  width: 100%;
}
.reset-link-wrapper > .reset-link-text {
  font-weight: var(--fw-400);
  font-size: var(--fs-16);
  line-height: 22px;
  text-align: center;
  color: #d6d6d6;
}
.reset-link-wrapper > p {
  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: 19px;
  text-align: center;
  color: #d6d6d6;
}
.reset-link-wrapper > .reset-email {
  font-weight: var(--fw-700);
  font-size: var(--fs-16);
  line-height: 22px;
  text-align: center;
}
ion-button {
  border-radius: 4px;
  width: 100%;
  margin-top: 18px;
  --background: #0f5b8f !important;
  text-transform: none !important;
  font-size: 16px;
  font-weight: var(--fw-700);
  color: #d6d6d6;
}
</style>
