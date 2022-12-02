<template>
  <div
    class="bg-[#222030] flex flex-col items-center h-screen overflow-hidden text-white text-center"
  >
    <div class="relative mt-36 md:mt-56">
      <IconUnion class="mt-14" />
      <IconGandolf class="absolute top-0 ml-2" />
    </div>
    <h1 class="text-5xl font-bold my-3">You shall not pass!</h1>
    <p class="text-2xl">
      Sorry, but you don’t have permission to access this page
    </p>
    <router-link
      :to="{ name: 'landing' }"
      class="mt-12 bg-[#E31221] px-4 py-2 rounded-lg text-white"
    >
      Return home
    </router-link>
  </div>
</template>

<script setup>
import IconGandolf from "@/components/icons/IconGandolf.vue";
import IconUnion from "@/components/icons/IconUnion.vue";
</script>
