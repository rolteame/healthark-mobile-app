<template>
  <ion-page>
    <!-- Side menu starts here -->
    <ion-menu content-id="main-content">
      <ion-content class="ion-padding" scrollEvents="true">
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
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
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
    <!-- Side menu ends here -->

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
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
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
      <ion-content class="ion-padding page-wrapper" scrollEvents="true">
        <div class="dashboard">
          <div class="health-insurance-card-area">
            <h2>Health Insurance For You</h2>
          </div>
          <!-- Swiper area starts here -->
          <swiper class="mySwiper" :slidesPerView="'auto'" :spaceBetween="30">
            <swiper-slide class="swiper-slide">
              <!-- Health plan small card -->
              <div class="health-plan-small-logo">
                <img src="../../public/assets/image/health.png" alt="" />
              </div>
              <div class="health-plan-small-card-details">
                <h2>Rothauge Standard Individual</h2>
                <p class="p">Rothauge HMO</p>
                <div class="line"></div>
                <div class="plan-card">
                  <p class="plan-type">Plan type: &nbsp;<span>Individual</span></p>
                  <p class="plan-cost">Plan cost: &nbsp;<span>&#8358;38500/mo</span></p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">Slide 2</swiper-slide
            ><swiper-slide class="swiper-slide">Slide 3</swiper-slide>
          </swiper>
          <div class="swipe">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="#0f5b8f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
            <span>Swipe to right for more</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="#0f5b8f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M268 112l144 144-144 144M392 256H100"
              />
            </svg>
          </div>
          <!-- ends here -->
          <div class="search-bar">
            <ion-searchbar placeholder="HMOs, address, and health tips"></ion-searchbar>
          </div>

          <h2 class="top-health">Top 10 Health plans for you</h2>
          <div class="line-2"></div>

          <!-- Health Plan Card Area -->
          <div class="health-plan-card-container">
            <div class="health-plan-card">
              <div class="health-plan-card-head">
                <div class="card-header">
                  <div class="img-header">
                    <img src="../../public/assets/image/health.png" alt="" />
                  </div>
                  <div class="content-top-header">
                    <button class="hospitals">
                      <p>1459 + hospitals</p>
                    </button>
                    <div class="save-btn">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ionicon"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                          /></svg
                        ><span>save</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="header">
                  <h2>Rothauge Standard Individual</h2>
                  <p>Rothauge Standard Individual</p>
                </div>
              </div>
              <div class="health-plan-card-body">
                <div class="plan-area">
                  <div class="top">
                    <div class="plan-block-one">
                      <div class="icon">
                        <img src="../../public/assets/image/plan_type.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Plan type</span>
                        <span class="bold">Individual</span>
                      </div>
                    </div>
                    <div class="plan-block-two">
                      <div class="icon">
                        <img src="../../public/assets/image/surgery.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Surgery Coverage</span>
                        <span class="bold">150000 +</span>
                      </div>
                    </div>
                  </div>
                  <div class="down">
                    <div class="plan-block-three">
                      <div class="icon">
                        <img src="../../public/assets/image/ward_type.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Ward type</span>
                        <span class="bold">General</span>
                      </div>
                    </div>
                    <div class="plan-block-four">
                      <div class="icon">
                        <img src="../../public/assets/image/plan_cost.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Plan Cost</span>
                        <span class="bold">&#8358;38500/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="plan-location">
                  <h1>Nearby Hospital</h1>
                  <hr />
                  <h2>Healthcare International Nigeria</h2>
                  <p>308a, Murtala Mohammed Way, Yaba, Lagos, Nigeria</p>
                  <h2>White Chapel Hospital</h2>
                  <p>140, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div class="health-plan-card">
              <div class="health-plan-card-head">
                <div class="card-header">
                  <div class="img-header">
                    <img src="../../public/assets/image/health.png" alt="" />
                  </div>
                  <div class="content-top-header">
                    <button class="hospitals">
                      <p>1459 + hospitals</p>
                    </button>
                    <div class="save-btn">
                      <button><i class="bi bi-heart"></i> <span>save</span></button>
                    </div>
                  </div>
                </div>
                <div class="header">
                  <h2>Rothauge Standard Individual</h2>
                  <p>Rothauge Standard Individual</p>
                </div>
              </div>
              <div class="health-plan-card-body">
                <div class="plan-area">
                  <div class="top">
                    <div class="plan-block-one">
                      <div class="icon">
                        <img src="../../public/assets/image/plan_type.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Plan type</span>
                        <span class="bold">Individual</span>
                      </div>
                    </div>
                    <div class="plan-block-two">
                      <div class="icon">
                        <img src="../../public/assets/image/surgery.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Surgery Coverage</span>
                        <span class="bold">150000 +</span>
                      </div>
                    </div>
                  </div>
                  <div class="down">
                    <div class="plan-block-three">
                      <div class="icon">
                        <img src="../../public/assets/image/ward_type.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Ward type</span>
                        <span class="bold">General</span>
                      </div>
                    </div>
                    <div class="plan-block-four">
                      <div class="icon">
                        <img src="../../public/assets/image/plan_cost.png" alt="" />
                      </div>
                      <div class="content">
                        <span class="label">Plan Cost</span>
                        <span class="bold">&#8358;38500/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="plan-location">
                  <h1>Nearby Hospital</h1>
                  <hr />
                  <h2>Healthcare International Nigeria</h2>
                  <p>308a, Murtala Mohammed Way, Yaba, Lagos, Nigeria</p>
                  <h2>White Chapel Hospital</h2>
                  <p>140, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </section>

    <!-- Tabs starts here -->
    <div class="tabs-bottom">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="#">
            <!-- <ion-icon :icon="playCircle" /> -->
            <img src="../../public/assets/image/home_icon.png" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="radio" href="#">
            <!-- <ion-icon :icon="radio" /> -->
            <img src="../../public/assets/image/explore_icon.png" />
            <ion-label>Explore</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="library" href="#">
            <!-- <ion-icon :icon="library" /> -->
            <img src="../../public/assets/image/myplan_icon.png" />
            <ion-label>My Plans</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="search" href="">
            <!-- <ion-icon :icon="search" /> -->
            <img src="../../public/assets/image/healthtips_icon.png" />
            <ion-label>HealthTips</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="search" href="">
            <!-- <ion-icon :icon="search" /> -->
            <img src="../../public/assets/image/profile_icon.png" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </div>

    <!-- Tabs ends here -->
  </ion-page>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import {
  IonPage,
  IonContent,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonSearchbar,
  IonMenuButton,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  // IonIcon,
  IonLabel,
} from "@ionic/vue";
// import { playCircle, radio, library, search } from "ionicons/icons";
export default {
  components: {
    // ionic components
    IonPage,
    IonContent,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonSearchbar,
    IonMenuButton,
    IonRouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    // IonIcon,
    IonLabel,
    // swiper components
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      // playCircle,
      // radio,
      // library,
      // search,
    };
  },
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
/* ion-content {
  overflow: scroll !important;
  border: 2px solid red;
} */
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
.page-wrapper {
  --background: #fff;
  height: 600px;
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

/* swiper stylings starts here */
.mySwiper {
  width: 100%;
  height: auto;
}

.swiper-slide {
  color: black;
  font-size: 18px;
  background: transparent;
  display: flex;
  padding: 10px;
  border-radius: 4px;
}

.swiper-slide:nth-child(1) {
  width: 90%;
  background-color: var(--clr-3);
  margin-right: 0;
}
.swiper-slide:nth-child(2) {
  width: 80%;
  background-color: var(--clr-4);
  margin-left: 0;
}
.swiper-slide:nth-child(3) {
  width: 100%;
}

/* health logo */
.health-plan-small-logo {
  display: flex;
  align-items: center;
  width: 70px;
  /* width: 20%; */
}
.health-plan-small-logo img {
  width: 45px;
  height: 45px;
}
.health-plan-small-card-details {
  width: 100%;
}
.health-plan-small-card-details h2 {
  font-size: var(--fs-14);
  font-weight: var(--fw-700);
  font-family: var(--ff-satoshi);
  color: #fff;
}
.health-plan-small-card-details .p {
  text-transform: uppercase;
  font-family: var(--ff-satoshi);
  font-weight: var(--fw-400);
  font-size: var(--fs-12);
  color: #fff;
}
.line,
.line-2 {
  border-top: 1px solid white;
}
.health-plan-small-card-details .plan-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 30px;
}
.plan-card .plan-type,
.plan-card .plan-cost {
  font-family: var(--ff-satoshi);
  font-size: var(--fs-10);
  color: #fff;
}
.plan-card .plan-type > span,
.plan-card .plan-cost > span {
  font-weight: var(--fw-500);
}
.swipe {
  color: var(--clr-3);
  font-family: var(--ff-satoshi);
  font-weight: var(--fw-400);
  /* text-align: center; */
  /* display: block; */
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.top-health {
  font-size: var(--fs-16);
  font-weight: var(--fw-700);
  color: var(--clr-1);
}
.line-2 {
  border-top: 1px solid #e2e2e2;
}

/* Health Plan card styling starts here */
.health-plan-card {
  box-shadow: var(--card-shadow);
  margin-top: 20px;
  border-radius: 4px;
  background-color: #fff;
}
.health-plan-card-head {
  box-shadow: var(--card-shadow);
  padding: 20px 8px;
  background-color: #f2f4f7;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-header img {
  width: 34px;
  height: 34px;
}

.content-top-header {
  display: flex;
  align-items: center;
}

.save-btn > button {
  background-color: #fff;
  color: var(--clr-1);
  font-weight: var(--fw-700);
  font-size: var(--fs-12);
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 12px 13px;
}
.save-btn > button,
.hospitals {
  border-radius: 8px;
  box-sizing: border-box;
}
.hospitals {
  background: #f3f8fd;
  padding: 1px 13px;
}
.hospitals > p {
  font-size: var(--fs-12);
  font-weight: var(--fw-700);
  color: var(--clr-3);
  line-height: 16.2px;
}
.save-btn > button > span {
  /* margin-left: 4px; */
}
.header h2,
.header p {
  color: var(--clr-1);
}
.header h2 {
  font-size: var(--fs-16);
  font-weight: var(--fw-700);
}
.header p {
  font-size: var(--fs-14);
  font-weight: var(--fw-500);
}

.health-plan-card-body {
  padding: 20px 8px;
}

.plan-area > .top,
.plan-area > .down {
  display: flex;
  justify-content: space-between;
}

.plan-block-one,
.plan-block-two,
.plan-block-three,
.plan-block-four {
  width: 40%;
  display: flex;
}
.icon {
  display: flex;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  /* color: red; */
  margin-left: 15px;
}
.content > .label {
  font-weight: var(--fw-400);
  font-size: var(--fs-14);
  color: var(--clr-5);
}
.content > .bold {
  font-weight: var(--fw-700);
  font-size: var(--fs-14);
  color: var(--clr-1);
}

.plan-location {
  margin-top: 20px;
}
.plan-location > h1 {
  color: var(--clr-1);
  font-size: 16px;
  font-weight: var(--fw-500);
}
.plan-location > hr {
  border-top: 1px solid #e2e2e2;
}

.plan-location > h2 {
  color: var(--clr-1);
  font-size: var(--fs-14);
}

.plan-location > p {
  color: var(--clr-5);
  font-size: var(--fs-14);
}

/* styling for ion tabs starts here */
ion-tabs {
  display: flex;
  position: static !important;
  flex-direction: column;
  width: 100%;
  height: 100% !important;
  z-index: 0;
  align-items: stretch;
}
.tabs-bottom {
  height: 64px;
  position: absolute;
  z-index: 999;
  bottom: 0;
  width: 100%;
}
ion-tab-bar {
  border: none;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #fff;
}
ion-tab-bar,
ion-tab-button {
  background-color: #fff;
}
ion-tab-button > ion-label {
  margin-top: 6px;
  color: var(--clr-5);
  font-weight: var(--fw-500);
}
</style>
