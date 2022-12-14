<template>
  <popup-layout>
    <div>
      <IconCheckmark class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">
      {{ $t("landing.thank_you") }}
    </div>
    <div class="font-base text-center text-white">
      {{ $t("landing.your_account_has_been_activated") }}
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <router-link
          :to="{ name: 'newsfeed' }"
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("landing.go_to_my_news_feed") }}
        </router-link>
      </div>
    </div>
  </popup-layout>
</template>

<script setup>
import IconCheckmark from "@/components/icons/IconCheckmark.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
import axiosInstance from "@/config/axios/index.js";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

onMounted(async () => {
  try {
    const response = await axiosInstance.post(
      `/email/verify/${route.params.id}/${route.params.token}`
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});
</script>
