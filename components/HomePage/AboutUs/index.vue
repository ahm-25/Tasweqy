<template>
  <main class="about-us">
    <v-container>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            :sectionHeading="$t('homepage.about_us')"
            :sectionTitle="$t('homepage.Our marketing team offers you all')"
            :coloredTitle="$t('homepage.the facilities and financing services')"
            :sectionSubtitle="
              $t(
                'homepage.Your secure and reliable path to obtaining financing'
              )
            "
          />
        </v-col>
        <v-col cols="12" md="6" lg="4" v-for="item in data" :key="item.id">
          <LazyCardsAboutUs
         
            :data="item"
        /></v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "AboutUs",
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
