<template>
  <popup-layout>
    <div>
      <IconCheckmark class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">Success&#33;</div>
    <div class="text-center font-base text-white">
      Your password changed successfully
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <router-link
          :to="{ name: 'newsfeed' }"
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white text-center rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Go to my news feed
        </router-link>
      </div>
    </div>
  </popup-layout>
</template>

<script setup>
import IconCheckmark from "@/components/icons/IconCheckmark.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
</script>
