<template>
  <nav class="navbar">
    <v-container>
      <v-toolbar flat>
        <section data-aos="fade-left" data-aos-duration="1000">
          <div class="d-flex align-center">
            <div class="image-wrapper">
              <img class="image" src="../../../assets/images/nav-logo.svg" />
            </div>
            <v-app-bar-nav-icon
              v-if="$vuetify.breakpoint.smAndDown"
              @click="drawer = true"
            ></v-app-bar-nav-icon>

            <v-dialog v-model="drawer" width="350px" class="mx-auto">
              <v-card width="350px" class="mx-auto">
                <v-btn icon class="pa-2" @click="() => (drawer = false)">
                  <v-icon color="red"> mdi-close </v-icon>
                </v-btn>
                <v-list class="text-center" color="transparent">
                  <v-list-item-group mandatory v-model="model" color="primary">
                    <v-list-item v-for="item in navItems" :key="item">
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-dialog>
            <v-list
              class="d-flex"
              color="transparent"
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              <v-list-item-group
                class="d-flex"
                style="gap: 10px"
                mandatory
                v-model="model"
                color="primary"
              >
                <v-list-item v-for="item in navItems" :key="item">
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </section>
        <v-spacer> </v-spacer>
        <section data-aos="fade-right" data-aos-duration="1000">
          <v-btn
            v-if="!$auth.loggedIn"
            width="150px"
            outlined
            color="primary"
            :to="
              localePath({
                path: `/login`,
              })
            "
          >
            <v-icon color="primary">{{ ` mdi-account` }}</v-icon>
            {{ $t("login") }}
          </v-btn>
          <v-btn v-else width="150px" outlined  color="primary">
            <v-icon left color="primary">{{ ` mdi-logout` }}</v-icon>
            {{ $t("logout") }}
          </v-btn>
        </section>
      </v-toolbar>
    </v-container>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      model: 0,
      navItems: [
        "الرئيسية",
        "من نحن",
        "العروض",
        "التمويل",
        "حاسبه التمويل",
        "المنتجات",
        "اخر الأخبار",
        "تواصل معنا",
        "المزيد",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
}
</style>
