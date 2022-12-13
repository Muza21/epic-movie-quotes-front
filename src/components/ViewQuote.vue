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
              {{ quote?.quote }}
            </div>
            <div
              class="text-white border-2 border-[#6C757D] text-xl p-6 lg:text-2xl mb-4 mx-8"
            >
              {{ quote?.quote }}
            </div>

            <div class="text-white p-6 leading-loose">
              <img :src="link + quote?.thumbnail" alt="post image" />
            </div>

            <div class="flex text-xl p-6 text-white">
              <p class="mx-2">{{ commentsCount }}</p>
              <IconComment />
              <p class="mx-2">{{ likesCount }}</p>
              <div
                @click="likeQuote(quote.id)"
                class="p-1 cursor-pointer -mt-1"
              >
                <IconHeart />
              </div>
            </div>
            <div class="max-h-60 overflow-auto">
              <div v-for="comment in quote.comments" :key="comment">
                <div class="text-white p-6 antialiased flex">
                  <img
                    class="rounded-full w-12 h-12 mr-2 mt-1"
                    :src="comment.user.thumbnail"
                  />
                  <div>
                    <div class="px-4 pt-2 pb-2.5 ]">
                      <div
                        class="font-semibold text-white text-sm leading-relaxed"
                      >
                        {{ comment.user.username }}
                      </div>
                      <div
                        class="text-normal leading-snug md:leading-normal pb-6 border-b-2 border-[#EFEFEF]"
                      >
                        {{ comment.body }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-white p-6 antialiased flex">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                :src="currentUser.thumbnail"
              />
              <div class="w-full">
                <div class="px-4 pt-2 pb-2.5">
                  <input
                    class="bg-[#24222F] rounded-md w-full p-4"
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
