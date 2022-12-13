<template>
  <div
    class="flex h-screen flex-col items-center overflow-hidden bg-[#222030] text-center text-white"
  >
    <div class="relative mt-36 md:mt-56">
      <IconUnion class="mt-14" />
      <IconGandolf class="absolute top-0 ml-2" />
    </div>
    <h1 class="my-3 text-5xl font-bold">You shall not pass!</h1>
    <p class="text-2xl">
      Sorry, but you don’t have permission to access this page
    </p>
    <router-link
      :to="{ name: 'landing' }"
      class="mt-12 rounded-lg bg-[#E31221] px-4 py-2 text-white"
    >
      Return home
    </router-link>
  </div>
</template>

<script setup>
import IconGandolf from "@/components/icons/IconGandolf.vue";
import IconUnion from "@/components/icons/IconUnion.vue";
</script>
