<template>
  <header class="py-4 px-16 bg-[#222030]">
    <div class="wrapper">
      <nav class="flex justify-between items-center">
        <RouterLink to="/" class="text-[#DDCCAA]">MOVIE QUOTES</RouterLink>
        <div class="flex items-center">
          <div v-if="authStore.authenticated" class="mx-4">
            <button @click="toggleNotification">
              <div class="relative">
                <IconNotification />
                <div
                  class="w-[25px] h-[25px] absolute -top-[5px] -right-[10px] flex items-center justify-center rounded-full bg-[#E33812] text-white font-semibold"
                >
                  3
                </div>
              </div>
            </button>
            <UsersNotifications
              v-if="view.notificationView"
              class="absolute -translate-x-[515px] -translate-y-[20px] z-50"
            />
          </div>
          <div>
            <button @click="toggleLanguage">
              <span class="flex items-center mx-4 text-white"
                >Eng <IconDropdown class="ml-2" />
              </span>
            </button>
            <div
              v-if="view.languageView"
              class="absolute w-36 h-[112px] rounded-lg bg-[#11101A] mt-2"
            >
              <div class="py-1 hover:bg-gray-800">
                <a href="#" class="flex items-center p-3 rounded-md">
                  <span class="ml-4 text-white">English</span>
                </a>
              </div>
              <div class="py-1 hover:bg-gray-800">
                <a href="#" class="flex items-center p-3 rounded-md">
                  <span class="ml-4 text-white">ქართული</span>
                </a>
              </div>
            </div>
          </div>
          <router-link
            v-if="!authStore.authenticated"
            :to="{ name: 'signup' }"
            class="mx-4 bg-[#E31221] px-4 py-2 rounded-lg text-white"
          >
            Sign Up
          </router-link>
          <router-link
            v-if="!authStore.authenticated"
            :to="{ name: 'login' }"
            class="mx-4 px-4 py-2 rounded-lg text-white border border-white"
          >
            Log In
          </router-link>
          <ValidationForm v-if="authStore.authenticated" @submit="onSubmit">
            <button
              class="mx-4 px-4 py-2 rounded-lg text-white border border-white"
            >
              Log Out
            </button>
          </ValidationForm>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import IconNotification from "@/components/icons/IconNotification.vue";
import IconDropdown from "@/components/icons/IconDropdown.vue";
import UsersNotifications from "@/components/notifications/UsersNotifications.vue";
import { Form as ValidationForm } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import { reactive } from "vue";

const view = reactive({
  notificationView: false,
  languageView: false,
});

const router = useRouter();
const authStore = useAuthStore();

function toggleNotification() {
  view.notificationView = !view.notificationView;
}

const toggleLanguage = () => {
  view.languageView = !view.languageView;
};
const onSubmit = async () => {
  try {
    const response = await axiosInstance.post(`/logout`);
    console.log(authStore.authenticated);
    authStore.authenticated = false;
    router.push({ name: "landing" });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
