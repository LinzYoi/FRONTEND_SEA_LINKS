<template>
  <v-container fluid>
    <div v-if="$vuetify.display.smAndDown">
      <v-row align="center">  
        <v-col cols="12" class="d-flex justify-start">
          <v-avatar image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" size="60" class="me-3"></v-avatar>
          <v-row>
            <v-col cols="12" class="d-flex align-center">
              <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-start font-weight-bold raleway-font" style="line-height: normal;">
                <span class="text-blue-darken-4">
                  {{ useUserStore().getCompanyName }}
                </span>
                <br>
                <span class="text-body-2 text-sm-h6 text-md-h5 text-lg-h4 text-start">
                  Current vessel:&nbsp;<span class="text-blue-darken-4 font-weight-medium">12</span>
                </span>
              </div>            
            </v-col>
          </v-row>        
        </v-col>    
      </v-row>
    </div>

    <div v-if="$vuetify.display.mdAndUp">
      <v-row align="center" class="d-flex">
        <!-- Kolom Teks -->
        <v-col cols="12">
          <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-start font-weight-bold raleway-font">
            <span class="text-blue-darken-4">
              Profile
            </span>
            <br>
            <v-card elevation="0">
              <v-row align="center" justify="start">
                <v-col cols="12" class="pb-0">
                  <v-card-title class="font-weight-regular ps-0">Current Vessel</v-card-title>                                    
                </v-col>
                <v-col cols="12" class="py-0">                  
                  <v-text-field variant="outlined" density="comfortable" readonly rounded="lg">
                    <span class="font-weight-medium">12</span>
                  </v-text-field>
                </v-col>
              </v-row>              
            </v-card>
          </div> 
        </v-col>
      </v-row>
    </div>

    <div v-if="$vuetify.display.smAndDown" align="center" class="my-5">
      <div class="d-flex align-center justify-center" style="width: fit-content">
        <v-alert variant="tonal" density="comfortable" rounded="lg" color="sea_links_color">
          <span>
            <v-icon class="text-blue-darken-4">mdi-alert-circle</v-icon>
          </span>
          <span class="font-weight-bold text-black ms-2">Hello, you have sign in as a&nbsp;</span>
          <span class="font-weight-bold text-blue-darken-4">{{ useUserStore().getBusinessType }}</span>            
        </v-alert>
      </div>
    </div>
    
    <v-row align="start" class="mt-1">
      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto pa-1 pb-3"          
          rounded="xl"          
          rel="noopener"
          elevation="2"          
        >
          <v-card-title class="text-caption text-grey-darken-2">Account Settings</v-card-title>
          <v-row align="center">
            <v-col cols="12" class="item-hover">
              <div class="d-flex align-center raleway-font px-3" style="font-weight: 600;" @click="router.push('/sea-links/menu/profile/profile-information')">
                <v-icon class="text-grey-darken-2">mdi-account-circle-outline</v-icon>
                <span class="ms-2">Profile Information</span>
                <v-spacer></v-spacer>
                <v-icon class="text-grey-darken-2">mdi-chevron-right</v-icon>
              </div>              
            </v-col>

            <v-divider class="mx-6"></v-divider>

            <v-col cols="12" class="item-hover">
              <div class="d-flex align-center raleway-font px-3" style="font-weight: 600;" @click="router.push('/sea-links/menu/profile/profile-information')">
                <v-icon class="text-grey-darken-2">mdi-bell-outline</v-icon>
                <span class="ms-2">Notification Settings</span>
                <v-spacer></v-spacer>
                <v-icon class="text-grey-darken-2">mdi-chevron-right</v-icon>
              </div>
            </v-col>            
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card
          class="mx-auto pa-1 pb-3"          
          rounded="xl"          
          rel="noopener"
          elevation="2"          
        >
          <v-card-title class="text-caption text-grey-darken-2">Other Features</v-card-title>
          <v-row align="center">
            <v-col cols="12" class="item-hover">
              <div class="d-flex align-center raleway-font px-3" style="font-weight: 600;" @click="router.push('/sea-links/menu/profile/profile-information')">
                <v-icon class="text-grey-darken-2">mdi-chart-bar</v-icon>
                <span class="ms-2">Transaction & Reports</span>
                <v-spacer></v-spacer>
                <v-icon class="text-grey-darken-2">mdi-chevron-right</v-icon>
              </div>              
            </v-col>

            <v-divider class="mx-6"></v-divider>

            <v-col cols="12" class="item-hover">
              <div class="d-flex align-center raleway-font px-3" style="font-weight: 600;" @click="router.push('/sea-links/menu/profile/profile-information')">
                <v-icon class="text-grey-darken-2">mdi-human-greeting-proximity</v-icon>
                <span class="ms-2">Referrals</span>
                <v-spacer></v-spacer>
                <v-icon class="text-grey-darken-2">mdi-chevron-right</v-icon>
              </div>
            </v-col>

            <v-divider class="mx-6"></v-divider>

            <v-col cols="12" class="item-hover">
              <div class="d-flex align-center raleway-font px-3" style="font-weight: 600;" @click="router.push('/sea-links/menu/profile/profile-information')">
                <v-icon class="text-grey-darken-2">mdi-information-outline</v-icon>
                <span class="ms-2">About Us</span>
                <v-spacer></v-spacer>
                <v-icon class="text-grey-darken-2">mdi-chevron-right</v-icon>
              </div>              
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>      
    
    <div class="mt-6">
      <v-btn    
        class="font-weight-bold raleway-font"
        style="letter-spacing: 0px;"
        size="large"
        variant="outlined"
        color="sea_links_color"
        text="Log Out"
        rounded="xl"
        block
        @click="logout()"
      >
      </v-btn>
    </div>
    
    <!-- <div v-if="$vuetify.display.smAndDown" class="d-flex align-center justify-center mt-7">      
      <v-btn    
        class="font-weight-bold raleway-font"
        style="letter-spacing: 0px;"
        size="large"
        color="sea_links_color"
        text="Log Out"
        rounded="lg"
        @click="logout()"
      >
        <template v-slot:prepend>
          <v-icon class="text-red ms-1">mdi-logout</v-icon>
        </template> 
      </v-btn>
    </div> -->
  </v-container>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import router from "@/router";
import { ref } from "vue";

const logout = () => {
  useUserStore().logout();  
};
</script>

<style scoped>
.item-hover {
  transition: all 0.3s ease-in-out;
}

.item-hover:hover {
  cursor: pointer;
  padding-left: 25px;
  color: #003399;  
}

</style>