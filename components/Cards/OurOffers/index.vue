<template>
  <v-card width="450px" class="pa-4" flat>
    <span class="card-number">1</span>
    <v-card-title>{{ data.name }}</v-card-title>
    <v-card-text> {{ data.description }}</v-card-text>
    <v-card-actions class="d-flex">
      <v-btn color="secondary" text>
        <v-icon>mdi-chevron-right</v-icon>
        <span>المزيد من المعلومات</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "OurOffers",
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
