<template>
  <main class="our-cars">
    <div class="container">
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            :sectionHeading="$t('homepage.our_offers')"
            :sectionTitle="
              $t('homepage.Buying, Installment, and Financing of Cars')
            "
            :sectionSubtitle="$t('homepage.Enjoy a variety of cars')"
          />
        </v-col>
        <v-col
          md="4"
          sm="6"
          cols="12"
          v-for="n in 6"
          :key="n"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <LazyCardsCars />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="6">
          <v-btn color="primary" block class="bounce radius-16">
            <span>شاهد جميع السيارات</span></v-btn
          >
        </v-col>
      </v-row>
    </div>
  </main>
</template>

<script>
export default {
  name: "OurCars",
};
</script>

<style lang="scss" scoped></style>
