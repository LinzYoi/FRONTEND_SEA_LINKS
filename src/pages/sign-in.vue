<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <div class="text-h4 text-primary text-center raleway-font font-weight-bold">
          Welcome Back
        </div>

        <p class="text-body-1 text-center">
          Sign in and pick up right where you left
        </p>
        <div class="mt-12">
          <v-form v-model="isFormValid" @submit.prevent>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.email"
                  :rules="rules.email"
                  rounded="lg"
                  variant="outlined"
                  label="Email"
                  type="email"
                  placeholder="Email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.password"
                  :rules="rules.password"
                  rounded="lg"
                  variant="outlined"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append-inner="togglePasswordVisibility"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn                  
                  type="submit"
                  :disabled="!isFormValid"
                  :loading="loadingBtn"
                  class="py-6"
                  color="sea_links_color"
                  text="Sign In"
                  rounded="lg"
                  block
                  @click="signIn()"
                ></v-btn>
                <div
                  class="font-weight-medium mt-2 d-flex justify-center align-center"
                >
                  Don't have account?&nbsp;
                  <span class="text-blue-darken-3">
                    <router-link to="/sign-up"> Sign Up </router-link>
                  </span>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
import Cookies from "js-cookie";
import { useUserStore } from "@/stores/user";
import { useToast } from "vue-toastification";

import config from "../../config";
const apiBaseUrl = config.apiBaseUrl;

import router from "@/router";
import { ref } from "vue";

const isFormValid = ref(false);
const showPassword = ref(false);
const loadingBtn = ref(false);

const form = ref({
  email: "",
  password: "",
});

const resetForm = () => {
  form.value = {
    email: "",
    password: "",
  };
};

const rules = {
  email: [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  password: [
    (v) => !!v || "Password is required",
    // (v) => v.length >= 8 || "Password must be at least 8 characters",
    // (v) =>
    //   /[A-Z]/.test(v) || "Password must contain at least one uppercase letter",
    // (v) =>
    //   /[a-z]/.test(v) || "Password must contain at least one lowercase letter",
    // (v) => /[0-9]/.test(v) || "Password must contain at least one number",
  ],
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const signIn = () => {
  loadingBtn.value = true;

  axios.post(apiBaseUrl + '/sign-in', form.value, {    
  })
    .then((response) => {            
      useUserStore().setUser(response.data.data);

      const expiresTime = new Date(response.data.token.expires_at).getTime();
      const currentTime = new Date().getTime();
      const expiresDays = (expiresTime - currentTime) / (1000 * 60 * 60 * 24);

      Cookies.set("auth_token", response.data.token.auth_token, { 
        expires: expiresDays,
        secure: true,
        sameSite: 'Strict',              
      });

      useToast().success(response.data.message);
      resetForm();
      router.push("/sea-links/menu/home");
    })
    .catch((error) => {
      useToast().error(error.response.data.message);
    })
    .finally(() => {
      loadingBtn.value = false;
    });
};

</script>
