<template>
  <NavigationBar />
  <div class="bg-[#11101A] py-36">
    <h1 class="text-center text-3xl text-[#DDCCAA]">
      Find any quote in millions of movie lines
    </h1>
    <div class="flex items-center justify-center">
      <router-link
        :to="{ name: 'signup' }"
        class="bg-[#E31221] px-4 py-2 rounded-lg text-white"
      >
        <h1 id="begin">Get Started</h1>
      </router-link>
    </div>
  </div>
  <v-modal :open="open" @close="open = false">
    <router-view />
  </v-modal>
  <img src="/src/assets/Rectangle.jpg" alt="pic" />

  <footer class="py-4 px-10 bg-[#11101A]">
    <div class="text-[#DDCCAA]">&#169; MOVIE QUOTES. ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
</script>
