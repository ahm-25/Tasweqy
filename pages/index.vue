<template>
  <div>
    <LazyHomePage :homePage="homePage" />
    <LazyFooter />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      homePage: [],
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.get("/homepage");
      const data = response.data.body;
      this.homePage = response.data.body;
      console.log("first", this.homePage);

      // Handle the retrieved data as needed
      console.log("Data from /homepage:", data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  },
};
</script>

<style lang="scss" scoped></style>
