<template>
  <main class="client-feedback">
    <v-container>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            :sectionHeading="$t('homepage.Client Feedback')"
            :sectionTitle="$t('homepage.What did they say about us?')"
            :sectionSubtitle="
              $t('homepage.Enjoy a diverse range of financial services')
            "
          />
        </v-col>
        <hooper
          :rtl="true"
          :infiniteScroll="true"
          :wheelControl="false"
          :autoPlay="true"
          :settings="hooperSettings"
          style="height: 450px"
        >
          <slide v-for="n in 9" :key="n">
            <LazyCardsClientFeedback />
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "ClientFeedback",
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,

        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3,
          },
          1000: {
            itemsToShow: 3,
          },
        },
      },
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
};
</script>

<style lang="scss" scoped></style>
