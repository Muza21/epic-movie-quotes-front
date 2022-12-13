<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="flex flex-col justify-between">
      <div class="h-full p-3 pl-16 space-y-2 w-96">
        <div class="divide-y divide-gray-700">
          <ul class="pt-2 pb-4 space-y-1 text-sm">
            <li class="flex dark:bg-gray-800 dark:text-gray-50">
              <div class="rounded-full overflow-hidden bg-red-400 w-12 h-12">
                <img alt="..." :src="user?.thumbnail" />
              </div>
              <div class="ml-4">
                <h2 class="text-lg font-semibold text-white">
                  {{ user?.username }}
                </h2>
                <span class="flex items-center space-x-1">
                  <router-link
                    :to="{ name: 'profile' }"
                    class="text-xs hover:underline text-[#CED4DA] dark:text-gray-400"
                    >Edit your profile</router-link
                  >
                </span>
              </div>
            </li>
            <li class="dark:bg-gray-800 dark:text-gray-50">
              <router-link
                :to="{ name: 'newsfeed' }"
                class="flex items-center p-2 rounded-md"
              >
                <IconHouseVue />
                <span class="ml-6 text-white">News feed</span>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'movielist' }"
                class="flex items-center p-2 rounded-md"
              >
                <IconCameraVue />

                <span class="ml-6 text-white">List of movies</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCameraVue from "@/components/icons/IconCamera.vue";
import IconHouseVue from "@/components/icons/IconHouse.vue";
import { RouterLink } from "vue-router";
import axiosInstance from "@/config/axios/index.js";
import { onMounted, ref } from "vue";

const user = ref([]);

onMounted(() => {
  axiosInstance
    .get(`/current-user`)
    .then((response) => {
      user.value = response.data.user;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
