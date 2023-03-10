<template>
  <form-layout>
    <template v-slot:header>
      <div class="text-center text-3xl text-white mx-14 my-6">Edit movie</div>
    </template>
    <ValidationForm class="mt-8" @submit="onSubmit">
      <div class="mx-auto px-4">
        <div class="my-10 rounded-xl bg-[#11101A]">
          <div class="flex items-center mb-6 rounded-md">
            <img
              class="rounded-full w-12 h-12 mr-2 mt-1"
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
            v-model="data.movie.title"
            name="movie_name_en"
            rules="required|alpha"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full placeholder:text-white placeholder:text-lg bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="movie_name_en" />
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="data.movie.title"
            name="movie_name_ka"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="movie_name_ka" />
          </div>
        </div>
        <div class="py-1">
          <div
            @click="toggleGenres"
            class="p-2 flex items-center w-full border-2 h-14 border-[#6C757D]"
          ></div>
          <div class="mx-3 flex-1 absolute -mt-[51px]">
            <div class="flex items-center">
              <div v-for="genre in reactiveSelectedGenres.values" :key="genre">
                <div class="p-2 ml-2 bg-[#6C757D] text-white flex items-center">
                  {{ genre }}

                  <div @click="deleteGenre(genre)" class="p-2 cursor-pointer">
                    <IconCross class="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              v-if="chooseGenres"
              class="absolute w-60 rounded-lg bg-[#11101A] mt-2 h-96 overflow-y-auto border-2 border-gray-500"
            >
              <div v-for="genre in genres.values" :key="genre">
                <div class="py-1 hover:bg-gray-500">
                  <Field
                    @click="selectGenre"
                    class="p-3 rounded-md w-60 text-white bg-[#11101A] cursor-pointer outline-none"
                    type="text"
                    :name="genre.name"
                    :value="genre.name"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="data.movie.director"
            name="director_name_en"
            rules="required|alpha"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
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
            v-model="data.movie.director"
            name="director_name_ka"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
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
            v-model="data.movie.year"
            name="year"
            rules="required|integer"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="year" />
          </div>
        </div>
        <div class="py-1">
          <Field
            v-model="data.movie.budget"
            name="budget"
            rules="required|integer"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="budget" />
          </div>
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            v-model="data.movie.description"
            name="movie_description_en"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
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
            v-model="data.movie.description"
            name="movie_description_ka"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="movie_description_ka"
            />
          </div>
        </div>
        <div class="py-1">
          <div class="p-2 flex items-center w-full border-2 border-[#6C757D]">
            <IconPhoto />
            <div class="mx-3 flex-1">
              <div class="flex items-center">
                <h2 class="text-xl font-semibold text-white">
                  Drag and drop your image here or
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
                  class="p-2 ml-2 bg-[#9747FF] rounded-lg text-white cursor-pointer"
                  >Choose a file</label
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <ErrorMessage class="ml-4 text-orange-600" name="movie_picture" />
        </div>
        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Add movie
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

const router = useRouter();
const route = useRoute();

const genres = reactive({});
const chooseGenres = ref(false);
const selectedGenres = ref([]);
const data = reactive({
  movie: {},
  genres: {},
});

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
    formData.append("movie_name_en", values.movie_name_en);
    formData.append("movie_name_ka", values.movie_name_ka);
    formData.append("director_name_en", values.director_name_en);
    formData.append("director_name_ka", values.director_name_ka);
    formData.append("genre", JSON.stringify(reactiveSelectedGenres.values));
    formData.append("year", values.year);
    formData.append("budget", values.budget);
    formData.append("movie_description_en", values.movie_description_en);
    formData.append("movie_description_ka", values.movie_description_ka);
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
onBeforeMount(() => {
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

onMounted(() => {
  axiosInstance
    .get(`/movie-description/${route.params.id}`)
    .then((response) => {
      data.movie = response.data.movie;
      data.genres = JSON.parse(data.movie.genre);
      user.value = response.data.user;
      reactiveSelectedGenres.values = data.genres;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
