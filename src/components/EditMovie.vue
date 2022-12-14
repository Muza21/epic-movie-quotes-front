<template>
  <form-layout>
    <template v-slot:header>
      <div class="mx-14 my-6 text-center text-3xl text-white">
        {{ $t("moviedescription.edit_movie") }}
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
            v-model="movieNameEn"
            placeholder="Movie name"
            name="movie_name_en"
            rules="required|alpha"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md placeholder:text-lg placeholder:text-white"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="movie_name_en" />
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="movieNameKa"
            placeholder="ფილმის სახელი"
            name="movie_name_ka"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="movie_name_ka" />
          </div>
        </div>
        <div class="py-1">
          <div
            @click="toggleGenres"
            class="flex h-14 w-full items-center border-2 border-[#6C757D] p-2"
          ></div>
          <div class="absolute mx-3 -mt-[51px] flex-1">
            <div class="flex items-center">
              <div
                v-if="!reactiveSelectedGenres?.values?.length"
                class="py-2 text-lg text-white"
              >
                {{ $t("movielist.genre") }}
              </div>
              <div v-for="genre in reactiveSelectedGenres.values" :key="genre">
                <div class="ml-2 flex items-center bg-[#6C757D] p-2 text-white">
                  {{ genre }}

                  <div @click="deleteGenre(genre)" class="cursor-pointer p-2">
                    <IconCross class="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              v-if="chooseGenres"
              class="absolute mt-2 h-96 w-60 overflow-y-auto rounded-lg border-2 border-gray-500 bg-[#11101A]"
            >
              <div v-for="genre in genres.values" :key="genre">
                <div class="py-1 hover:bg-gray-500">
                  <Field
                    @click="selectGenre"
                    class="w-60 cursor-pointer rounded-md bg-[#11101A] p-3 text-white outline-none"
                    type="text"
                    :name="genre.name.en"
                    :value="genre.name.en"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="directorEn"
            name="director_name_en"
            placeholder="Director"
            rules="required|alpha"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="director_name_en"
            />
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="directorKa"
            name="director_name_ka"
            placeholder="რეჟისორი"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="director_name_ka"
            />
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="movie.year"
            name="year"
            :placeholder="$t('movielist.year')"
            rules="required|integer"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="year" />
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="movie.budget"
            name="budget"
            :placeholder="$t('movielist.budget')"
            rules="required|integer"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="budget" />
          </div>
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            v-model="descriptionEn"
            placeholder="Movie description"
            name="movie_description_en"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="movie_description_en"
            />
          </div>
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            v-model="descriptionKa"
            placeholder="ფილმის აღწერა"
            name="movie_description_ka"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="movie_description_ka"
            />
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
                  id="movie_picture"
                  name="movie_picture"
                  class="hidden"
                  accept="image/jpeg, image/png"
                />
                <label
                  for="movie_picture"
                  refs="movie_picture"
                  class="ml-2 cursor-pointer rounded-lg bg-[#9747FF] p-2 text-white"
                >
                  {{ $t("newsfeed.choose_file") }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ErrorMessage class="ml-4 text-orange-600" name="movie_picture" />
        </div>
        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("movielist.add_movie") }}
        </button>
      </div>
    </ValidationForm>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import IconCross from "@/components/icons/IconCross.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { useRouter, useRoute } from "vue-router";
import { onMounted, onBeforeMount, ref, reactive } from "vue";

const movieNameEn = ref("");
const movieNameKa = ref("");
const directorEn = ref("");
const directorKa = ref("");
const descriptionEn = ref("");
const descriptionKa = ref("");

const router = useRouter();
const route = useRoute();

const genres = reactive({});
const chooseGenres = ref(false);
const selectedGenres = ref([]);
const data = reactive({
  genres: {},
});
const movie = ref({});

const user = ref({});

const reactiveSelectedGenres = reactive({});

const toggleGenres = () => {
  chooseGenres.value = !chooseGenres.value;
};

const selectGenre = (e) => {
  if (selectedGenres.value.indexOf(e.target.name) === -1) {
    selectedGenres.value.push(e.target.name);
  }
  chooseGenres.value = false;
  reactiveSelectedGenres.values = selectedGenres.value;
};

const deleteGenre = (genre) => {
  selectedGenres.value.splice(selectedGenres.value.indexOf(genre), 1);
  reactiveSelectedGenres.values = selectedGenres.value;
};

const onSubmit = async (values) => {
  try {
    const formData = new FormData();
    formData.append("movie_name_en", movieNameEn.value);
    formData.append("movie_name_ka", movieNameKa.value);
    formData.append("director_name_en", directorEn.value);
    formData.append("director_name_ka", directorKa.value);
    formData.append("genre", JSON.stringify(reactiveSelectedGenres.values));
    formData.append("year", values.year);
    formData.append("budget", values.budget);
    formData.append("movie_description_en", descriptionEn.value);
    formData.append("movie_description_ka", descriptionKa.value);
    formData.append("movie_picture", values.movie_picture);
    formData.append("_method", "PATCH");

    const response = await axiosInstance.post(
      `/movie/${route.params.id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }
    );
    router.push({ name: "movie-description", params: { id: route.params.id } });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  axiosInstance
    .get(`/genres`)
    .then((response) => {
      genres.values = response.data.genres;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

onBeforeMount(() => {
  axiosInstance
    .get(`/movie/${route.params.id}`)
    .then((response) => {
      movie.value = response.data.movie;
      data.genres = JSON.parse(response.data.movie.genre);
      user.value = response.data.user;
      reactiveSelectedGenres.values = data.genres;
      movieNameEn.value = movie.value.title.en;
      movieNameKa.value = movie.value.title.ka;
      directorEn.value = movie.value.director.en;
      directorKa.value = movie.value.director.ka;
      descriptionEn.value = movie.value.description.en;
      descriptionKa.value = movie.value.description.ka;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
