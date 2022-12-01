<template>
  <div
    class="bg-[#222030] flex flex-col items-center h-screen overflow-hidden text-white text-center"
  >
    <div class="mt-36 md:mt-56">
      <IconGhost />
      <IconElipse class="my-5" />
    </div>
    <h1 class="text-5xl font-bold my-3">Whoops!</h1>
    <p class="text-2xl">We can't see the page you are looking for</p>
    <router-link
      :to="{ name: 'landing' }"
      class="mt-12 bg-[#E31221] px-4 py-2 rounded-lg text-white"
    >
      Return home
    </router-link>
  </div>
</template>

<script setup>
import IconGhost from "@/components/icons/IconGhost.vue";
import IconElipse from "@/components/icons/IconElipse.vue";
</script>
