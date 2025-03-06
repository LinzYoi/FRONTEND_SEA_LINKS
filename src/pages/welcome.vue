<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <div class="text-h4 text-sm-h4 text-md-h3 text-lg-h2 text-center text-blue-darken-4 font-weight-bold raleway-font mb-4" style="line-height: normal;">
          Sea Links
        </div>

        <v-carousel          
          v-model="currentSlide"
          :continuous="true"
          :show-arrows="false"
          height="400"
          cycle
          hide-delimiter-background
          hide-delimiters
          style="margin-bottom: -50px;"
        >
          <!-- Slide 1 -->
          <v-carousel-item>        
            <v-img src="/carousel_image_welcome_1.svg" height="250px"></v-img>
            <div class="text-center mt-4">
              <div class="text-h6 text-primary raleway-font font-weight-bold">Integrated Sea Logistics</div>
              <p class="text-body-1">
                All-in One Maritime Solution - Reliable, Seamless, and Efficient.
              </p>
            </div>
          </v-carousel-item>

          <!-- Slide 2 -->
          <v-carousel-item>
            <v-img src="/carousel_image_welcome_2.svg" height="250px" contain></v-img>
            <div class="text-center mt-4">
              <div class="text-h6 text-primary raleway-font font-weight-bold">Effortless Chartering</div>
              <p class="text-body-1">
                Instantly find and book vessels or cargo that match your tailored to our needs.
              </p>
            </div>
          </v-carousel-item>

          <!-- Slide 3 -->
          <v-carousel-item>
            <v-img src="/carousel_image_welcome_3.svg" height="250px" contain></v-img>            
            <div class="text-center mt-4">
              <div class="text-h6 text-primary raleway-font font-weight-bold">Wide Selection</div>
              <p class="text-body-1">
                Browse an extensive list of vessel, cargo, services, and agency support.
              </p>
            </div>
          </v-carousel-item>
        </v-carousel>

        <!-- Pagination (Indikator Slide) -->
        <div class="text-center" style="margin-bottom: -10px;">
          <v-btn
            v-for="(item, index) in 3"
            :key="index"
            icon
            size="small"
            variant="plain"
            :ripple="false"
            :color="currentSlide === index ? 'primary' : 'grey'"
            @click="currentSlide = index"
          >
            <v-icon>mdi-circle</v-icon>
          </v-btn>
        </div>

        <div class="text-center mt-12">
          <v-btn
            v-if="$vuetify.display.smAndDown" 
            color="sea_links_color" 
            rounded="lg" 
            block
            @click="router.push('/sign-in')"
          >
            Sign In
          </v-btn>
          <v-btn 
            v-else 
            color="sea_links_color" 
            rounded="lg" 
            width="200px"
            @click="router.push('/sign-in')"
          >
            Sign In
          </v-btn>          

          <div class="font-weight-medium mt-2 d-flex justify-center align-center">
            Don't have account?&nbsp;
            <span class="text-blue-darken-3">
              <router-link to="/sign-up">
                Sign Up
              </router-link>
            </span>
          </div>
        </div>
      </v-col>
    </v-row>        
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';

const currentSlide = ref(0);
</script>
