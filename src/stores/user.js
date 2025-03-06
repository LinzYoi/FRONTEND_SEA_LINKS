// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";

import config from "../../config";
const apiBaseUrl = config.apiBaseUrl;

import router from "@/router";
import { useToast } from "vue-toastification";

export const useUserStore = defineStore("user", {
  state: () => ({
    id_user: "",
    company_name: "",
    phone: "",
    nib: "",
    npwp: "",
    business_type: "",
    email: "",
    password: "",
  }),
  actions: {
    setUser(user) {
      this.id_user = user.id_user;
      this.company_name = user.company_name;
      this.phone = user.phone;
      this.nib = user.nib;
      this.npwp = user.npwp;
      this.business_type = user.business_type;
      this.email = user.email;
    },
    clearUser() {
      this.$reset();
    },
    user() {
      axios.get(apiBaseUrl + "/user", {
        headers: {
          Authorization: `Bearer ${Cookies.get("auth_token")}`,
        },          
      })
      .then((response) => {
        this.setUser(response.data.data);
        router.push('/sea-links/menu/home');
      })
      .catch((error) => {
        console.log('User not loggin', error);
        this.clearUser();
        router.push('/');
      });
    },
    logout() {
      axios.post(apiBaseUrl + '/logout', {}, {
        headers: {
          Authorization: `Bearer ${Cookies.get("auth_token")}`,
        },            
      })
      .then(response => {
        useToast().success(response.data.message);
        Cookies.remove("auth_token");
        this.clearUser();                     
        router.push('/');
      })
      .catch(error => {
        useToast().error(error.response.data.message);
      })
    }
  },
  getters: {
    getCompanyName: (state) => state.company_name,
    getPhone: (state) => state.phone,
    getNib: (state) => state.nib,
    getNpwp: (state) => state.npwp,
    getBusinessType: (state) => state.business_type,
    getEmail: (state) => state.email,
  },
  persist: true,
});
