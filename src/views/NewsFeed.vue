<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div class="w-full">
          <div
            class="flex justify-between max-w-4xl rounded-xl md:w-[1000px] mx-auto"
          >
            <router-link
              :to="{ name: 'new-quote' }"
              class="flex p-4 bg-[#24222F] rounded-lg w-52"
            >
              <IconNewquote />
              <p class="text-white ml-2">Write new quote</p>
            </router-link>
            <div class="flex items-center">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <IconSearch />
                </div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  v-model="searchValue"
                  @keyup.enter="searchByMovieOrQuote"
                  class="bg-[#24222F] w-[688px] py-4 pr-4 pl-12 border-b border-[#EFEFEF] text-white text-sm rounded-lg placeholder-[#CED4DA]"
                  placeholder="Enter @ to search movies, Enter # to search quotes "
                  required
                />
              </div>
            </div>
          </div>
          <div
            class="text-center text-white text-6xl mt-52 hidden"
            v-if="searchValue && !quotes.values.length"
          >
            <p>No results found!</p>
          </div>
          <div v-for="(quote, index) in quotes.values" :key="index">
            <article
              class="max-w-4xl my-10 rounded-xl md:w-[1000px] bg-[#11101A] mx-auto"
            >
              <div class="flex items-center mb-6 p-6 rounded-md">
                <img
                  class="rounded-full w-12 h-12 mr-2 mt-1"
                  :src="quote.user?.thumbnail"
                />
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-white">
                    {{ quote.user?.username }}
                  </h2>
                </div>
              </div>

              <h1 class="text-white text-xl p-6 lg:text-4xl mb-10">
                {{ quote.quote }}
              </h1>

              <div class="text-white p-6 leading-loose">
                <img :src="link + quote?.thumbnail" alt="post image" />
              </div>

              <div class="flex text-xl p-6 text-white">
                <p class="mx-2">{{ quote.comments?.length }}</p>
                <IconComment />
                <p class="ml-6 mr-2">{{ quote.likes?.length }}</p>
                <div
                  @click="likeQuote(quote.id, index)"
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
              <ValidationForm @submit="onSubmit">
                <div class="text-white p-6 antialiased flex">
                  <img
                    class="rounded-full w-12 h-12 mr-2 mt-1"
                    :src="user?.thumbnail"
                  />
                  <div class="w-full">
                    <div class="px-4 pt-2 pb-2.5">
                      <Field
                        class="bg-[#24222F] rounded-md w-full p-4"
                        type="text"
                        name="comment"
                        v-model="quote.writtenComment"
                        @keydown.enter="postComment(quote.id, index)"
                        placeholder="Write a comment"
                      />
                    </div>
                  </div>
                </div>
              </ValidationForm>
            </article>
          </div>
        </div>
      </div>
    </div>
    <v-modal :open="open" @close="open = false">
      <router-view />
    </v-modal>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconNewquote from "@/components/icons/IconNewquote.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { Form as ValidationForm, Field } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { reactive, onMounted, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const quotes = reactive({});
const searchValue = ref("");

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const user = ref({});
const commentQuoteId = ref("");
const quoteIndex = ref();

function postComment(id, index) {
  commentQuoteId.value = id;
  quoteIndex.value = index;
}

function searchByMovieOrQuote() {
  console.log(route.query);
  console.log(searchValue.value);
  axiosInstance
    .post(`/search-newsfeed`, {
      text: searchValue.value,
    })
    .then((response) => {
      quotes.values = response.data;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function likeQuote(id, index) {
  axiosInstance
    .post(`/reaction/${id}`, {
      user_id: user.value.id,
      quote_id: id,
    })
    .then((response) => {
      quotes.values[index].likes = response.data;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

const onSubmit = async (values) => {
  if (values.comment) {
    try {
      const response = await axiosInstance.post(
        `/comment/${commentQuoteId.value}`,
        {
          body: values.comment,
          user_id: user.value.id,
          quote_id: commentQuoteId.value,
        }
      );
      quotes.values[quoteIndex.value].writtenComment = "";
      quotes.values[quoteIndex.value].comments.push(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
};

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

onMounted(() => {
  axiosInstance
    .get(`/quote`)
    .then((response) => {
      quotes.values = response.data.quotes;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
