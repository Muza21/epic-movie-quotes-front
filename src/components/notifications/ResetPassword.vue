<template>
  <popup-layout>
    <div>
      <IconSent class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">Check your email</div>
    <div class="text-center font-base text-white">
      We have sent a password recover instructions to your email
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <a
          href="https://gmail.com"
          target="_blank"
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white text-center rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Go to my email
        </a>
      </div>
    </div>

    <div class="text-sm font-semibold py-6 flex justify-center">
      <router-link
        :to="{ name: 'landing' }"
        class="font-normal flex justify-center"
      >
        <span class="text-[#6C757D]"> Skip&#44; I&#39;ll confirm later </span>
      </router-link>
    </div>
  </popup-layout>
</template>

<script setup>
import IconSent from "@/components/icons/IconSent.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
</script>
