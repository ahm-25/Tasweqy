<template>
  <!-- Your content goes here -->

  <!-- Scroll to top button -->
  <v-btn
    v-if="showScrollToTop"
    @click="scrollToTop"
    class="scroll-to-top"
    fab
    color="primary"
  >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      showScrollToTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Show the "scroll to top" button when the user scrolls down, hide it otherwise
      this.showScrollToTop = window.scrollY > 100;
    },
    scrollToTop() {
      // Smoothly scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
