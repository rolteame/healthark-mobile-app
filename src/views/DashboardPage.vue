<template>
  <ion-page>
    <!-- Side menu starts here -->
    <ion-menu content-id="main-content">
      <ion-content class="ion-padding">
        <div class="username">
          <h2>Hi Sampson!</h2>
        </div>

        <!-- plans and other cards area -->
        <div class="cards up">
          <div class="card plan">
            <div class="icon-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <rect
                  x="32"
                  y="128"
                  width="448"
                  height="320"
                  rx="48"
                  ry="48"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32M480 240H32M320 240v24a8 8 0 01-8 8H200a8 8 0 01-8-8v-24"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="content">
              <p>My Plan(s)</p>
            </div>
          </div>
          <div class="card transaction">
            <div class="icon-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <rect
                  x="32"
                  y="80"
                  width="448"
                  height="256"
                  rx="16"
                  ry="16"
                  transform="rotate(180 256 208)"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M64 384h384M96 432h320"
                />
                <circle
                  cx="256"
                  cy="208"
                  r="80"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="content">
              <p>My Transactions</p>
            </div>
          </div>
        </div>

        <div class="cards down">
          <div class="card health">
            <div class="icon-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <rect
                  x="32"
                  y="112"
                  width="448"
                  height="352"
                  rx="48"
                  ry="48"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M144 112V80a32 32 0 0132-32h160a32 32 0 0132 32v32M256 208v160M336 288H176"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="content">
              <p>My Health tips</p>
            </div>
          </div>
          <div class="card profile">
            <div class="icon-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="content">
              <p>Profile</p>
            </div>
          </div>
        </div>

        <!-- Pages area starts here -->
        <div class="pages">
          <p>Pages</p>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <router-link to="#" class="link">Notifications</router-link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M336 176L225.2 304 176 255.8"
                />
                <path
                  d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <router-link to="#" class="link">Privacy Policy</router-link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
              </svg>
              <router-link to="#" class="link">About</router-link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle cx="160" cy="216" r="32" />
                <circle cx="256" cy="216" r="32" />
                <circle cx="352" cy="216" r="32" />
              </svg>
              <router-link to="#" class="link">FAQ</router-link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                  fill="none"
                  stroke="#2b3340"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
              </svg>
              <router-link to="#" class="link">Contact Us</router-link>
            </li>
          </ul>
        </div>

        <!-- logout button -->
        <div class="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="#2b3340"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
              fill="none"
              stroke="#2b3340"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" />
          </svg>
          <span>Logout</span>
        </div>
      </ion-content>
    </ion-menu>

    <!-- <ion-content class="ion-padding"> -->
    <section class="dashboard-section" id="main-content">
      <ion-header>
        <ion-toolbar>
          <div class="dashboard-header">
            <ion-menu-button></ion-menu-button>
            <img
              src="../../public/assets/image/health_ark_logo.png"
              alt=""
              class="logo"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
                fill="none"
                stroke="#2B3340"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding dashboard">
        <!-- <h2>hello</h2> -->
        <div class="health-insurance-card-area">
          <h2>Health Insurance For You</h2>
        </div>
        <div class="search-bar">
          <ion-searchbar
            placeholder="HMOs, address, and health tips"
          ></ion-searchbar>
        </div>
      </ion-content>
    </section>
    <!-- </ion-content> -->
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonMenuButton,
  },
  setup() {},
};
</script>

<style scoped>
ion-header {
  --background: #fff;
}
ion-toolbar {
  --background: #fff;
  display: flex !important;
}
ion-menu-button {
  color: var(--clr-1);
}

/* sidebar styling starts here */
.username h2 {
  color: var(--clr-1);
  font-weight: var(--fw-700);
  font-size: var(--fs-22);
  margin-top: 30px;
}
.cards {
  display: flex;
}
.card {
  width: 50%;
  background-color: var(--clr-2);
  border-radius: 4px;
  padding: 8px;
}
.transaction,
.profile {
  margin-left: 10px;
}
.up {
  margin-top: 40px;
}
.down {
  margin-top: 10px;
}
.content > p {
  font-size: var(--fs-14);
  color: var(--clr-1);
  line-height: 19px;
}
.pages {
  margin-top: 30px;
}
.pages ul {
  padding-left: 0;
}
.pages ul li {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.pages ul li:not(.pages ul li:first-child) {
  margin-top: 20px;
}
.pages .link {
  color: var(--clr-1);
  text-decoration: none;
}
.logout {
  display: flex;
  align-items: center;
  margin-top: 100px;
  background-color: var(--clr-2);
  padding: 5px;
  border-radius: 4px;
}
.logout > span {
  margin-left: 5px;
  color: var(--clr-1);
}
/* ====================> */
.dashboard {
  min-height: 100vh;
  --background: #fff;
}
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 102px;
  height: 26px;
}
.ionicon {
  width: 20px;
  margin-right: 13px;
}

/* health insurance styling starts here */
.health-insurance-card-area h2 {
  font-size: var(--fs-16);
  font-family: var(--ff-satoshi);
  font-weight: var(--fw-700);
  line-height: 22px;
  color: var(--clr-1);
}

/* search bar styling starts here */
.search-bar {
  margin-top: 20px;
  padding: 0;
}
ion-searchbar {
  --border-radius: 4px;
  width: 100% !important;
  margin: 0 !important;
}
</style>
