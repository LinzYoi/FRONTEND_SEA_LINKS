<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <div class="text-h4 text-primary text-center raleway-font font-weight-bold">
          Create Account
        </div>

        <p class="text-body-1 text-center">
          Complete the sign up process to get started
        </p>
        <div class="mt-12">
          <v-form v-model="isFormValid" @submit.prevent>
            <v-row>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.company_name"
                  :rules="rules.company_name"
                  rounded="lg"
                  variant="outlined"
                  label="Company Name"
                  type="text"
                  placeholder="PT SEVEN OCEANS"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.phone"
                  :rules="rules.phone"
                  rounded="lg"
                  variant="outlined"
                  label="Phone"
                  type="number"
                  placeholder="0XXXXXXXXX"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.nib"
                  :rules="rules.nib"
                  rounded="lg"
                  variant="outlined"
                  label="NIB"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.npwp"
                  :rules="rules.npwp"
                  rounded="lg"
                  variant="outlined"
                  label="NPWP"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-select
                  v-model="form.business_type"
                  :rules="rules.business_type"
                  rounded="lg"
                  :items="[
                    'Vessel Owner',
                    'Cargo Owner',
                    'Ship Management',
                    'Crewing Agency',
                    'Shipping Agency',
                  ]"
                  variant="outlined"
                  label="Business Type"
                ></v-select>
              </v-col>
              <!-- email -->
              <v-col cols="12" class="pb-0">
                <v-text-field
                  v-model="form.email"
                  :rules="rules.email"
                  rounded="lg"
                  variant="outlined"
                  label="Email"
                  type="email"
                  placeholder="email-name@gmail.com"
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
                  text="Get Started"
                  rounded="lg"
                  block
                  @click="signUp()"
                ></v-btn>
                <div
                  class="font-weight-medium mt-2 d-flex justify-center align-center"
                >
                  Already have account?&nbsp;
                  <span class="text-blue-darken-3">
                    <router-link to="/sign-in"> Sign In </router-link>
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
import router from "@/router";
import { ref } from "vue";
import { useToast } from "vue-toastification";

import config from "../../config";
const apiBaseUrl = config.apiBaseUrl;

const isFormValid = ref(false);
const showPassword = ref(false);
const loadingBtn = ref(false);

const form = ref({
  company_name: "",
  phone: "",
  nib: "",
  npwp: "",
  business_type: [],
  email: "",
  password: "",
});

const resetForm = () => {
  form.value = {
    company_name: "",
    phone: "",
    nib: "",
    npwp: "",
    business_type: [],
    email: "",
    password: "",
  };
};

const rules = {
  company_name: [(v) => !!v || "Company Name is required"],
  phone: [
    (v) => !!v || "Phone is required",
    (v) => v.length >= 10 || "Phone must be at least 10 characters",
    // (v) => v.match(/^0[0-9]{8,15}$/) || 'Phone must be valid',
  ],
  nib: [
    (v) => !!v || "NIB is required",
    (v) => v.length >= 13 || "NIB must be at least 13 characters",
    // (v) => v.match(/^[0-9]{13}$/) || 'NIB must be valid',
  ],
  npwp: [
    (v) => !!v || "NPWP is required",
    (v) => v.length >= 15 || "NPWP must be at least 15 characters",
    // (v) => v.match(/^[0-9]{15}$/) || 'NPWP must be valid',
  ],
  business_type: [(v) => !!v || "Business Type is required"],
  email: [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  password: [
    (v) => !!v || "Password is required",
    // (v) => v.length >= 8 || "Password must be at least 8 characters",
    // (v) => /[A-Z]/.test(v) || "Password must contain at least one uppercase letter",
    // (v) => /[a-z]/.test(v) || "Password must contain at least one lowercase letter",
    // (v) => /[0-9]/.test(v) || "Password must contain at least one number",
  ],
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const signUp = () => {
  loadingBtn.value = true;

  axios.post(apiBaseUrl + '/sign-up', form.value, {
  })
    .then((response) => {
      useToast().success(response.data.message);
      resetForm();
      router.push("/");
    })
    .catch((error) => {
      useToast().error(error.response.data.message);
    })
    .finally(() => {
      loadingBtn.value = false;
    });
};
</script>
