<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div class="w-full">
          <div class="mx-20 mt-5 flex justify-between">
            <h2 class="text-xl text-white">
              {{ $t("movielist.my_list_of_movies") }} &#40;{{
                $t("movielist.total")
              }}
              {{ data?.movies?.length }}&#41;
            </h2>
            <div class="flex items-center">
              <div class="relative mr-14">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <IconSearch />
                </div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  v-model="searchValue"
                  @keydown.enter="searchMovie"
                  class="w-[150px] rounded-lg border-b border-[#EFEFEF] bg-[#24222F] py-4 pr-4 pl-12 text-sm text-white placeholder-[#CED4DA]"
                  :placeholder="$t('movielist.search')"
                  required
                />
              </div>
              <router-link
                :to="{ name: 'add-movie' }"
                class="rounded-lg bg-[#E31221] px-4 py-2 text-white"
              >
                <IconAdd class="my-auto mr-3" />
                {{ $t("movielist.add_movie") }}
              </router-link>
            </div>
          </div>
          <div>
            <div class="m-20 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
              <div v-for="movie in data.movies" :key="movie">
                <router-link
                  :to="{ name: 'movie-description', params: { id: movie?.id } }"
                  class="flex flex-col rounded-md drop-shadow hover:opacity-70 hover:drop-shadow-lg"
                >
                  <img
                    :src="link + movie?.thumbnail"
                    alt="Fiction Product"
                    class="h-[380px] w-[440px] rounded-md object-cover object-center"
                  />
                  <div class="my-2">
                    <h3 class="text-xl text-white">
                      {{ movie?.title?.[$i18n.locale] }}
                    </h3>
                  </div>
                  <div class="my-2 flex text-xl text-white">
                    <p class="mr-2">{{ movie?.quotes_number }}</p>
                    <IconChat />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-modal>
      <router-view />
    </v-modal>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconSearch from "@/components/icons/IconSearch.vue";

import { onMounted, ref, watch } from "vue";
import axiosInstance from "@/config/axios/index.js";

import { reactive } from "vue";

import { useMovieStore } from "@/stores/movie";

const movieData = useMovieStore();

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;
watch(() => {
  if (movieData.movie) {
    return data.movies.push(movieData.movie);
  }
});
const searchValue = ref("");
const data = reactive({
  movies: {},
});

function searchMovie() {
  axiosInstance
    .post(`/search`, {
      text: searchValue.value,
    })
    .then((response) => {
      data.movies = response.data;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  axiosInstance
    .get(`/movie`)
    .then((response) => {
      data.movies = response.data.movies;
      console.log(response);
      console.log(movieData.movie);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
