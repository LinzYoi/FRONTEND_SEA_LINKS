<template>
  <v-container fluid>
    <div v-if="$vuetify.display.smAndDown">
      <v-row align="center">
        <v-col cols="10" class="d-flex align-center justify-start">
          <v-avatar image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" size="60"></v-avatar>
          
          <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 text-start font-weight-bold raleway-font ms-3" style="line-height: normal;">
            <span class="text-grey-darken-3">
              Welcome,
            </span>
            <br>
            <span ref="company_effect" class="text-blue-darken-4">{{ useUserStore().getCompanyName }}!</span>
          </div>
        </v-col> 
        
        <v-col cols="2" class="d-flex justify-end">
          <v-badge
            color="red"
            dot
            offset-x="12"
            offset-y="10"
          >
            <v-btn size="small" icon="mdi-bell-outline" color="sea_links_color"></v-btn>
          </v-badge>
        </v-col>
      </v-row>
    </div>

    <div v-if="$vuetify.display.mdAndUp">
      <v-row align="center" class="d-flex">
        <!-- Kolom Teks -->
        <v-col cols="8">
          <div ref="welcome_effect" class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 font-weight-regular raleway-font">
            Welcome to
            <span class="text-blue-darken-4 font-weight-bold raleway-font">
              Sea Links
            </span>
          </div>
        </v-col>

        <!-- Kolom Tombol Notifikasi -->
        <v-col cols="4" class="d-flex justify-end">
          <v-badge
            color="red"
            dot
            offset-x="15"
            offset-y="12"
          >
            <v-btn icon="mdi-bell-outline" color="sea_links_color"></v-btn>
          </v-badge>
        </v-col>
      </v-row>
    </div>

    <v-row align="center" class="pt-6">
      <v-col cols="12" class="pt-0">
        <v-card 
          class="mx-auto" 
          width="100%" 
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Wave.svg"
        >
          <v-row v-if="useUserStore().getBusinessType == 'Vessel Owner'" align="center" justify="center" no-gutters>
            <v-col cols="5" class="text-center">
              <v-card-text>
                <div ref="main_card_effect_1" class="text-h6 text-sm-h4 text-md-h3 text-lg-h2 font-weight-regular raleway-font">
                  Total Vessel
                </div>
                <div ref="main_card_effect_2" class="text-h2 text-sm-h3 text-md-h2 text-lg-h1 font-weight-medium raleway-font">
                  12
                </div>
                <div ref="main_card_effect_3" class="mt-3">
                  <v-btn
                    rounded="lg"                    
                    style="background-color: rgba(255, 255, 255, 0.2);"
                  >
                    <div class="text-white d-flex align-center raleway-font">
                      See All
                      <v-icon size="20" end>
                        mdi-arrow-right-circle-outline
                      </v-icon>
                    </div>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="7" class="text-center">
              <div ref="main_card_effect_4" class="pe-4">
                <v-img src="/Vessel_Owner_Image.svg" cover></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="useUserStore().getBusinessType == 'Cargo Owner'" align="center" justify="center" no-gutters>
            <v-col cols="5" class="text-center">
              <v-card-text>
                <div ref="main_card_effect_1" class="text-h6 text-sm-h4 text-md-h3 text-lg-h2 font-weight-regular raleway-font">
                  Total Cargo
                </div>
                <div ref="main_card_effect_2" class="text-h2 text-sm-h3 text-md-h2 text-lg-h1 font-weight-medium raleway-font">
                  12
                </div>
                <div ref="main_card_effect_3" class="mt-3">
                  <v-btn
                    rounded="lg"                    
                    style="background-color: rgba(255, 255, 255, 0.2);"
                  >
                    <div class="text-white d-flex align-center raleway-font">
                      See All
                      <v-icon size="20" end>
                        mdi-arrow-right-circle-outline
                      </v-icon>
                    </div>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="7" class="text-center">
              <div ref="main_card_effect_4" class="pe-4">
                <v-img src="/Cargo_Owner_Image.svg" cover></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="useUserStore().getBusinessType == 'Ship Management'" align="center" justify="center" no-gutters>
            <v-col cols="5" class="text-center">
              <v-card-text>
                <div ref="main_card_effect_1" class="text-h6 text-sm-h4 text-md-h3 text-lg-h2 font-weight-regular raleway-font">
                  Total Service
                </div>
                <div ref="main_card_effect_2" class="text-h2 text-sm-h3 text-md-h2 text-lg-h1 font-weight-medium raleway-font">
                  12
                </div>
                <div ref="main_card_effect_3" class="mt-3">
                  <v-btn
                    rounded="lg"                    
                    style="background-color: rgba(255, 255, 255, 0.2);"
                  >
                    <div class="text-white d-flex align-center raleway-font">
                      See All
                      <v-icon size="20" end>
                        mdi-arrow-right-circle-outline
                      </v-icon>
                    </div>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="7" class="text-center">
              <div ref="main_card_effect_4" class="pe-4">
                <v-img src="/Ship_Management_Image.svg" cover></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="useUserStore().getBusinessType == 'Crewing Agency'" align="center" justify="center" no-gutters>
            <v-col cols="5" class="text-center">
              <v-card-text>
                <div ref="main_card_effect_1" class="text-h6 text-sm-h4 text-md-h3 text-lg-h2 font-weight-regular raleway-font">
                  Total Crew
                </div>
                <div ref="main_card_effect_2" class="text-h2 text-sm-h3 text-md-h2 text-lg-h1 font-weight-medium raleway-font">
                  12
                </div>
                <div ref="main_card_effect_3" class="mt-3">
                  <v-btn
                    rounded="lg"                    
                    style="background-color: rgba(255, 255, 255, 0.2);"
                  >
                    <div class="text-white d-flex align-center raleway-font">
                      See All
                      <v-icon size="20" end>
                        mdi-arrow-right-circle-outline
                      </v-icon>
                    </div>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="7" class="text-center">
              <div ref="main_card_effect_4" class="pe-4">
                <v-img src="/Crewing_Agency_Icon.svg" cover></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="useUserStore().getBusinessType == 'Shipping Agency'" align="center" justify="center" no-gutters>
            <v-col cols="5" class="text-center">
              <v-card-text>
                <div ref="main_card_effect_1" class="text-h6 text-sm-h4 text-md-h3 text-lg-h2 font-weight-regular raleway-font">
                  Total Service
                </div>
                <div ref="main_card_effect_2" class="text-h2 text-sm-h3 text-md-h2 text-lg-h1 font-weight-medium raleway-font">
                  12
                </div>
                <div ref="main_card_effect_3" class="mt-3">
                  <v-btn
                    rounded="lg"                    
                    style="background-color: rgba(255, 255, 255, 0.2);"
                  >
                    <div class="text-white d-flex align-center raleway-font">
                      See All
                      <v-icon size="20" end>
                        mdi-arrow-right-circle-outline
                      </v-icon>
                    </div>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
            <v-col cols="7" class="text-center">
              <div ref="main_card_effect_4" class="pe-4">
                <v-img src="/Shipping_Agency_Image.svg" cover></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row align="center" class="pt-3">
      <v-col cols="12">
        <div ref="type_of_service_effect" class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-blue-darken-4 text-start font-weight-bold raleway-font">
          Type Of Service
        </div>
      </v-col>
            
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-card 
          class="mx-auto d-flex align-center justify-center"
          :height="$vuetify.display.smAndDown ? '140px' : '200px'"
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Gradation.svg"
        >
          <div class="text-center pa-3">                  
            <v-card 
              class="mx-auto d-flex align-center pa-1"
              width="100px"
              elevation="0" 
              color="transparent" 
              rounded="xl"              
            >
              <v-img              
                src="/Vessel_Owner_Icon.svg"
              ></v-img>
            </v-card>
            <div class="text-body-2 font-weight-regular raleway-font">Vessel Owner</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-card 
          class="mx-auto d-flex align-center justify-center" 
          :height="$vuetify.display.smAndDown ? '140px' : '200px'"
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Gradation.svg"
        >
          <div class="text-center pa-3">                  
            <v-card 
              class="mx-auto d-flex align-center pa-1"
              width="100px"
              elevation="0"
              color="transparent" 
              rounded="xl"              
            >
              <v-img              
                src="/Cargo_Owner_Icon.svg"
              ></v-img>
            </v-card>
            <div class="text-body-2 font-weight-regular raleway-font">Cargo Owner</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-card 
          class="mx-auto d-flex align-center justify-center" 
          :height="$vuetify.display.smAndDown ? '140px' : '200px'"
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Gradation.svg"
        >
          <div class="text-center pa-3">                  
            <v-card 
              class="mx-auto d-flex align-center pa-1"
              width="100px"
              elevation="0"
              color="transparent" 
              rounded="xl"              
            >
              <v-img              
                src="/Ship_Management_Icon.svg"
              ></v-img>
            </v-card>
            <div class="text-body-2 font-weight-regular raleway-font">Ship Management</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-card 
          class="mx-auto d-flex align-center justify-center" 
          :height="$vuetify.display.smAndDown ? '140px' : '200px'"
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Gradation.svg"
        >
          <div class="text-center pa-3">                  
            <v-card 
              class="mx-auto d-flex align-center pa-1"
              width="100px"
              elevation="0" 
              color="transparent" 
              rounded="xl"              
            >
              <v-img              
                src="/Crewing_Agency_Icon.svg"
              ></v-img>
            </v-card>
            <div class="text-body-2 font-weight-regular raleway-font">Crewing Agency</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-card 
          class="mx-auto d-flex align-center justify-center" 
          :height="$vuetify.display.smAndDown ? '140px' : '200px'"
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Gradation.svg"
        >
          <div class="text-center pa-3">                  
            <v-card 
              class="mx-auto d-flex align-center pa-1"
              width="100px"
              elevation="0" 
              color="transparent" 
              rounded="xl"              
            >
              <v-img              
                src="/Shipping_Agency_Icon.svg"
              ></v-img>
            </v-card>
            <div class="text-body-2 font-weight-regular raleway-font">Shipping Agency</div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="4" md="4" lg="3">
        <v-card 
          class="mx-auto d-flex align-center justify-center"
          :height="$vuetify.display.smAndDown ? '140px' : '200px'"
          elevation="8"
          color="blue-darken-4" 
          rounded="xl"
          image="/Card_Background_Gradation.svg"
        >
          <div class="text-center pa-3">                  
            <v-card 
              class="mx-auto d-flex align-center pa-1"
              width="100px"
              elevation="0" 
              color="transparent" 
              rounded="xl"              
            >
              <v-img              
                src="/S&P_Vessel_Icon.svg"
              ></v-img>
            </v-card>
            <div class="text-body-2 font-weight-regular raleway-font">S&P Vessel</div>
          </div>
        </v-card>
      </v-col>
    </v-row>    
  </v-container>
