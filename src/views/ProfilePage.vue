<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div
          class="w-[400px] h-[130px] bg-[#BADBCC] rounded-lg absolute right-11 top-8 hidden"
        >
          <div class="flex justify-between items-center p-4">
            <IconGreencheck class="w-6 h-6" />
            <p class="text-[#0F5132] font-sans">A simple alert—check it out!</p>
            <IconCross :svgColor="black" class="w-4 h-4" />
          </div>
          <p class="p-4 text-center">
            Please check email to verify new address
          </p>
        </div>

        <div
          class="w-full h-full md:w-[1000px] mx-auto bg-[#11101A] rounded-lg m-24 overflow-y-auto"
        >
          <div class="flex items-center justify-center py-16 px-52">
            <div class="px-6 w-full">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full px-4 lg:w-3/12 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <div class="rounded-full overflow-hidden w-32 h-32">
                      <img alt="Profile Picture" :src="user?.thumbnail" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="text-center text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  Upload new photo
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <div class="py-1">
                    <span class="px-1 text-sm text-white">Username</span>
                    <div class="flex justify-between items-center">
                      <input
                        placeholder=""
                        type="text"
                        class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                      <div class="ml-4 text-[#CED4DA]">Edit</div>
                    </div>
                  </div>
                  <div class="my-10 border-t border-[#CED4DA]"></div>
                  <div class="py-1">
                    <span class="px-1 text-sm text-white">Email</span>
                    <div class="flex justify-between items-center">
                      <input
                        placeholder=""
                        type="email"
                        class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                      <div class="ml-4 text-[#CED4DA]">Edit</div>
                    </div>
                  </div>
                  <button
                    class="mt-10 px-4 py-2 rounded-lg text-white border border-white"
                  >
                    Add new email
                  </button>
                  <div class="my-10 border-t border-[#CED4DA]"></div>

                  <div class="py-1">
                    <span class="px-1 text-sm text-white">Password</span>
                    <div class="flex justify-between items-center">
                      <input
                        placeholder=""
                        type="password"
                        x-model="password"
                        class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                      <div class="ml-4 text-[#CED4DA]">Edit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4 bg-[#222030] flex justify-end">
            <button class="mx-4 px-4 py-2 rounded-lg text-white">Cancel</button>
            <button class="mx-4 bg-[#E31221] px-4 py-2 rounded-lg text-white">
              Save changes
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
