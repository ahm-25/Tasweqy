<template>
  <main>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <v-card class="form-card radius-24" width="592px">
          <div class="d-flex justify-end mb-6 back">
            <v-btn class="pl-0" text :to="localePath({ path: '/login' })">
              <span> {{ $t("back") }} </span>
              <v-icon large>mdi-chevron-left </v-icon></v-btn
            >
          </div>
          <div class="mb-8">
            <h1 class="login-title">{{ $t("forget_password") }}</h1>
            <p class="login-subtitle">{{ $t("not_worry") }}</p>
          </div>
          <img
            class="mb-10 d-block mx-auto"
            src="~/assets/images/forget-password.svg.svg"
          />
          <LazyFormGroup
            name="email"
            :rules="{
              required: true,
              email: true,
            }"
          >
            <template #default="{ attrs }">
              <label>{{ $t("fields.email") }}</label>
              <v-text-field
                class="radius-16"
                type="email"
                errorName="username"
                v-model="form.username"
                v-bind="attrs"
                dense
                outlined
                color="primary"
                :placeholder="$t(`fields.email`) + '...'"
              >
                <template v-slot:prepend-inner>
                  <v-icon color="light-secondary">{{
                    `mdi-email-outline`
                  }}</v-icon>
                </template>
              </v-text-field>
            </template>
          </LazyFormGroup>
          <v-col cols="12">
            <v-btn
              :loading="loading"
              type="submit"
              class="primary py-5"
              block
              rounded
              :to="localePath({ path: '/otp' })"
            >
              <span class="white--text">{{ $t("send") }}</span>
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
