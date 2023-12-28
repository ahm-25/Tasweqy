<template>
  <main class="home-title">
    <div class="section-heading d-flex justify-center">
      <v-icon color="#E5B32C">mdi-creation-outline</v-icon>
      <h3 class="heading">{{ sectionHeading }}</h3>
      <v-icon color="#E5B32C">mdi-creation-outline</v-icon>
    </div>
    <h6>
      {{ sectionTitle }} <span>{{ coloredTitle }}</span>
    </h6>
    <p>{{ sectionSubtitle }}</p>
  </main>
</template>

<script>
export default {
  name: "HomeTitle",
  props: {
    sectionHeading: {
      type: String,
      default: "",
    },
    sectionTitle: {
      type: String,
      default: "",
    },
    coloredTitle: {
      type: String,
      default: "",
    },
    sectionSubtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
