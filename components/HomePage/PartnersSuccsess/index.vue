<template>
  <main class="partners-succsess">
    <v-container>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            sectionHeading="شركاء النجاح"
            sectionTitle="الجهات التمويلية"
            sectionSubtitle="
             نتعاون مع اكبر الشركات و البنوك التمويلية ف المملكة 
            "
          />
        </v-col>
        <v-col md="3" sm="6" v-for="n in 8" :key="n">
          <LazyCardsPartnersSuccsess
            data-aos="zoom-out-up"
            data-aos-duration="1500"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            class="py-7"
            data-aos="fade-down"
            data-aos-duration="1000"
            sectionHeading=" ماركات السيارات"
            sectionSubtitle="
             نتعاون مع اكبر الشركات و البنوك التمويلية ف المملكة 
            "
          />
        </v-col>
        <v-col md="3" sm="6" cols="12" v-for="n in 6" :key="n">
          <v-card
            flat
            class="radius-24 pa-3"
            data-aos="zoom-out-up"
            data-aos-duration="2000"
          >
            <v-img
              class="mb-4"
              :src="require('../../../assets/images/car_brand.svg')"
            ></v-img>
            <h5 class="text-center">
              <span class="mx-1">+100 </span>
              عمليه بيع.
            </h5>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
