<template>
  <main class="login pb-10">
    <v-container>
      <v-row>
        <v-col class="mx-auto">
          <LazyFormsLogin
            class="d-flex justify-center animate__animated animate__slideInDown"
          />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
export default {
  name: "Login",
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
  },
};
</script>
