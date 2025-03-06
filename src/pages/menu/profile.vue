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
      <div>
        <div style="width: fit-content">
          <v-alert variant="tonal" density="comfortable" rounded="lg" color="sea_links_color">
            <span>
              <v-icon class="text-black">mdi-alert-circle-outline</v-icon>
            </span>
            <span class="font-weight-bold text-black ms-2">Hello, you have logged in as a&nbsp;</span>
            <span class="font-weight-bold text-blue-darken-4">{{ useUserStore().getBusinessType }}</span>            
          </v-alert>
        </div>
      </div>
    </div>
    
    <v-row align="center" class="mt-1">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card
          class="mx-auto"
          to="/sea-links/menu/home"      
          prepend-icon="mdi-account-circle-outline"
          append-icon="mdi-chevron-right"
          rounded="xl"          
          rel="noopener"
          elevation="8"
          title="Edit Profile"
          subtitle="Name, phone no, address, email, ..."    
        ></v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card
          class="mx-auto"
          to="/sea-links/menu/home"      
          prepend-icon="mdi-chart-bar"
          append-icon="mdi-chevron-right"
          rounded="xl"
          rel="noopener"
          elevation="8"
          title="Transaction & Reports"
          subtitle="Download transaction, details, orders, deliveries"    
        ></v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card
          class="mx-auto"
          to="/sea-links/menu/home"      
          prepend-icon="mdi-bell-outline"
          append-icon="mdi-chevron-right"
          rounded="xl"
          rel="noopener"
          elevation="8"
          title="Notification Settings"
          subtitle="Mute, unmute, set location & tracking setting"    
        ></v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card
          class="mx-auto"
          to="/sea-links/menu/home"      
          prepend-icon="mdi-human-greeting-proximity"
          append-icon="mdi-chevron-right"
          rounded="xl"
          rel="noopener"
          elevation="8"
          title="Referrals"
          subtitle="Check no of friends & earn"    
        ></v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card
          class="mx-auto"
          to="/sea-links/menu/home"      
          prepend-icon="mdi-information-outline"
          append-icon="mdi-chevron-right"
          rounded="xl"
          rel="noopener"
          elevation="8"
          title="About Us"
          subtitle="Know more about us, terms & conditions"    
        ></v-card>
      </v-col>                                                
    </v-row>  
    
    <div v-if="$vuetify.display.smAndDown" class="d-flex align-center justify-center mt-7">      
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
    </div>
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