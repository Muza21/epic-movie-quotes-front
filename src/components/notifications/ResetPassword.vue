<template>
  <popup-layout>
    <div>
      <IconSent class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">
      {{ $t("landing.check_your_email") }}
    </div>
    <div class="font-base text-center text-white">
      {{ $t("landing.we_have_sent_a_password_recover_instructions") }}
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <a
          href="https://gmail.com"
          target="_blank"
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("landing.success") }}
        </a>
      </div>
    </div>

    <div class="flex justify-center py-6 text-sm font-semibold">
      <router-link
        :to="{ name: 'landing' }"
        class="flex justify-center font-normal"
      >
        <span class="text-[#6C757D]">
          {{ $t("landing.skip_confirm_later") }}
        </span>
      </router-link>
    </div>
  </popup-layout>
</template>

<script setup>
import IconSent from "@/components/icons/IconSent.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
</script>
