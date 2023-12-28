<template>
  <v-card flat class="pa-3 radius-24" style="margin: 8px !important;">
    <div class="d-flex align-center card-heading">
      <img :src="require('../../../assets/images/avatar.svg')" />
      <div>
        <h3>احمد القحطاني</h3>
        <p>مدير شركه الحماد</p>
      </div>
    </div>
    <v-card-text class="card-text">
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
      الأخرى إضافة إلى زيادة عدد الحروف
    </v-card-text>
    <v-card-actions class="d-flex">
      <v-btn color="secondary" text>
          <span> رؤية التقيم </span>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FeedbackCard",
};
</script>

<style lang="scss" scoped></style>
