<template>
  <form-layout>
    <template v-slot:header>
      <div class="text-center text-3xl text-white mx-14 my-6">Add movie</div>
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
            placeholder="Movie name"
            name="movie_name_en"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="movie_name_en" />
          </div>
        </div>
        <div class="py-1">
          <Field
            placeholder="ფილმის სახელი"
            name="movie_name_ka"
            rules="required"
            class="text-white text-lg block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="movie_name_ka" />
          </div>
        </div>
        <div class="py-1">
          <div class="p-2 flex items-center w-full border-2 border-[#6C757D]">
            <div class="mx-3 flex-1">
              <div class="flex items-center">
                <div class="p-2 ml-2 bg-[#6C757D] text-white flex items-center">
                  Genre name <IconCross class="w-3 h-3" />
                </div>
                <!-- <Field name="picture" type="file" class="hidden" /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="py-1">
          <Field
            placeholder="Director"
            name="director_name_en"
            rules="required"
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
            placeholder="რეჟისორი"
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
            as="textarea"
            placeholder="Movie description"
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
            placeholder="ფილმის აღწერა"
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
                  rules="required"
                  @change="onFileSelected"
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
import { useRouter } from "vue-router";

const router = useRouter();

function onFileSelected(e) {
  console.log(e.target.files[0]);
}

const onSubmit = async (values) => {
  try {
    const formData = new FormData();
    formData.append("movie_name_en", values.movie_name_en);
    formData.append("movie_name_ka", values.movie_name_ka);
    formData.append("director_name_en", values.director_name_en);
    formData.append("director_name_ka", values.director_name_ka);
    formData.append("movie_description_en", values.movie_description_en);
    formData.append("movie_description_ka", values.movie_description_ka);
    formData.append("movie_picture", values.movie_picture);
    // values.each(formData, (value, key) => {
    //   formData.append(key, value);
    // });
    console.log(formData);
    console.log(values.movie_picture);
    const response = await axiosInstance.post(
      `/add-movie`,
      formData,
      // {
      //   movie_name_en: values.movie_name_en,
      //   movie_name_ka: values.movie_name_ka,
      //   director_name_en: values.director_name_en,
      //   director_name_ka: values.director_name_ka,
      //   movie_description_en: values.movie_description_en,
      //   movie_description_ka: values.movie_description_ka,
      //   movie_picture: formData,
      // },
      {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }
    );
    router.push({ name: "movielist" });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
