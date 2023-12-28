<template>
  <v-card class="pa-2 radius-24">
    <v-img
      :src="require('../../../assets/images/person.svg')"
      class="mb-2"
    ></v-img>
    <p class="px-2">ديسمبر 14, 2023</p>
    <h3 class="px-2">
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى
    </h3>
    <v-card-text
      >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
      الأخرى إضافة إلى زيادة عدد الحروف</v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "LatestNews",
};
</script>

<style lang="scss" scoped></style>
