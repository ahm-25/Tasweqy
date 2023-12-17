<template>
  <main class="login pb-10">
    <v-container>
      <v-row>
        <v-col class="animate__animated animate__slideInDown">
          <LazyFormsSignup class="d-flex justify-center" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "Signup",
  layout: "auth",
  data() {
    return {
      selected_type: 0,
    };
  },
  computed: {
    activeType() {
      return this.items[this.selected_type]["type"];
    },
    activeAccount() {
      return this.items[this.selected_type]["active_key"];
    },
    items() {
      return [
        {
          title: "company_account",
          type: "company_account",
          active_key: "company",
        },
        {
          title: "supplier_account",
          type: "supplier_account",
          active_key: "supplier",
        },
        {
          title: "organizers_account",
          type: "organizers_account",
          active_key: "organizer",
        },
      ];
    },
    features() {
      return [
        this.$t("first_feature"),
        this.$t("sdcond_feature"),
        this.$t("third_feature"),
      ];
    },
  },
  watch: {
    $route: {
      handler({ query }) {
        if (query.type) {
          this.selected_type = this.items
            .map((item) => item.active_key)
            .indexOf(query.type || "company");
        }
      },
      immediate: true,
    },
  },
};
</script>
