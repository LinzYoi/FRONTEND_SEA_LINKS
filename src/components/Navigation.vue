<template>
  <v-container v-if="$vuetify.display.smAndDown" fluid>
    <!-- Bottom Navigation untuk layar kecil -->
    <v-row align="start">
      <div class="raleway-font" style="height: 56px;">
        <v-bottom-navigation          
          v-model="bottom_navigation_value"
          color="blue-darken-4"
          :elevation="15"
          grow
        >
          <!-- Home -->
          <v-btn
            variant="plain"
            :ripple="false"
            :class="{ 'active-btn': bottom_navigation_value === 0 }"
            @click="navigateTo(0, '/sea-links/menu/home')"
          >
            <v-icon size="30">mdi-home</v-icon>
            <span style="letter-spacing: 0px;">Home</span>
          </v-btn>

          <!-- Transaction -->
          <v-btn
            variant="plain"
            :ripple="false"
            :class="{ 'active-btn': bottom_navigation_value === 1 }"
            @click="navigateTo(1, '/sea-links/menu/transaction')"
          >
            <v-icon size="30">mdi-cash</v-icon>
            <span style="letter-spacing: 0px;">Transaction</span>
          </v-btn>

          <!-- Chat -->
          <v-btn
            variant="plain"
            :ripple="false"
            :class="{ 'active-btn': bottom_navigation_value === 2 }"
            @click="navigateTo(2, '/sea-links/menu/chat')"
          >
            <v-icon size="30">mdi-chat-processing-outline</v-icon>
            <span style="letter-spacing: 0px;">Chat</span>
          </v-btn>

          <!-- Profile -->
          <v-btn
            variant="plain"
            :ripple="false"
            :class="{ 'active-btn': bottom_navigation_value === 3 }"
            @click="navigateTo(3, '/sea-links/menu/profile')"
          >
            <v-icon size="30">mdi-account</v-icon>
            <span style="letter-spacing: 0px;">Profile</span>
          </v-btn>
        </v-bottom-navigation>
      </div>

      <!-- Konten Utama -->
      <v-col class="px-0">
        <v-main class="px-0">
          <router-view></router-view>
        </v-main>
      </v-col>
    </v-row>  
  </v-container>

  <!-- Drawer untuk layar besar -->
  <v-container v-else fluid class="pa-0 ma-0 fill-height">
    <v-row no-gutters class="fill-height">
      <div class="raleway-font">
        <v-navigation-drawer 
          image="/Card_Background_Wave.svg"
          dark
          permanent 
          class="bg-blue-darken-4"
          width="260"
        >
          <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg">
              <template v-slot:prepend>
                <v-avatar image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" size="60"></v-avatar>
              </template>
              <span class="font-weight-medium">
                {{ useUserStore().getCompanyName }}
                <br>
                <span class="text-grey-lighten-1">{{ useUserStore().getBusinessType }}</span>
              </span>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav>
            <v-list-item 
              to="/sea-links/menu/home" 
              prepend-icon="mdi-home" 
              title="Home"
              :class="{ 'active-btn': bottom_navigation_value === 0 }"
            ></v-list-item>
            
            <v-list-item 
              to="/sea-links/menu/transaction" 
              prepend-icon="mdi-cash" 
              title="Transaction"
              :class="{ 'active-btn': bottom_navigation_value === 1 }"
            ></v-list-item>
            
            <v-list-item 
              to="/sea-links/menu/chat" 
              prepend-icon="mdi-chat-processing-outline" 
              title="Chat"
              :class="{ 'active-btn': bottom_navigation_value === 2 }"
            ></v-list-item>
            
            <v-list-item 
              to="/sea-links/menu/profile" 
              prepend-icon="mdi-account" 
              title="Profile"
              :class="{ 'active-btn': bottom_navigation_value === 3 }"
            ></v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-4">
              <v-btn    
                class="text-white font-weight-bold raleway-font pa-2"
                block
                style="letter-spacing: 0px; background-color: rgba(255, 255, 255, 0.2);"
                size="large"          
                variant="text"
                text="Log Out"
                rounded="lg"
                @click="logout()"
              >
                <template v-slot:prepend>
                  <v-icon class="text-red ms-1">mdi-logout</v-icon>
                </template> 
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </div>
      <!-- Drawer -->      
      
      <!-- Konten Utama -->
      <v-col class="px-0 py-0" style="margin-left: 260px;">
        <v-main class="px-0 py-0">
          <router-view></router-view>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// Daftar route untuk bottom navigation
const navRoutes = [
  "/sea-links/menu/home",
  "/sea-links/menu/transaction",
  "/sea-links/menu/chat",
  "/sea-links/menu/profile",
];

const bottom_navigation_value = computed(() => navRoutes.indexOf(route.path));

const navigateTo = (index, route) => {
  router.push(route);
};

const logout = () => {
  useUserStore().logout();
};
</script>

<style scoped>
.active-btn {
  position: relative;
  background-color: transparent;  
}

.active-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 3px;
  background-color: #003399;
  color: black;
  border-radius: 10px;
}
</style>

<style scoped>

</style>
