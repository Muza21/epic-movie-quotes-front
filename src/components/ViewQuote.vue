<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <div class="flex h-screen flex-col overflow-y-auto">
          <div class="flex flex-col justify-between">
            <SideBar />
          </div>
        </div>
        <div class="w-full">
          <article
            class="my-10 mx-auto max-w-4xl rounded-xl bg-[#11101A] md:w-[1000px]"
          >
            <div class="flex w-full items-center justify-between px-10">
              <div class="flex rounded-lg py-4">
                <div @click="routerToEdit" class="mr-5 cursor-pointer p-1">
                  <IconPencil />
                </div>
                <div class="border-r border-[#6C757D]"></div>
                <div @click="deleteQuote" class="ml-5 cursor-pointer p-1">
                  <IconTrash />
                </div>
              </div>
              <div class="mx-14 my-6 text-center text-3xl text-white">
                View quote
              </div>
              <div @click="routerGoBack" class="cursor-pointer p-1">
                <IconCross />
              </div>
            </div>
            <div class="mb-6 flex items-center rounded-md p-6">
              <img
                class="mr-2 mt-1 h-12 w-12 rounded-full"
                :src="user?.thumbnail"
              />
              <div class="ml-4">
                <h2 class="text-lg font-semibold text-white">
                  {{ user?.username }}
                </h2>
              </div>
            </div>
            <div
              class="mx-8 mb-4 border-2 border-[#6C757D] p-6 text-xl text-white lg:text-2xl"
            >
              {{ quote?.quote }}
            </div>
            <div
              class="mx-8 mb-4 border-2 border-[#6C757D] p-6 text-xl text-white lg:text-2xl"
            >
              {{ quote?.quote }}
            </div>

            <div class="p-6 leading-loose text-white">
              <img :src="link + quote?.thumbnail" alt="post image" />
            </div>

            <div class="flex p-6 text-xl text-white">
              <p class="mx-2">{{ commentsCount }}</p>
              <IconComment />
              <p class="mx-2">{{ likesCount }}</p>
              <div
                @click="likeQuote(quote.id)"
                class="-mt-1 cursor-pointer p-1"
              >
                <IconHeart />
              </div>
            </div>
            <div class="max-h-60 overflow-auto">
              <div v-for="comment in quote.comments" :key="comment">
                <div class="flex p-6 text-white antialiased">
                  <img
                    class="mr-2 mt-1 h-12 w-12 rounded-full"
                    :src="comment.user.thumbnail"
                  />
                  <div>
                    <div class="] px-4 pt-2 pb-2.5">
                      <div
                        class="text-sm font-semibold leading-relaxed text-white"
                      >
                        {{ comment.user.username }}
                      </div>
                      <div
                        class="text-normal border-b-2 border-[#EFEFEF] pb-6 leading-snug md:leading-normal"
                      >
                        {{ comment.body }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex p-6 text-white antialiased">
              <img
                class="mr-2 mt-1 h-12 w-12 rounded-full"
                :src="currentUser.thumbnail"
              />
              <div class="w-full">
                <div class="px-4 pt-2 pb-2.5">
                  <input
                    class="w-full rounded-md bg-[#24222F] p-4"
                    type="text"
                    name="comment"
                    v-model="writtenComment"
                    @keyup.enter="postComment"
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
import { onBeforeMount, ref } from "vue";

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const router = useRouter();
const route = useRoute();

const quote = ref({});
const movie = ref({});
const user = ref({});
const currentUser = ref({});
const commentsCount = ref();
const likesCount = ref();

const writtenComment = ref("");

function likeQuote(id) {
  axiosInstance
    .post(`/reaction/${id}`, {
      user_id: user.value.id,
      quote_id: id,
    })
    .then((response) => {
      likesCount.value = response.data.length;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function postComment() {
  axiosInstance
    .post(`/comment/${quote.value.id}`, {
      body: writtenComment.value,
      user_id: currentUser.value.id,
      quote_id: quote.value.id,
    })
    .then((response) => {
      writtenComment.value = "";
      quote.value.comments.push(response.data);
      commentsCount.value = quote.value.comments.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

const routerToEdit = () => {
  router.push({
    name: "edit-quote",
    params: { id: quote.value.movie_id, quoteId: quote.value.id },
  });
};

const routerGoBack = () => {
  router.push({
    name: "movie-description",
    params: { id: quote.value.movie_id },
  });
};

const deleteQuote = async () => {
  try {
    const response = await axiosInstance.post(`/quote/${quote.value.id}`);
    router.push({
      name: "movie-description",
      params: { id: quote.value.movie_id },
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
      quote.value = response.data.quote;
      movie.value = response.data.movie;
      user.value = response.data.user;
      currentUser.value = response.data.currentUser;
      commentsCount.value = response.data.quote.comments.length;
      likesCount.value = response.data.quote.likes.length;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
