<template>
  <main>
    <v-card elevation="0">
      <v-img width="80px" :src="data.icon"></v-img>

      <v-card-title>{{ data.title }} </v-card-title>
      <v-card-text> {{ data.body }}</v-card-text>
      <v-card-actions class="d-flex">
        <v-btn color="secondary" text>
          <v-icon>mdi-chevron-right</v-icon>
          <span>المزيد من المعلومات</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </main>
</template>

<script>
export default {
  name: "AboutUs",
  props: ["data"],
};
</script>

<style lang="scss" scoped></style>
