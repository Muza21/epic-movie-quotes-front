<template>
  <form-layout>
    <template v-slot:header>
      <div class="mx-14 my-6 text-center text-3xl text-white">
        {{ $t("newsfeed.write_new_quote") }}
      </div>
      <div
        @click="routerGoBack"
        class="absolute top-0 right-0 mt-8 mr-8 cursor-pointer p-1"
      >
        <IconCross />
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
        <div class="py-1">
          <Field
            as="textarea"
            placeholder="Start create new quote"
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
            placeholder="ახალი ციტატა"
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
        <div class="cursor-pointer py-1" @click="toggleChooseMovie">
          <div class="flex w-full items-center border-2 border-[#6C757D] p-2">
            <IconCamera />
            <div class="mx-3 flex-1">
              <div class="flex items-center justify-between">
                <h2
                  v-if="!selectedMovie"
                  class="text-xl font-semibold text-white"
                >
                  {{ $t("newsfeed.choose_movie") }}
                </h2>
                <h2
                  v-if="selectedMovie"
                  class="text-xl font-semibold text-white"
                >
                  {{ selectedMovie?.[$i18n.locale] }}
                </h2>

                <IconDropdown />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="chooseMovie"
          class="absolute mt-2 h-[112px] w-96 rounded-lg bg-[#11101A]"
        >
          <div v-for="movie in data.movies" :key="movie">
            <div class="py-1 hover:bg-gray-500">
              <Field
                @click="selectMovie(movie?.title, movie?.id)"
                class="w-96 cursor-pointer rounded-md bg-[#11101A] p-3 text-white outline-none"
                type="text"
                :name="movie?.title?.[$i18n.locale]"
                :value="movie?.title?.[$i18n.locale]"
                readonly
              />
            </div>
          </div>
        </div>
        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("newsfeed.post") }}
        </button>
      </div>
    </ValidationForm>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import IconCamera from "@/components/icons/IconCamera.vue";
import IconDropdown from "@/components/icons/IconDropdown.vue";
import IconCross from "@/components/icons/IconCross.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const chooseMovie = ref(false);
const selectedMovie = ref("");
const movieId = ref();
const toggleChooseMovie = () => {
  chooseMovie.value = !chooseMovie.value;
};
const data = reactive({
  movies: {},
});

const user = ref({});

const selectMovie = (movie, id) => {
  chooseMovie.value = false;
  selectedMovie.value = movie;
  movieId.value = id;
};

const routerGoBack = () => {
  router.push({
    name: "newsfeed",
  });
};

const onSubmit = async (values) => {
  try {
    const formData = new FormData();
    formData.append("quote_en", values.quote_en);
    formData.append("quote_ka", values.quote_ka);
    formData.append("quote_picture", values.quote_picture);
    formData.append("movie_id", movieId.value);
    formData.append("user_id", user.value.id);
    console.log(formData);
    const response = await axiosInstance.post(`/quote`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    });
    router.push({ name: "newsfeed" });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  axiosInstance
    .get(`/movie`)
    .then((response) => {
      data.movies = response.data.movies;
      user.value = response.data.user;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
