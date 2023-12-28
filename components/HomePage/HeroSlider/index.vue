<template>
  <main class="hero-slider">
    <hooper
      :rtl="true"
      :infiniteScroll="true"
      :hoverPause="false"
      :autoPlay="true"
      :wheelControl="false"
      style="height: 450px"
    >
      <slide v-for="item in data" :key="item.id">
        <v-img :src="item.image" cover>
          <div class="overlay">
            <div
              class="d-flex flex-column justify-center align-center h-100 describtion"
            >
              <h1>{{ item.title }}</h1>
              <p class="mb-9">
                {{ item.description }}
              </p>
              <div class="d-flex">
                <v-btn
                  color="white"
                  :small="$vuetify.breakpoint.mdAndUp"
                  class="radius-16 mx-3 color-text"
                  style="gap: 5px; z-index: 9999"
                  :height="$vuetify.breakpoint.mdAndUp ? '64px' : '40px'"
                  :width="$vuetify.breakpoint.mdAndUp ? '205px' : '150px'"
                >
                  <span class="mx-2"> روية العروض </span>
                  <v-icon color="primary">mdi-sack-percent</v-icon>
                </v-btn>
                <v-btn
                  color="primary"
                  large
                  class="radius-16 mx-3"
                  :height="$vuetify.breakpoint.mdAndUp ? '64px' : '40px'"
                  :width="$vuetify.breakpoint.mdAndUp ? '205px' : '150px'"
                >
                  <span> اطلب تمويلك الان </span>
                  <v-icon>mdi-currency-usd</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-img>
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </main>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          title: "aaaaa",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          title: "vvvv",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          title: "qqqqqq",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          title: "wwwww",
        },
      ],
    };
  },
  props: ["data"],
};
</script>
