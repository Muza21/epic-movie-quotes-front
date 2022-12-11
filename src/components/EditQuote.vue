<template>
  <form-layout>
    <template v-slot:header>
      <div class="flex items-center w-full justify-between px-10">
        <div @click="deleteQuote()" class="flex item-center cursor-pointer">
          <IconTrash />
          <p class="text-[#CED4DA] ml-2">Delete</p>
        </div>
        <div class="text-center text-3xl text-white mx-14 my-6">Edit quote</div>
        <!-- <router-link
          :to="{ name: 'movie-description', params: { id: data.movie.id } }"
        > -->
        <div @click="routerGoBack" class="p-1 cursor-pointer">
          <IconCross />
        </div>
        <!-- </router-link> -->
      </div>
    </template>
    <ValidationForm class="mt-8" @submit="onSubmit">
      <div class="mx-auto px-4">
        <div class="my-10 rounded-xl bg-[#11101A]">
          <div class="flex items-center mb-6 rounded-md">
            <img
              class="rounded-full w-12 h-12 mr-2 mt-1"
              src="/src/assets/ProfilePic.jpg"
            />
            <div>
              <h2 class="text-lg font-semibold text-white">Nino Tabagari</h2>
            </div>
          </div>
        </div>

        <div class="py-1">
          <Field
            as="textarea"
            placeholder="Quote on English"
            name="quote_en"
            v-model="data.quote.quote"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            placeholder="ციტატა ქართულ ენაზე"
            name="quote_ka"
            v-model="data.quote.quote"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
        </div>

        <div class="text-white w-full relative py-6 leading-loose">
          <img
            v-if="!url"
            class="relative mx-auto block"
            :src="link + data.quote.thumbnail"
            alt="post image"
          />
          <img
            v-if="url"
            class="relative mx-auto block"
            :src="url"
            alt="post image"
          />
          <Field
            type="file"
            id="quote_picture"
            name="quote_picture"
            class="hidden"
            accept="image/jpeg, image/png"
            @change="onImageChange"
          />
          <label
            for="quote_picture"
            refs="quote_picture"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-28"
          >
            <div
              class="bg-black w-32 h-28 opacity-70 rounded-xl block shadow-xl"
            ></div>
            <div
              class="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <IconPhoto />
              <p class="text-white w-32 text-center">Change photo</p>
            </div>
          </label>
        </div>

        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Save Changes
        </button>
      </div>
    </ValidationForm>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import IconCross from "@/components/icons/IconCross.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import { Form as ValidationForm, Field } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount, reactive, ref } from "vue";

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const router = useRouter();
const route = useRoute();

const url = ref("");

const data = reactive({
  quote: {},
  movie: {},
});

const onImageChange = (e) => {
  url.value = URL.createObjectURL(e.target.files[0]);
};

const routerGoBack = () => {
  router.push({
    name: "movie-description",
    params: { id: data.quote.movie_id },
  });
};

const deleteQuote = async () => {
  try {
    const response = await axiosInstance.post(`/delete-quote/${data.quote.id}`);
    router.push({
      name: "movie-description",
      params: { id: data.quote.movie_id },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

const onSubmit = async (values) => {
  try {
    const formData = new FormData();
    formData.append("quote_en", values.quote_en);
    formData.append("quote_ka", values.quote_ka);
    formData.append("quote_picture", values.quote_picture);
    formData.append("movie_title", data.movie.title);
    formData.append("_method", "PATCH");
    console.log(formData);
    const response = await axiosInstance.post(
      `/edit-quote/${route.params.quoteId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }
    );
    router.push({
      name: "movie-description",
      params: { id: data.quote.movie_id },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

onBeforeMount(() => {
  axiosInstance
    .get(`/load-quote/${route.params.quoteId}`)
    .then((response) => {
      data.quote = response.data.quote;
      data.movie = response.data.movie;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
