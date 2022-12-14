<template>
  <form-layout>
    <template v-slot:header>
      <div class="w-full px-10">
        <div class="mx-14 my-6 text-center text-3xl text-white">
          {{ $t("moviedescription.add_quote") }}
        </div>
      </div>
    </template>
    <ValidationForm class="mt-8" @submit="onSubmit">
      <div class="mx-auto px-4">
        <div class="my-10 rounded-xl bg-[#11101A]">
          <div class="mb-6 flex items-center rounded-md">
            <img
              class="mr-2 mt-1 h-12 w-12 rounded-full"
              :src="user?.thumbnail"
            />
            <div>
              <h2 class="text-lg font-semibold text-white">
                {{ user?.username }}
              </h2>
            </div>
          </div>
        </div>

        <div class="mb-3 flex w-full items-center">
          <img
            class="h-40 w-72 rounded-xl object-cover"
            :src="link + data?.movie?.thumbnail"
          />
          <div class="mx-3 flex-1">
            <div class="my-3">
              <h2 class="text-xl font-semibold text-[#DDCCAA]">
                {{ data.movie.title?.[$i18n.locale] }}
              </h2>
            </div>
            <div class="my-3 flex">
              <div v-for="genre in data.genres" :key="genre">
                <div
                  class="mr-2 rounded-md bg-[#6C757D] px-2 py-1 text-center text-white"
                >
                  {{ genre?.[$i18n.locale] }}
                </div>
              </div>
            </div>
            <div class="my-3 flex">
              <h2 class="text-xl text-white">Director:</h2>
              <h2 class="ml-2 text-xl text-white">
                {{ data?.movie?.director?.[$i18n.locale] }}
              </h2>
            </div>
          </div>
        </div>

        <div class="py-1">
          <Field
            as="textarea"
            placeholder="Quote in English"
            name="quote_en"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="quote_en" />
          </div>
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            placeholder="ციტატა ქართულ ენაზე"
            name="quote_ka"
            rules="required|georgian_text"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="quote_ka" />
          </div>
        </div>

        <div class="py-1">
          <div class="flex w-full items-center border-2 border-[#6C757D] p-2">
            <IconPhoto />
            <div class="mx-3 flex-1">
              <div class="flex items-center">
                <h2 class="text-xl font-semibold text-white">
                  {{ $t("newsfeed.drag_or_drop_your_image_here_or") }}
                </h2>
                <Field
                  type="file"
                  id="quote_picture"
                  name="quote_picture"
                  class="hidden"
                  accept="image/jpeg, image/png"
                  rules="required"
                  @change="onFileSelected"
                />
                <label
                  for="quote_picture"
                  refs="quote_picture"
                  class="ml-2 cursor-pointer rounded-lg bg-[#9747FF] p-2 text-white"
                >
                  {{ $t("newsfeed.choose_file") }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ErrorMessage class="ml-4 text-orange-600" name="quote_picture" />
        </div>

        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("moviedescription.add_quote") }}
        </button>
      </div>
    </ValidationForm>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import axiosInstance from "@/config/axios/index.js";
import { onBeforeMount, ref } from "vue";
import { useQuoteStore } from "@/stores/quote";

const quoteData = useQuoteStore();
const user = ref([]);

onBeforeMount(() => {
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

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const route = useRoute();
const router = useRouter();

const data = reactive({
  movie: {},
  genres: {},
});

const onSubmit = async (values) => {
  try {
    const formData = new FormData();
    formData.append("quote_en", values.quote_en);
    formData.append("quote_ka", values.quote_ka);
    formData.append("quote_picture", values.quote_picture);
    formData.append("movie_id", data.movie.id);
    formData.append("user_id", user.value.id);
    console.log(formData);
    const response = await axiosInstance.post(`/quote`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    });
    quoteData.quote = response.data;
    router.push({ name: "movie-description", params: { id: data.movie.id } });
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
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
