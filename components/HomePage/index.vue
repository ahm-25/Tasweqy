<template>
  <div>
    <TopBar />
    <NavBar />
    <HeroSlider :data="homePage.sliders" />
    <scrollToTop />
    <AboutUs :data="homePage.pages" />
    <OurResult />
    <OurOffers :data="homePage.services" />
    <Finance />
    <OurCars />
    <PartnersSuccsess />

    <ClientFeedback />
    <LatestNews />
  </div>
</template>
<script>
import TopBar from "./TopBar/index.vue";
import NavBar from "./NavBar/index.vue";
import HeroSlider from "./HeroSlider/index.vue";
import AboutUs from "./AboutUs/index.vue";
import OurResult from "./OurResult/index.vue";
import OurOffers from "./OurOffers/index.vue";
import OurCars from "./OurCars/index.vue";
import Finance from "./Finance/index.vue";
import scrollToTop from "../ScrollToTop/index.vue";
import ClientFeedback from "./ClientFeedback/index.vue";
import PartnersSuccsess from "./PartnersSuccsess/index.vue";
import LatestNews from "./LatestNews/index.vue";

export default {
  name: "HomePage",
  components: {
    TopBar,
    NavBar,
    HeroSlider,
    AboutUs,
    OurResult,
    OurOffers,
    OurCars,
    scrollToTop,
    Finance,
    PartnersSuccsess,
    ClientFeedback,
    LatestNews,
  },
  props: ["homePage"],
};
</script>

<style lang="scss" scoped></style>
