<template>
  <main class="footer">
    <v-footer class="transparent">
      <v-container>
        <v-row>
          <v-col lg="4" data-aos="zoom-in" data-aos-duration="1000">
            <div class="image-wrapper mb-3">
              <img class="image" src="../../assets/images/footer-logo.svg" />
            </div>
            <div class="footer-title">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </div>
            <div class="social-icons">
              <a href="#">
                <img class="image" src="../../assets/images/facebook.svg" />
              </a>
              <a href="#">
                <img class="image" src="../../assets/images/twitter.svg" />
              </a>
              <a href="#">
                <img class="image" src="../../assets/images/linkedin.svg" />
              </a>
              <a href="#">
                <img class="image" src="../../assets/images/instagram.svg" />
              </a>
              <a href="#">
                <img class="image" src="../../assets/images/youtube.svg" />
              </a>
            </div>
          </v-col>
          <v-col lg="8" data-aos="zoom-in" data-aos-duration="1000">
            <v-row>
              <v-col lg="3">
                <h4 class="links-title">تسويقي</h4>
                <ul>
                  <li>
                    <a href="#">الرئيسية</a>
                  </li>
                  <li>
                    <a href="#">من نحن</a>
                  </li>
                  <li>
                    <a href="#">العروض</a>
                  </li>
                  <li>
                    <a href="#">اخر الاخبار</a>
                  </li>
                </ul>
              </v-col>
              <v-col lg="3">
                <h4 class="links-title">التمويل</h4>
                <ul>
                  <li>
                    <a href="#">تمويل شخصي</a>
                  </li>
                  <li>
                    <a href="#"> تمويل شركات</a>
                  </li>
                  <li>
                    <a href="#">تمويل عقارات</a>
                  </li>
                  <li>
                    <a href="#"> حاسبه التمويل</a>
                  </li>
                </ul>
              </v-col>
              <v-col lg="3">
                <h4 class="links-title">المنتجات</h4>
                <ul>
                  <li>
                    <a href="#">سيارات</a>
                  </li>
                  <li>
                    <a href="#"> أعلن عن منتجك</a>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </main>
</template>

<script>
export default {
  name: "Footer",
  created() {
    this.$store.dispatch("setSettings");
  },
  data() {
    return {
      quickLinks: [
        {
          title: "Downloads",
          links: ["iOS", "Andriod", "Mac", "Windows", "Chrome"],
        },
      ],
    };
  },
  computed: {
    socialIcon() {
      return [
        { icon: "instagram" },
        { icon: "facebook" },
        { icon: "youtube" },
        { icon: "twitter" },
        { icon: "linkedin" },
      ];
    },
  },
};
</script>

<style></style>
