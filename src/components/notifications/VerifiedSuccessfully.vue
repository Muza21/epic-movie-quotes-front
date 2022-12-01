<template>
  <popup-layout>
    <div>
      <IconCheckmark class="mx-auto" />
    </div>
    <div class="text-center text-3xl text-white">Thank you&#33;</div>
    <div class="text-center font-base text-white">
      Your account has been activated.
    </div>
    <div class="mt-8">
      <div class="mx-auto max-w-lg">
        <router-link
          :to="{ name: 'newsfeed' }"
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-center text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
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
