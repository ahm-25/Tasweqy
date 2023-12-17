<template>
  <main>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <v-card class="form-card radius-24" width="592px">
          <div class="d-flex justify-end mb-6 back">
            <v-btn class="pl-0" text>
              <span>العودة إلى الرئيسية</span>
              <v-icon large>mdi-chevron-left </v-icon></v-btn
            >
          </div>
          <img
            class="mb-10 d-block mx-auto"
            src="../../assets/images/logo.svg"
          />
          <div class="mb-8">
            <h1 class="login-title">{{ $t("login") }}</h1>
            <p class="login-subtitle">{{ $t("login_subtitle") }}</p>
          </div>
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
          <LazyFormGroup name="password" :rules="{ required: true }">
            <template #default="{ attrs }">
              <label>{{ $t("fields.password") }}</label>
              <v-text-field
                class="radius-16"
                :type="showPassword ? 'text' : 'password'"
                errorName="password"
                v-model="form.password"
                v-bind="attrs"
                outlined
                dense
                color="primary"
                :placeholder="$t(`fields.password`) + '...'"
              >
                <template v-slot:append>
                  <v-btn icon @click="showPassword = !showPassword">
                    <v-icon :color="showPassword ? 'primary' : ''">
                      {{ showPassword ? "mdi-eye-off" : "mdi-eye" }}
                    </v-icon>
                  </v-btn>
                </template>
                <template v-slot:prepend-inner>
                  <v-icon color="light-secondary">mdi-lock-outline</v-icon>
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
            >
              <span class="white--text">{{ $t("login") }}</span>
            </v-btn>
          </v-col>
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <v-checkbox
                v-model="form.rememberMe"
                :error-messages="errors"
                type="checkbox"
              ></v-checkbox>
              <label class="mb-0">{{ $t("terms_and_condition") }}</label>
            </div>
            <v-btn text color="primary" :to="localePath({ path: '/forget-password' })">
              <span>{{ $t("forget_password") }}</span>
            </v-btn>
          </div>
          <v-row align="center" justify="center" class="sign-up-option mt-2">
            <p class="mb-0">{{ $t("have_not_account") }}</p>
            <v-btn text color="primary" :to="localePath({ path: '/signup' })">{{
              $t("sign_up_now")
            }}</v-btn>
          </v-row>
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
