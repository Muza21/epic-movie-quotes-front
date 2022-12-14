<template>
  <form-layout>
    <template v-slot:header>
      <div class="flex w-full items-center justify-between px-10">
        <div @click="deleteQuote()" class="item-center flex cursor-pointer">
          <IconTrash />
          <p class="ml-2 text-[#CED4DA]">
            {{ $t("moviedescription.delete") }}
          </p>
        </div>
        <div class="mx-14 my-6 text-center text-3xl text-white">
          {{ $t("moviedescription.edit_quote") }}
        </div>

        <div @click="routerGoBack" class="cursor-pointer p-1">
          <IconCross />
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

        <div class="py-1">
          <Field
            as="textarea"
            placeholder="Quote on English"
            name="quote_en"
            v-model="quoteEn"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            placeholder="ციტატა ქართულ ენაზე"
            name="quote_ka"
            v-model="quoteKa"
            rules="required"
            class="block w-full rounded-lg border-2 border-[#6C757D] bg-[#11101A] px-3 py-2 text-lg text-white placeholder-white shadow-md"
          />
        </div>

        <div class="relative w-full py-6 leading-loose text-white">
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
            class="absolute top-1/2 left-1/2 h-28 w-32 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          >
            <div
              class="block h-28 w-32 rounded-xl bg-black opacity-70 shadow-xl"
            ></div>
            <div
              class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              <IconPhoto />
              <p class="w-32 text-center text-white">
                {{ $t("moviedescription.change_photo") }}
              </p>
            </div>
          </label>
        </div>

        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("moviedescription.save_changes") }}
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
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useUpdateQuoteStore } from "@/stores/quote";

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const router = useRouter();
const route = useRoute();
const quoteUpdateData = useUpdateQuoteStore();

const quoteEn = ref("");
const quoteKa = ref("");

const url = ref("");

const currentUser = ref({});
const user = ref({});

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
    const response = await axiosInstance.post(`/quote/${data.quote.id}`);
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
    formData.append("quote_en", quoteEn.value);
    formData.append("quote_ka", quoteKa.value);
    formData.append("quote_picture", values.quote_picture);
    formData.append("movie_id", data.movie.id);
    formData.append("user_id", currentUser.value.id);
    formData.append("_method", "PATCH");
    console.log(formData);
    const response = await axiosInstance.post(
      `/quote/${route.params.quoteId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }
    );
    quoteUpdateData.quote = response.data;
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
    .get(`/quote/${route.params.quoteId}`)
    .then((response) => {
      data.quote = response.data.quote;
      data.movie = response.data.movie;
      user.value = response.data.user;
      quoteEn.value = data.quote.quote.en;
      quoteKa.value = data.quote.quote.ka;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

onMounted(() => {
  axiosInstance
    .get(`/current-user`)
    .then((response) => {
      currentUser.value = response.data.user;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
