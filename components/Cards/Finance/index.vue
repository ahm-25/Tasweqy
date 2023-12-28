<template>
  <v-card class="pa-3 radius-24">
    <v-img
      class="mx-auto"
      :src="require('../../../assets/images/finance.svg.svg')"
      width="172px"
    ></v-img>
    <v-card-title class="justify-center"> سداد مديونيه </v-card-title>
    <v-card-text class="text-center"
      >هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى</v-card-text
    >
    <v-card-actions class="d-flex justify-center">
      <v-btn class="radius-16" outlined color="primary">معرفه المزيد</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FinanceCard",
};
</script>

<style lang="scss" scoped></style>
