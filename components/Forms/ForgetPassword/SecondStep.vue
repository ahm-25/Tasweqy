<template>
  <main>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <v-card class="form-card radius-24" width="592px">
          <div class="d-flex justify-end mb-6 back">
            <v-btn
              class="pl-0"
              text
              :to="localePath({ path: '/forget-password' })"
            >
              <span> {{ $t("back") }} </span>
              <v-icon large>mdi-chevron-left </v-icon></v-btn
            >
          </div>
          <div class="mb-8">
            <h1 class="login-title">{{ $t("check_number") }}</h1>
            <p class="login-subtitle">{{ $t("enter_the_number") }}</p>
          </div>

          <v-otp-input v-model="otp" type="number" length="5"></v-otp-input>
          <v-col cols="12">
            <v-btn
              :loading="loading"
              type="submit"
              class="primary py-5"
              block
              rounded
              :to="localePath({ path: '/reset-password' })"
            >
              <span class="white--text">{{ $t("confirm") }}</span>
            </v-btn>
          </v-col>
        </v-card>
      </v-form>
    </ValidationObserver>
  </main>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      dialog: false,
      confirmDialog: false,
      otp: "",
      user_token: "",
      loading: false,
      showPassword: false,
      form: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
