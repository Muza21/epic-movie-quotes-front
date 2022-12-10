<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div class="w-full">
          <div
            class="flex justify-between max-w-4xl rounded-xl md:w-[1000px] mx-auto"
          >
            <router-link
              :to="{ name: 'new-quote' }"
              class="flex p-4 bg-[#24222F] rounded-lg w-52"
            >
              <IconNewquote />
              <p class="text-white ml-2">Write new quote</p>
            </router-link>
            <ValidationForm class="flex items-center">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <IconSearch />
                </div>
                <Field
                  type="text"
                  id="search"
                  name="search"
                  class="bg-[#24222F] w-[688px] py-4 pr-4 pl-12 border-b border-[#EFEFEF] text-white text-sm rounded-lg placeholder-[#CED4DA]"
                  placeholder="Enter @ to search movies, Enter # to search quotes "
                  required
                />
              </div>
            </ValidationForm>
          </div>
          <div v-for="quote in quotes.values" :key="quote">
            <article
              class="max-w-4xl my-10 rounded-xl md:w-[1000px] bg-[#11101A] mx-auto"
            >
              <div class="flex items-center mb-6 p-6 rounded-md">
                <img
                  class="rounded-full w-12 h-12 mr-2 mt-1"
                  src="/src/assets/ProfilePic.jpg"
                />
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-white">
                    Nino Tabagari
                  </h2>
                </div>
              </div>

              <h1 class="text-white text-xl p-6 lg:text-4xl mb-10">
                {{ quote.quote }}
              </h1>

              <div class="text-white p-6 leading-loose">
                <img :src="link + quote.thumbnail" alt="post image" />
              </div>

              <div class="flex text-xl p-6 text-white">
                <p class="mx-2">3</p>
                <IconComment />
                <p class="mx-2">10</p>
                <IconHeart />
              </div>

              <div class="text-white p-6 antialiased flex">
                <img
                  class="rounded-full w-12 h-12 mr-2 mt-1"
                  src="/src/assets/ProfilePic.jpg"
                />
                <div>
                  <div class="px-4 pt-2 pb-2.5 ]">
                    <div
                      class="font-semibold text-white text-sm leading-relaxed"
                    >
                      Nino Tabagari
                    </div>
                    <div
                      class="text-normal leading-snug md:leading-normal pb-6 border-b-2 border-[#EFEFEF]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-white p-6 antialiased flex">
                <img
                  class="rounded-full w-12 h-12 mr-2 mt-1"
                  src="/src/assets/ProfilePic.jpg"
                />
                <div class="w-full">
                  <div class="px-4 pt-2 pb-2.5">
                    <input
                      class="bg-[#24222F] rounded-md w-full p-4"
                      type="text"
                      placeholder="Write a comment"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <v-modal :open="open" @close="open = false">
      <router-view />
    </v-modal>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconNewquote from "@/components/icons/IconNewquote.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { Form as ValidationForm, Field } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { reactive, onMounted } from "vue";

const quotes = reactive({});

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

onMounted(() => {
  axiosInstance
    .get(`/quotes`)
    .then((response) => {
      quotes.values = response.data.quotes;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
