<template>
  <v-card flat class="pb-2" width="500px">
    <v-img :src="require('@/assets/images/cars.svg.svg')"></v-img>
    <v-card-title> هونداي Grand i 10 2020 </v-card-title>
    <v-card-subtitle>هونداي</v-card-subtitle>
    <v-card-text
      >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى</v-card-text
    >
    <v-card-title class="price"
      >95,500 <span class="mx-2">ر.س</span>
    </v-card-title>
    <v-card-actions class="d-flex justify-center">
      <v-btn class="radius-16" outlined color="primary">معرفه المزيد</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Cars",
};
</script>

<style lang="scss" scoped></style>
