<template>
  <form-layout>
    <template v-slot:header>
      <div class="w-full px-10">
        <div class="text-center text-3xl text-white mx-14 my-6">Add quote</div>
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

        <div class="mb-3 flex items-center w-full">
          <img
            class="w-72 h-40 object-cover rounded-xl"
            :src="link + data.movie.thumbnail"
          />
          <div class="mx-3 flex-1">
            <div class="my-3">
              <h2 class="text-xl font-semibold text-[#DDCCAA]">
                {{ data.movie.title }}
              </h2>
            </div>
            <div class="my-3 flex">
              <div v-for="genre in data.genres" :key="genre">
                <div
                  class="px-2 py-1 text-white bg-[#6C757D] text-center rounded-md mr-2"
                >
                  {{ genre }}
                </div>
              </div>
            </div>
            <div class="my-3 flex">
              <h2 class="text-xl text-white">Director:</h2>
              <h2 class="ml-2 text-xl text-white">{{ data.movie.director }}</h2>
            </div>
          </div>
        </div>

        <div class="py-1">
          <Field
            as="textarea"
            placeholder="Quote in English"
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
            placeholder="ციტატა ქართულ ენაზე"
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
                  @change="onFileSelected"
                />
                <label
                  for="quote_picture"
                  refs="quote_picture"
                  class="p-2 ml-2 bg-[#9747FF] rounded-lg text-white cursor-pointer"
                  >Choose a file</label
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <ErrorMessage class="ml-4 text-orange-600" name="quote_picture" />
        </div>

        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Add Quote
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
    formData.append("movie_title", data.movie.title);
    formData.append("user_id", user.value.id);
    console.log(formData);
    const response = await axiosInstance.post(`/quote`, formData, {
      headers: {
        "Content-Type": "multipart/form-data;",
      },
    });
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
