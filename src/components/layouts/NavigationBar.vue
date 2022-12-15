<template>
  <header class="bg-[#222030] py-4 px-16">
    <div class="wrapper">
      <nav class="flex items-center justify-between">
        <RouterLink to="/" class="text-[#DDCCAA]">
          {{ $t("landing.movie_quotes") }}
        </RouterLink>
        <div class="flex items-center">
          <div v-if="authStore.authenticated" class="mx-4">
            <button @click="toggleNotification">
              <div class="relative">
                <IconNotification />
                <div
                  class="absolute -top-[5px] -right-[10px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#E33812] font-semibold text-white"
                >
                  3
                </div>
              </div>
            </button>
            <UsersNotifications
              v-if="view.notificationView"
              class="absolute z-50 -translate-x-[515px] -translate-y-[20px]"
            />
          </div>
          <div>
            <button @click="toggleLanguage">
              <span
                v-if="$i18n.locale == 'en'"
                class="mx-4 flex items-center text-white"
                >Eng <IconDropdown class="ml-2" />
              </span>
              <span
                v-if="$i18n.locale == 'ka'"
                class="mx-4 flex items-center text-white"
                >ქარ <IconDropdown class="ml-2" />
              </span>
            </button>
            <div
              v-if="view.languageView"
              class="absolute z-50 mt-2 h-[112px] w-36 rounded-lg bg-[#11101A]"
            >
              <div class="py-1 hover:bg-gray-800">
                <div
                  @click="
                    $i18n.locale = 'en';
                    view.languageView = false;
                    setLocaleMemory('en');
                  "
                  class="flex cursor-pointer items-center rounded-md p-3"
                >
                  <span class="ml-4 text-white">English</span>
                </div>
              </div>
              <div class="py-1 hover:bg-gray-800">
                <div
                  @click="
                    $i18n.locale = 'ka';
                    view.languageView = false;
                    setLocaleMemory('ka');
                  "
                  class="flex cursor-pointer items-center rounded-md p-3"
                >
                  <span class="ml-4 text-white">ქართული</span>
                </div>
              </div>
            </div>
          </div>
          <router-link
            v-if="!authStore.authenticated"
            :to="{ name: 'signup' }"
            class="mx-4 rounded-lg bg-[#E31221] px-4 py-2 text-white"
          >
            {{ $t("landing.sign_up") }}
          </router-link>
          <router-link
            v-if="!authStore.authenticated"
            :to="{ name: 'login' }"
            class="mx-4 rounded-lg border border-white px-4 py-2 text-white"
          >
            {{ $t("landing.log_in") }}
          </router-link>
          <ValidationForm v-if="authStore.authenticated" @submit="onSubmit">
            <button
              class="mx-4 rounded-lg border border-white px-4 py-2 text-white"
            >
              {{ $t("landing.logout") }}
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
import { setLocale } from "@vee-validate/i18n";
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

function setLocaleMemory(locale) {
  window.localStorage.setItem("selectedLocale", locale);
  setLocale(locale);
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
