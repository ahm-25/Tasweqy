<template>
  <main class="our-result">
    <v-row>
      <v-col cols="12">
        <LazySharedHomeTitle
          data-aos="fade-down"
          data-aos-duration="1000"
          :sectionHeading="$t('homepage.our_result')"
          :sectionTitle="$t('homepage.our_result')"
          :coloredTitle="$t('homepage.in numbers')"
          :sectionSubtitle="
            $t('homepage.Your secure and reliable path to obtaining financing')
          "
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" class="d-flex align-center">
        <v-row class="stats" data-aos="zoom-in-up" data-aos-duration="2000">
          <v-col md="6" cols="12" v-for="n in 2"  :key="n">
            <LazyCardsStats />
          </v-col>
          <div class="divder"></div>
          <div class="hr-divder"></div>
          <v-col md="6" cols="12" v-for="n in 2" :key="n">
            <LazyCardsStats />
          </v-col>
        </v-row>
      </v-col>
      <v-col md="6" data-aos="zoom-in-up" data-aos-duration="2000">
        <v-img
          :src="require('@/assets/images/Statistics-rafiki 1.svg')"
          height="350px"
          cover
        ></v-img>
      </v-col>
    </v-row>
  </main>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped></style>
