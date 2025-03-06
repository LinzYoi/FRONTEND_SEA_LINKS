<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <v-fade-transition mode="out-in">        
        <component :is="Component" />        
      </v-fade-transition>
    </router-view>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from './stores/user';

onMounted(() => {
  useUserStore().user();
});
</script>

<style scoped>

</style>