</template>

<script setup>
import axios from 'axios';
import { useUserStore } from '@/stores/user';

import { onMounted, ref } from 'vue';
import { gsap, ScrollTrigger } from 'gsap/all';

const welcome_effect = ref(null);
const company_effect = ref(null);
const main_card_effect_1 = ref(null);
const main_card_effect_2 = ref(null);
const main_card_effect_3 = ref(null);
const main_card_effect_4 = ref(null);
const type_of_service_effect = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(welcome_effect.value, {
    opacity: 0,
    x: -200,
    y: 0,
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: welcome_effect.value,
      start: 'top 80%',
    },
  });

  gsap.fromTo(company_effect.value, {
    opacity: 0,
    x: 200,
    y: 0,
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 1,
    delay: 0.1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: company_effect.value,
      start: 'top 80%',
    },
  });

  gsap.fromTo(main_card_effect_1.value, {
    opacity: 0,
    y: 0,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: main_card_effect_1.value,
      start: 'top 80%',
    },
  });

  gsap.fromTo(main_card_effect_2.value, {
    opacity: 0,
    y: 0,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: main_card_effect_2.value,
      start: 'top 80%',
    },
  });

  gsap.fromTo(main_card_effect_3.value, {
    opacity: 0,
    y: 0,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: main_card_effect_3.value,
      start: 'top 80%',
    },
  });

  gsap.fromTo(main_card_effect_4.value, {
    opacity: 0,
    x: 15,
    y: 15,
  }, {
    opacity: 1,
    y: 0,
    x: 0,
    duration: 1,    
    ease: 'power4.out',
    scrollTrigger: {
      trigger: main_card_effect_4.value,
      start: 'top 80%',
    },
  });

  gsap.fromTo(type_of_service_effect.value, {
    opacity: 0,
    x: -200,
    y: 0,
  }, {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: type_of_service_effect.value,
      start: 'top 80%',
    },
  });
});
</script>