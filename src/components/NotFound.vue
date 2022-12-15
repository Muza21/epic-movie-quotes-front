<template>
  <div
    class="flex h-screen flex-col items-center overflow-hidden bg-[#222030] text-center text-white"
  >
    <div class="mt-36 md:mt-56">
      <IconGhost />
      <IconElipse class="my-5" />
    </div>
    <h1 class="my-3 text-5xl font-bold">
      {{ $t("redirect.whoops") }}
    </h1>
    <p class="text-2xl">
      {{ $t("redirect.we_cant_see_the_page_you_are_looking_for") }}
    </p>
    <router-link
      :to="{ name: 'landing' }"
      class="mt-12 rounded-lg bg-[#E31221] px-4 py-2 text-white"
    >
      {{ $t("redirect.return_home") }}
    </router-link>
  </div>
</template>

<script setup>
import IconGhost from "@/components/icons/IconGhost.vue";
import IconElipse from "@/components/icons/IconElipse.vue";
</script>
