<template>
  <popup-layout>
    <div>
      <IconSent class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">Thank you&#33;</div>
    <div class="text-center font-base text-white">
      Please check your email and follow the instructions to activate your
      account.
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <a
          href="https://gmail.com"
          target="_blank"
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-center text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Go to my email
        </a>
      </div>
    </div>
  </popup-layout>
</template>

<script setup>
import IconSent from "@/components/icons/IconSent.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
</script>
