<template>
  <main>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(onSubmit)">
        <v-card class="form-card radius-24" width="592px">
          <div class="d-flex justify-end mb-6 back">
            <v-btn class="pl-0" text :to="localePath({ path: '/otp' })">
              <span> {{ $t("back") }}</span>
              <v-icon large>mdi-chevron-left </v-icon></v-btn
            >
          </div>

          <div class="mb-8">
            <h1 class="login-title">{{ $t("create_new_password") }}</h1>
            <p class="login-subtitle">{{ $t("not_repeat_password") }}</p>
          </div>

          <LazyFormGroup name="password" :rules="{ required: true }">
            <template #default="{ attrs }">
              <label>{{ $t("fields.new_password") }}</label>
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
          <LazyFormGroup
            name="confirm_password"
            :rules="{ required: true, confirmed: 'password' }"
          >
            <template #default="{ attrs }">
              <label>{{ $t("confirm_new_password") }}</label>
              <v-text-field
                class="radius-16"
                :type="showPassword ? 'text' : 'password'"
                errorName="confirm_password"
                v-model="form.confirm_password"
                v-bind="attrs"
                outlined
                dense
                color="primary"
                :placeholder="$t(`fields.confirm_password`) + '...'"
              >
                <template v-slot:append>
                  <v-btn
                    icon
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <v-icon :color="showConfirmPassword ? 'primary' : ''">
                      {{ showConfirmPassword ? "mdi-eye-off" : "mdi-eye" }}
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
              :to="localePath({ path: '/login' })"
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
      showConfirmPassword: false,
      user_token: "",
      loading: false,
      showPassword: false,
      form: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        rememberMe: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
