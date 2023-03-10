<template>
  <form-layout>
    <template v-slot:header>
      <div class="text-center text-3xl text-white mx-14 my-6">
        Write new quote
      </div>
      <div
        @click="routerGoBack"
        class="p-1 cursor-pointer absolute top-0 right-0 mt-8 mr-8"
      >
        <IconCross />
      </div>
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
            as="textarea"
            placeholder="Start create new quote"
            name="quote_en"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] focus:outline-none"
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
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="quote_ka" />
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
                  id="quote_picture"
                  name="quote_picture"
                  class="hidden"
                  accept="image/jpeg, image/png"
                  rules="required"
                />
                <label
                  for="quote_picture"
                  refs="quote_picture"
                  class="p-2 ml-2 bg-[#9747FF] rounded-lg text-white cursor-pointer"
                >
                  Choose a file
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ErrorMessage class="ml-4 text-orange-600" name="quote_picture" />
        </div>
        <div class="py-1 cursor-pointer" @click="toggleChooseMovie">
          <div class="p-2 flex items-center w-full border-2 border-[#6C757D]">
            <IconCamera />
            <div class="mx-3 flex-1">
              <div class="flex items-center justify-between">
                <h2
                  v-if="!selectedMovie"
                  class="text-white text-xl font-semibold"
                >
                  Choose a movie
                </h2>
                <h2
                  v-if="selectedMovie"
                  class="text-white text-xl font-semibold"
                >
                  {{ selectedMovie }}
                </h2>

                <IconDropdown />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="chooseMovie"
          class="absolute w-96 h-[112px] rounded-lg bg-[#11101A] mt-2"
        >
          <div v-for="movie in data.movies" :key="movie">
            <div class="py-1 hover:bg-gray-500">
              <Field
                @click="selectMovie"
                class="p-3 rounded-md w-96 text-white bg-[#11101A] cursor-pointer outline-none"
                type="text"
                :name="movie.title"
                :value="movie.title"
                readonly
              />
            </div>
          </div>
        </div>
        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Post
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

const toggleChooseMovie = () => {
  chooseMovie.value = !chooseMovie.value;
};
const data = reactive({
  movies: {},
});

const user = ref({});

const selectMovie = (e) => {
  chooseMovie.value = false;
  selectedMovie.value = e.target.name;
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
    formData.append("movie_title", selectedMovie.value);
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
    .get(`/movielist`)
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
