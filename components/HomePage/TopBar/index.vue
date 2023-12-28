<template>
  <div class="top-bar">
    <v-container>
      <v-toolbar color="primary" flat class="px-0">
        <div
          style="margin-block: 20px"
          class="d-flex align-center gap-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <a href="mailto:info@tasweqy.sa" class="d-flex align-center gap-7">
            <span class="mt-1"> info@tasweqy.sa </span>
            <v-icon size="small">mdi-email</v-icon>
          </a>
          <v-divider
            vertical
            color="white"
            :thickness="2"
            class="border-opacity-100"
          ></v-divider>
          <a href="tel:+9952649435" class="d-flex align-center gap-7">
            <span class="mt-1">920004250</span>
            <v-icon size="small">mdi-phone</v-icon>
          </a>
        </div>
        <v-spacer></v-spacer>
        <div
          class="d-flex align-center gap-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div class="contact-social d-flex align-center gap-10">
            <a target="_blank">
              <img
                class="mr-3"
                width="20px"
                height="20px"
                src="@/assets/images/snapchat-top.svg"
              />
            </a>
            <a target="_blank">
              <img
                width="20px"
                height="20px"
                src="@/assets/images/youtube-top.svg"
              />
            </a>
            <a target="_blank">
              <img
                width="20px"
                height="20px"
                src="@/assets/images/instagram-top.svg"
              />
            </a>
            <a target="_blank">
              <img
                width="20px"
                height="20px"
                src="@/assets/images/twitter-top.svg"
              />
            </a>
            <a target="_blank">
              <img
                width="20px"
                height="20px"
                src="@/assets/images/facebook-top.svg"
              />
            </a>
          </div>
        </div>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    changeLanguage() {
      this.locale = this.locale === "en" ? "ar" : "en";
      console.log(this.locale);
      window.location.reload();
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="scss" scoped></style>
