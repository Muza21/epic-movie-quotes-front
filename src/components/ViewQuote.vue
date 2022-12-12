<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <div class="flex flex-col h-screen overflow-y-auto">
          <div class="flex flex-col justify-between">
            <SideBar />
          </div>
        </div>
        <div class="w-full">
          <article
            class="max-w-4xl my-10 rounded-xl md:w-[1000px] bg-[#11101A] mx-auto"
          >
            <div class="flex items-center w-full justify-between px-10">
              <div class="flex py-4 rounded-lg">
                <div @click="routerToEdit" class="mr-5 p-1 cursor-pointer">
                  <IconPencil />
                </div>
                <div class="border-r border-[#6C757D]"></div>
                <div @click="deleteQuote" class="p-1 ml-5 cursor-pointer">
                  <IconTrash />
                </div>
              </div>
              <div class="text-center text-3xl text-white mx-14 my-6">
                View quote
              </div>
              <div @click="routerGoBack" class="p-1 cursor-pointer">
                <IconCross />
              </div>
            </div>
            <div class="flex items-center mb-6 p-6 rounded-md">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                :src="user?.thumbnail"
              />
              <div class="ml-4">
                <h2 class="text-lg font-semibold text-white">
                  {{ user?.username }}
                </h2>
              </div>
            </div>
            <div
              class="text-white border-2 border-[#6C757D] text-xl p-6 lg:text-2xl mb-4 mx-8"
            >
              {{ data.quote.quote }}
            </div>
            <div
              class="text-white border-2 border-[#6C757D] text-xl p-6 lg:text-2xl mb-4 mx-8"
            >
              {{ data.quote.quote }}
            </div>

            <div class="text-white p-6 leading-loose">
              <img :src="link + data.quote?.thumbnail" alt="post image" />
            </div>

            <div class="flex text-xl p-6 text-white">
              <p class="mx-2">3</p>
              <IconComment />
              <p class="mx-2">10</p>
              <IconHeart />
            </div>

            <div class="text-white p-6 antialiased flex">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                src="/src/assets/ProfilePic.jpg"
              />
              <div>
                <div class="px-4 pt-2 pb-2.5 ]">
                  <div class="font-semibold text-white text-sm leading-relaxed">
                    Nino Tabagari
                  </div>
                  <div
                    class="text-normal leading-snug md:leading-normal pb-6 border-b-2 border-[#EFEFEF]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>

            <div class="text-white p-6 antialiased flex">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                src="/src/assets/ProfilePic.jpg"
              />
              <div class="w-full">
                <div class="px-4 pt-2 pb-2.5">
                  <input
                    class="bg-[#24222F] rounded-md w-full p-4"
                    type="text"
                    placeholder="Write a comment"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconCross from "@/components/icons/IconCross.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import axiosInstance from "@/config/axios/index.js";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount, reactive, ref } from "vue";

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const router = useRouter();
const route = useRoute();

const user = ref({});

const data = reactive({
  quote: {},
  movie: {},
});

const routerToEdit = () => {
  router.push({
    name: "edit-quote",
    params: { id: data.quote.movie_id, quoteId: data.quote.id },
  });
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

onBeforeMount(() => {
  axiosInstance
    .get(`/load-quote/${route.params.quoteId}`)
    .then((response) => {
      data.quote = response.data.quote;
      data.movie = response.data.movie;
      user.value = response.data.user;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
