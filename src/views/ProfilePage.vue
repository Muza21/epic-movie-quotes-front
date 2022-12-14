<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div
          class="absolute right-11 top-8 hidden h-[130px] w-[400px] rounded-lg bg-[#BADBCC]"
        >
          <div class="flex items-center justify-between p-4">
            <IconGreencheck class="h-6 w-6" />
            <p class="font-sans text-[#0F5132]">A simple alert—check it out!</p>
            <IconCross :svgColor="black" class="h-4 w-4" />
          </div>
          <p class="p-4 text-center">
            Please check email to verify new address
          </p>
        </div>

        <div
          class="m-24 mx-auto h-full w-full overflow-y-auto rounded-lg bg-[#11101A] md:w-[1000px]"
        >
          <div class="flex items-center justify-center py-16 px-52">
            <div class="w-full px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="flex w-full justify-center px-4 lg:order-2 lg:w-3/12"
                >
                  <div class="relative">
                    <div class="h-32 w-32 overflow-hidden rounded-full">
                      <img alt="Profile Picture" :src="user?.thumbnail" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="mt-0 mb-2 text-center text-sm font-bold uppercase leading-normal text-gray-500"
                >
                  {{ $t("profile.upload_new_photo") }}
                </div>
                <div class="mb-2 mt-10 text-gray-700">
                  <div class="py-1">
                    <span class="px-1 text-sm text-white">
                      {{ $t("landing.username") }}
                    </span>
                    <div class="flex items-center justify-between">
                      <input
                        placeholder=""
                        type="text"
                        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
                      />
                      <div class="ml-4 text-[#CED4DA]">
                        {{ $t("moviedescription.edit") }}
                      </div>
                    </div>
                  </div>
                  <div class="my-10 border-t border-[#CED4DA]"></div>
                  <div class="py-1">
                    <span class="px-1 text-sm text-white">
                      {{ $t("landing.email") }}
                    </span>
                    <div class="flex items-center justify-between">
                      <input
                        placeholder=""
                        type="email"
                        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
                      />
                      <div class="ml-4 text-[#CED4DA]">
                        {{ $t("moviedescription.edit") }}
                      </div>
                    </div>
                  </div>
                  <button
                    class="mt-10 rounded-lg border border-white px-4 py-2 text-white"
                  >
                    {{ $t("profile.add_new_email") }}
                  </button>
                  <div class="my-10 border-t border-[#CED4DA]"></div>

                  <div class="py-1">
                    <span class="px-1 text-sm text-white">
                      {{ $t("landing.password") }}
                    </span>
                    <div class="flex items-center justify-between">
                      <input
                        placeholder=""
                        type="password"
                        x-model="password"
                        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
                      />
                      <div class="ml-4 text-[#CED4DA]">
                        {{ $t("moviedescription.edit") }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end bg-[#222030] pt-4">
            <button class="mx-4 rounded-lg px-4 py-2 text-white">
              {{ $t("profile.cancel") }}
            </button>
            <button class="mx-4 rounded-lg bg-[#E31221] px-4 py-2 text-white">
              {{ $t("moviedescription.save_changes") }}
            </button>
          </div>
        </div>
        <v-modal :open="open" @close="open = false">
          <router-view />
        </v-modal>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import IconCross from "@/components/icons/IconCross.vue";
import IconGreencheck from "@/components/icons/IconGreencheck.vue";
import axiosInstance from "@/config/axios/index.js";
import { onMounted, ref } from "vue";

const user = ref({});

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
