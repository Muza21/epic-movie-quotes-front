<template>
  <div class="mx-auto w-full max-w-lg px-10 py-8">
    <div class="mx-auto w-[750px] space-y-6">
      <div class="dropdown-menu">
        <div class="relative mt-8 rounded-lg bg-black px-4 shadow-xl">
          <IconTriangle class="absolute bottom-full right-60" />
          <div class="flex justify-between pt-8 pb-6 text-white">
            <h2 class="text-xl">Notifications</h2>
            <!-- diffForHumans(); -->
            <p
              @click="markAllRead"
              class="cursor-pointer border-b-2 border-white p-1"
            >
              mark as all read
            </p>
          </div>
          <div class="max-h-96 overflow-auto">
            <div v-for="notification in notifications" :key="notification">
              <div
                class="mb-3 flex w-full items-center border-2 border-[#6C757D] p-3 hover:bg-gray-800"
              >
                <img
                  class="h-20 w-20 rounded-full object-cover"
                  :src="notification?.sender?.thumbnail"
                />
                <div class="mx-3 flex-1">
                  <div class="flex justify-between">
                    <h2 class="text-xl font-semibold text-white">
                      {{ notification?.sender?.username }}
                    </h2>
                    <p class="text-[#D9D9D9]">
                      {{ notification?.created_at }}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <h2
                      v-if="notification?.type == 'comment'"
                      class="flex items-center text-[#CED4DA]"
                    >
                      <IconChat class="w-5" />
                      <p class="ml-3">Commented to your movie quotes</p>
                    </h2>
                    <h2 v-else class="flex items-center text-[#CED4DA]">
                      <RedHeart class="w-5" />
                      <p class="ml-3">Reacted to your quote</p>
                    </h2>
                    <p v-if="!notification?.seen" class="text-[#198754]">New</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconTriangle from "@/components/icons/IconTriangle.vue";
import IconChat from "@/components/icons/IconChat.vue";
import RedHeart from "@/components/icons/RedHeart.vue";
import { onMounted, ref } from "vue";
import axiosInstance from "@/config/axios/index.js";

const notifications = ref({});
const undread = ref({});

function markAllRead() {
  axiosInstance
    .post(`/notification`)
    .then((response) => {
      notifications.value = response.data.notifications;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  axiosInstance
    .get(`/notification`)
    .then((response) => {
      notifications.value = response.data.notifications;
      undread.value = response.data.undreadNotifications;
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
