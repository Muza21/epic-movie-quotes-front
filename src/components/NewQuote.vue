<template>
  <form-layout>
    <template v-slot:header>
      <div class="text-center text-3xl text-white mx-14 my-6">
        Write new quote
      </div>
    </template>
    <ValidationForm class="mt-8">
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
            placeholder="Start create new quote"
            name="quote_en"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            placeholder="ახალი ციტატა"
            name="quote_ka"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
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
                  rules="required"
                  @change="onFileSelected"
                />
                <label
                  for="movie_picture"
                  refs="movie_picture"
                  class="p-2 ml-2 bg-[#9747FF] rounded-lg text-white cursor-pointer"
                >
                  Choose a file
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="py-1" @click="toggleChooseMovie">
          <div class="p-2 flex items-center w-full border-2 border-[#6C757D]">
            <IconCamera />
            <div class="mx-3 flex-1">
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-white">Choose a movie</h2>
                <IconDropdown />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="movie.chooseMovie"
          class="absolute w-full h-[112px] rounded-lg bg-[#6C757D] mt-2"
        >
          <div class="py-1 hover:bg-gray-800">
            <a href="#" class="flex items-center p-3 rounded-md">
              <span class="ml-4 text-white">Movie Name1</span>
            </a>
          </div>
          <div class="py-1 hover:bg-gray-800">
            <a href="#" class="flex items-center p-3 rounded-md">
              <span class="ml-4 text-white">Movie Name2</span>
            </a>
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
import { Form as ValidationForm, Field } from "vee-validate";
// import axiosInstance from "@/config/axios/index.js";

import { reactive } from "vue";

const movie = reactive({
  chooseMovie: false,
});

const toggleChooseMovie = () => {
  movie.chooseMovie = !movie.chooseMovie;
};
</script>
