<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Setup Your Health Plan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <section id="plan-setup-section">
        <div class="plan-setup-wrapper">
          <div class="select-area">
            <!-- For Location -->
            <ion-select
              aria-label="location"
              placeholder="Location"
              class="location-select"
            >
              <ion-select-option value="">Abuja</ion-select-option>
              <ion-select-option value="">Lagos</ion-select-option>
              <ion-select-option value="">Ogun</ion-select-option>
            </ion-select>

            <!-- For Health Quotes -->
            <ion-select
              aria-label="health-quotes"
              placeholder="Health-quotes"
              class="health-quotes-select"
            >
              <ion-select-option value="">All quotes</ion-select-option>
              <ion-select-option value="">Surgery</ion-select-option>
              <ion-select-option value="">Dental</ion-select-option>
              <ion-select-option value="">Optical care</ion-select-option>
              <ion-select-option value="">Gym</ion-select-option>
              <ion-select-option value="">Maternity</ion-select-option>
              <ion-select-option value="">Gynecology</ion-select-option>
            </ion-select>

            <!-- For Plan Type -->
            <ion-select
              aria-label="plan-type"
              placeholder="Plan type"
              class="plan-type-select"
            >
              <ion-select-option value="">Individual</ion-select-option>
              <ion-select-option value="">Family</ion-select-option>
              <ion-select-option value="">Organization</ion-select-option>
            </ion-select>

            <!-- For Ward Type -->
            <ion-select
              aria-label="ward-type"
              placeholder="Ward type"
              class="ward-type-select"
            >
              <ion-select-option value="">General</ion-select-option>
              <ion-select-option value="">Private</ion-select-option>
              <ion-select-option value="">Semi-private</ion-select-option>
            </ion-select>

            <!-- For Plan Duration -->
            <ion-select
              aria-label="plan-duration"
              placeholder="Plan Duration"
              class="plan-duration-select"
            >
              <ion-select-option value="">Yearly</ion-select-option>
              <ion-select-option value="">Monthly</ion-select-option>
            </ion-select>

            <!-- For Age Bracket -->
            <ion-select
              aria-label="age-bracket"
              placeholder="Age Bracket"
              class="age-bracket-select"
            >
              <ion-select-option value="">0-64 years</ion-select-option>
              <ion-select-option value="">65+ years</ion-select-option>
            </ion-select>

            <ion-button class="plan-setup-btn"> Continue </ion-button>
          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButton,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
export default {
  components: {
    // ionic components
    IonPage,
    IonButton,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSelect,
    IonSelectOption,
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
  --background: #fff;
  overflow-y: hidden !important;
}
#paln-setup-section {
  min-height: 92vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.plan-setup-wrapper {
  width: 100%;
}
ion-title {
  text-align: center;
  color: #2b3340;
  font-size: var(--fs-22);
  font-weight: var(--fw-700);
}
ion-toolbar {
  --background: #f2f4f7;
}
ion-select {
  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  line-height: 17px;
  border: 1px solid #989fab;
  border-radius: 8px;
}
.location-select {
  color: #697386;
}
.health-quotes-select,
.plan-type-select,
.plan-duration-select,
.ward-type-select,
.plan-duration,
.age-bracket-select {
  color: #2b3340 !important;
  margin-top: 15px;
}
.plan-setup-btn {
  margin-top: 30px;
  width: 100%;
  background: #0f5b8f !important;
  border-radius: 8px;
  text-transform: none;
}
</style>
