<template>
  <main class="latest-news">
    <v-container>
      <v-row>
        <v-col cols="12">
          <LazySharedHomeTitle
            data-aos="fade-down"
            data-aos-duration="1000"
            sectionHeading="الاخبار"
            sectionTitle="اخر الأخبار بين يديك"
            sectionSubtitle="
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
            "
          />
        </v-col>
        <v-col md="4" cols="12" v-for="n in 3" :key="n">
          <LazyCardsLatestNews data-aos="flip-right" data-aos-duration="3000" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="6">
          <v-btn color="primary" block class="bounce radius-16">
            <span> المزيد من الاخبار</span></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "LatestNews",
};
</script>

<style lang="scss" scoped></style>
