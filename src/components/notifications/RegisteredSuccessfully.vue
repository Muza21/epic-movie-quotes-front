<template>
  <popup-layout>
    <div>
      <IconSent class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">Thank you&#33;</div>
    <div class="font-base text-center text-white">
      Please check your email and follow the instructions to activate your
      account.
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <a
          href="https://gmail.com"
          target="_blank"
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
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
