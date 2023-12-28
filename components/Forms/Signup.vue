<template>
  <main>
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-form @submit.prevent="handleSubmit(handleSignup)">
        <v-card class="form-card radius-24" width="592px">
          <div class="d-flex justify-end mb-6 back">
            <v-btn class="pl-0" text :to="localePath({ path: '/login' })">
              <span> إنشاء حساب جديد</span>
              <v-icon large>mdi-chevron-left </v-icon></v-btn
            >
          </div>

          <div class="mb-8">
            <h1 class="login-title">{{ $t("create_new_account") }}</h1>
            <p class="login-subtitle">{{ $t("sign_up_subtitle") }}</p>
          </div>
          <LazyFormGroup
            name="name"
            :rules="{
              required: true,
              min: 8,
            }"
          >
            <template #default="{ attrs }">
              <label>{{ $t("fields.name") }}</label>
              <v-text-field
                class="radius-16"
                type="text"
                errorName="name"
                v-model="form.name"
                v-bind="attrs"
                dense
                outlined
                color="primary"
                :placeholder="$t(`fields.name`) + '...'"
              >
                <template v-slot:prepend-inner>
                  <v-icon color="light-secondary">{{ ` mdi-account` }}</v-icon>
                </template>
              </v-text-field>
            </template>
          </LazyFormGroup>
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
                errorName="email"
                v-model="form.email"
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
          <LazyFormGroup
            name="phone"
            :rules="{
              required: true,
              validPhoneNumber:true
            }"
          >
            <template #default="{ attrs }">
              <label>{{ $t("fields.phone") }}</label>
              <v-text-field
                class="radius-16"
                type="phone"
                errorName="phone"
                v-model="form.phone"
                v-bind="attrs"
                dense
                outlined
                color="primary"
                :placeholder="$t(`fields.phone`) + '...'"
              >
                <template v-slot:prepend-inner>
                  <v-icon color="light-secondary">{{
                    `mdi-email-outline`
                  }}</v-icon>
                </template>
              </v-text-field>
            </template>
          </LazyFormGroup>
          <LazyFormGroup name="password" :rules="{ required: true, min: 8 }">
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
          <LazyFormGroup
            name="password_confirmation"
            :rules="{ required: true, confirmed: 'password' }"
          >
            <template #default="{ attrs }">
              <label>{{ $t("fields.password") }}</label>
              <v-text-field
                class="radius-16"
                :type="showPassword ? 'text' : 'password'"
                errorName="password_confirmation"
                v-model="form.password_confirmation"
                v-bind="attrs"
                outlined
                dense
                color="primary"
                :placeholder="$t(`fields.password_confirmation`) + '...'"
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
            >
              <span class="white--text">{{ $t("sign_up") }}</span>
            </v-btn>
          </v-col>
          <div class="d-flex align-center">
            <v-checkbox
              v-model="form.rememberMe"
              type="checkbox"
            ></v-checkbox>
            <label class="mb-0">{{ $t("terms_and_condition") }}</label>
          </div>
          <v-row align="center" justify="center" class="sign-up-option mt-2">
            <p class="mb-0">{{ $t("have_account") }}</p>
            <v-btn text color="primary" :to="localePath({ path: '/login' })">{{
              $t("login_now")
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
      showConfirmPassword: false,
      user_token: "",
      loading: false,
      showPassword: false,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        rememberMe: "",
      },
    };
  },

  methods: {
    async handleSignup() {
      try {
        this.loading = true;
        const res = await this.$http.post({
          url: "auth/register",
          data: this.form,
        });
        const {
          body:{user,token},
        } = res.data;
        this.$auth.setUserToken(token);
        this.$auth.setUser(user);
        this.$router.push('/')
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
