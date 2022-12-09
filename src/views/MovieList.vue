<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <div class="flex flex-col h-screen overflow-y-auto">
          <div class="flex flex-col justify-between">
            <SideBar />
          </div>
        </div>
        <div class="w-full">
          <div class="flex justify-between mx-20 mt-5">
            <h2 class="text-white text-xl">My list of movies Total 25</h2>
            <div class="flex items-center">
              <div class="relative mr-14">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <IconSearch />
                </div>
                <Field
                  type="text"
                  id="search"
                  name="search"
                  class="bg-[#24222F] w-[150px] py-4 pr-4 pl-12 border-b border-[#EFEFEF] text-white text-sm rounded-lg placeholder-[#CED4DA]"
                  placeholder="Search"
                  required
                />
              </div>
              <router-link
                :to="{ name: 'add-movie' }"
                class="bg-[#E31221] px-4 py-2 rounded-lg text-white"
              >
                <IconAdd class="my-auto mr-3" />Add movie
              </router-link>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 m-20">
              <div v-for="movie in data.movies" :key="movie">
                <router-link
                  :to="{ name: 'movie-description', params: { id: movie?.id } }"
                  class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
                >
                  <img
                    :src="link + movie.thumbnail"
                    alt="Fiction Product"
                    class="object-cover rounded-tl-md rounded-tr-md"
                  />
                  <div class="my-2">
                    <h3 class="text-xl text-white">
                      {{ movie.title }}
                    </h3>
                  </div>
                  <div class="flex my-2 text-xl text-white">
                    <p class="mr-2">4</p>
                    <IconChat />
                  </div>
                </router-link>
              </div>
            </div>
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
import IconChat from "@/components/icons/IconChat.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { Field } from "vee-validate";

import { onMounted } from "vue";
import axiosInstance from "@/config/axios/index.js";

import { reactive } from "vue";

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const data = reactive({
  movies: {},
});

onMounted(() => {
  axiosInstance
    .get(`/movielist`)
    .then((response) => {
      console.log(response);
      data.movies = response.data.movies;
      console.log(data.movies);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
