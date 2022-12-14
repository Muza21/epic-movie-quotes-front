<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div class="w-full">
          <h1 class="mx-20 p-6 text-2xl text-white">
            {{ $t("moviedescription.movie_description") }}
          </h1>

          <div class="my-10 grid grid-cols-2 rounded-xl px-20 md:w-full">
            <div class="p-6 leading-loose text-white">
              <img :src="link + data.movie.thumbnail" alt="post image" />
            </div>
            <div>
              <div
                class="mb-6 flex items-center justify-between rounded-md px-6 pt-6"
              >
                <h2 class="text-4xl text-[#DDCCAA]">
                  {{ data?.movie?.title?.[$i18n.locale] }} &#40;{{
                    data?.movie?.year
                  }}&#41;
                </h2>
                <div class="ml-4 flex rounded-lg bg-[#24222F]">
                  <router-link
                    :to="{ name: 'edit-movie' }"
                    class="rounded-md py-4 px-5 hover:bg-slate-800"
                  >
                    <IconPencil />
                  </router-link>
                  <div
                    class="mt-[14px] h-6 border-2 border-r border-[#6C757D]"
                  ></div>
                  <div
                    @click="deleteMovie"
                    class="cursor-pointer rounded-md py-4 px-5 hover:bg-slate-800"
                  >
                    <IconTrash />
                  </div>
                </div>
              </div>

              <div class="my-3 flex px-6">
                <div v-for="genre in data?.genres" :key="genre">
                  <div
                    class="mr-2 rounded-md bg-[#6C757D] px-2 py-1 text-center text-white"
                  >
                    {{ genre?.[$i18n.locale] }}
                  </div>
                </div>
              </div>

              <div class="my-3 flex px-6">
                <h2 class="text-xl text-white">
                  {{ $t("movielist.director") }}
                  &#58;
                </h2>
                <h2 class="ml-2 text-xl text-white">
                  {{ data?.movie?.director?.[$i18n.locale] }}
                </h2>
              </div>

              <div class="my-3 flex px-6">
                <h2 class="text-xl text-white">
                  {{ $t("movielist.budget") }}
                  &#58;
                </h2>
                <h2 class="ml-2 text-xl text-white">
                  {{ data.movie.budget }}
                </h2>
              </div>
              <p class="my-3 px-6 text-lg text-white">
                {{ data?.movie?.description?.[$i18n.locale] }}
              </p>
            </div>

            <div class="m-6 flex items-center">
              <h3 class="border-r border-[#6C757D] pr-4 text-lg text-white">
                {{ $t("moviedescription.quotes") }} &#40;{{
                  $t("movielist.total")
                }}
                {{ data?.quotes?.length }}&#41;
              </h3>

              <router-link
                :to="{ name: 'add-quote' }"
                class="mx-4 rounded-lg bg-[#E31221] px-4 py-2 text-white"
              >
                {{ $t("moviedescription.add_quote") }}
              </router-link>
            </div>

            <div class="col-start-1" v-for="quote in data.quotes" :key="quote">
              <div class="col-start-1 m-6 rounded-lg bg-[#11101A]">
                <div class="flex">
                  <div class="mb-3 flex w-full items-center p-6">
                    <img
                      class="w-50 w-40 rounded-lg object-cover"
                      :src="link + quote?.thumbnail"
                    />
                    <div class="mx-6">
                      <q class="text-center text-xl font-semibold text-white"
                        >{{ quote?.quote?.[$i18n.locale] }}
                      </q>
                    </div>
                  </div>
                  <div class="p-6">
                    <button
                      class="py-2"
                      @click="toggleCrudOperationView(quote?.id)"
                    >
                      <IconThreedots />
                    </button>
                    <QuoteCrud
                      :myParam="quote?.id"
                      v-if="crudPanel == quote?.id"
                      @close="crudPanel = false"
                    />
                  </div>
                </div>
                <div
                  class="mx-6 flex border-t border-[#EFEFEF] py-6 text-xl text-white"
                >
                  <p class="mx-2">{{ quote?.comments?.length }}</p>
                  <IconComment />
                  <p class="mx-2">{{ quote?.likes?.length }}</p>
                  <IconHeart />
                </div>
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
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import IconThreedots from "@/components/icons/IconThreedots.vue";
import QuoteCrud from "@/components/QuoteCrud.vue";
import axiosInstance from "@/config/axios/index.js";

import { reactive, ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMovieStore } from "@/stores/movie";
import { useQuoteStore } from "@/stores/quote";
import { useUpdateQuoteStore } from "@/stores/quote";
import { useDeleteQuoteStore } from "@/stores/quote";

const route = useRoute();
const router = useRouter();
const movieData = useMovieStore();
const quoteData = useQuoteStore();
const quoteUpdateData = useUpdateQuoteStore();
const quoteDeleteData = useDeleteQuoteStore();
const crudPanel = ref("");

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

watch(() => {
  if (movieData.movie) {
    return (data.movie = movieData.movie);
  }
  if (quoteData.quote) {
    return data.quotes.push(quoteData.quote);
  }
  if (quoteUpdateData.quote) {
    let res = data.quotes.find((x) => x.id == quoteUpdateData.quote.id);
    let index = data.quotes.indexOf(res);
    return (data.quotes[index] = quoteUpdateData.quote);
  }
  if (quoteDeleteData.quote) {
    return data.quotes.splice(data.quotes.indexOf(quoteDeleteData.quote), 1);
  }
});

const data = reactive({
  movie: {},
  genres: {},
  quotes: {},
});
function toggleCrudOperationView(id) {
  if (crudPanel.value == id) {
    crudPanel.value = "";
  } else {
    crudPanel.value = id;
  }
}

const deleteMovie = async () => {
  try {
    const response = await axiosInstance.post(`/movie/${data.movie.id}`);
    router.push({ name: "movielist" });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  axiosInstance
    .get(`/movie/${route.params.id}`)
    .then((response) => {
      data.movie = response.data.movie;
      data.genres = JSON.parse(data.movie.genre);
      data.quotes = response.data.quotes;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
