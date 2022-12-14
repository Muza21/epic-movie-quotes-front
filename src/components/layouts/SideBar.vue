<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <div class="flex flex-col justify-between">
      <div class="h-full w-96 space-y-2 p-3 pl-16">
        <div class="divide-y divide-gray-700">
          <ul class="space-y-1 pt-2 pb-4 text-sm">
            <li class="flex dark:bg-gray-800 dark:text-gray-50">
              <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-400">
                <img alt="..." :src="user?.thumbnail" />
              </div>
              <div class="ml-4">
                <h2 class="text-lg font-semibold text-white">
                  {{ user?.username }}
                </h2>
                <span class="flex items-center space-x-1">
                  <router-link
                    :to="{ name: 'profile' }"
                    class="text-xs text-[#CED4DA] hover:underline dark:text-gray-400"
                  >
                    {{ $t("newsfeed.edit_your_profile") }}
                  </router-link>
                </span>
              </div>
            </li>
            <li class="dark:bg-gray-800 dark:text-gray-50">
              <router-link
                :to="{ name: 'newsfeed' }"
                class="flex items-center rounded-md p-2"
              >
                <IconHouseVue />
                <span class="ml-6 text-white">
                  {{ $t("newsfeed.news_feed") }}
                </span>
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'movielist' }"
                class="flex items-center rounded-md p-2"
              >
                <IconCameraVue />

                <span class="ml-6 text-white">
                  {{ $t("newsfeed.list_of_movies") }}
                </span>
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
