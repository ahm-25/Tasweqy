<template>
  <main class="finance">
    <v-container>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            :sectionHeading="$t('homepage.our_result')"
            :sectionTitle="$t('homepage.finance')"
            :coloredTitle="$t('homepage.in numbers')"
            :sectionSubtitle="
              $t('homepage.Enjoy a diverse range of financial services')
            "
          />
        </v-col>
        <v-col md="12" class="mx-auto">
          <v-tabs v-model="tab" color="primary" centered>
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1"> التمويل الشخصي </v-tab>

            <v-tab href="#tab-2"> تمويل شركات </v-tab>

            <v-tab href="#tab-3"> تمويل عقاري </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-row>
              <v-col cols="12">
                <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                  <v-row>
                    <v-col md="12">
                      <hooper
                        :rtl="true"
                        :itemsToShow="3"
                        :infiniteScroll="true"
                        :wheelControl="false"
                        :settings="hooperSettings"
                        style="height: 420px"
                      >
                        <slide v-for="n in 10" :key="n">
                          <LazyCardsFinance />
                        </slide>
                        <hooper-pagination
                          slot="hooper-addons"
                        ></hooper-pagination>
                      </hooper>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-col>
            </v-row>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  name: "Finance",
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,

        breakpoints: {
          800: {
            centerMode: true,
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
