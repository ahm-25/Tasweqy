<template>
  <main class="our-offers">
    <v-container>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            :sectionHeading="$t('homepage.our_offers')"
            :sectionTitle="$t('homepage.What do we offer in')"
            :coloredTitle="$t('homepage.our marketing')"
            :sectionSubtitle="
              $t(
                'homepage.We excel in providing all financial services in one place'
              )
            "
          />
        </v-col>
        <v-col
          md="4"
          cols="12"
          v-for="item in data"
          :key="item.id"
          data-aos="flip-up"
          data-aos-duration="2500"
        >
          <LazyCardsOurOffers :data="item" class="mx-auto" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "OurOffers",
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
