<template>
  <v-container fluid>
    <div>
      <v-row align="center">
        <v-col cols="2" class="d-flex align-center justify-start">
          <v-btn
            :ripple="false"
            class="pe-7"
            icon="mdi-arrow-left"
            variant="plain"
            to="/sea-links/menu/profile"
          ></v-btn>
        </v-col>
        <v-col cols="8" class="justify-center">
          <div
            class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-center text-blue-darken-4 font-weight-bold raleway-font"
            style="line-height: normal"
          >
            Profile Information
          </div>
        </v-col>
      </v-row>
    </div>

    <v-row align="start" class="mt-1">
      <v-col cols="12">
        <div
          class="text-h7 text-sm-h6 text-md-h5 text-lg-h5 text-start font-weight-bold raleway-font mb-2"
        >
          Account Identity
        </div>

        <v-form v-model="isFormValid" @submit.prevent>
          <v-row align="center">
            <v-col cols="12" class="mt-3">
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
            <v-col cols="12" class="pt-0">
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
            <v-col cols="12" class="pt-0">
              <v-text-field
                v-model="form.nib"
                :rules="rules.nib"
                rounded="lg"
                variant="outlined"
                label="NIB"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-text-field
                v-model="form.npwp"
                :rules="rules.npwp"
                rounded="lg"
                variant="outlined"
                label="NPWP"
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="pt-0">
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
            <v-col cols="12" sm="6" class="pt-0">
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
          </v-row>
        </v-form>
      </v-col>
    </v-row>

    <div class="mt-6">
      <v-btn
        :disabled="!isFormValid"
        :loading="loadingBtn"
        class="font-weight-bold raleway-font"
        style="letter-spacing: 0px"
        size="large"
        variant="outlined"
        color="sea_links_color"
        text="Save Changes"
        rounded="xl"
        block
        @click="editProfile()"
      >
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import axios from "axios";
import Cookies from "js-cookie";
import { useUserStore } from "@/stores/user";
import { useToast } from "vue-toastification";

import config from "../../../../config";
const apiBaseUrl = config.apiBaseUrl;

import router from "@/router";
import { ref } from "vue";

const isFormValid = ref(false);
const showPassword = ref(false);
const loadingBtn = ref(false);

const form = ref({
  company_name: useUserStore().getCompanyName,
  phone: useUserStore().getPhone,
  nib: useUserStore().getNib,
  npwp: useUserStore().getNpwp,
  business_type: useUserStore().getBusinessType,
  email: useUserStore().getEmail,
  password: "",
});

const rules = {
  company_name: [(v) => !!v || "Company Name is required"],
  phone: [
    (v) => !!v || "Phone is required",
    (v) => v.length >= 10 || "Phone must be at least 10 characters",
    (v) => v.match(/^0[0-9]{8,15}$/) || "Phone must be valid",
  ],
  nib: [
    (v) => !!v || "NIB is required",
    (v) => v.length >= 13 || "NIB must be at least 13 characters",
    (v) => v.match(/^[0-9]{13}$/) || "NIB must be valid",
  ],
  npwp: [
    (v) => !!v || "NPWP is required",
    (v) => v.length >= 15 || "NPWP must be at least 15 characters",
    (v) => v.match(/^[0-9]{15}$/) || "NPWP must be valid",
  ],
  business_type: [(v) => !!v || "Business Type is required"],
  email: [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
  password: [
    (v) => !!v || "Password is required",
    (v) => v.length >= 8 || "Password must be at least 8 characters",
    (v) =>
      /[A-Z]/.test(v) || "Password must contain at least one uppercase letter",
    (v) =>
      /[a-z]/.test(v) || "Password must contain at least one lowercase letter",
    (v) => /[0-9]/.test(v) || "Password must contain at least one number",
  ],
};

// const togglePasswordVisibility = () => {
//   showPassword.value = !showPassword.value;
// };

const editProfile = () => {

};
</script>

<style scoped></style>
