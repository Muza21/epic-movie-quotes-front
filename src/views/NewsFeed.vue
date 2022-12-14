<template>
  <div class="bg-[#222030]">
    <NavigationBar />
    <div class="flex flex-col justify-between">
      <div class="flex">
        <SideBar />
        <div class="w-full">
          <div
            class="mx-auto flex max-w-4xl justify-between rounded-xl md:w-[1000px]"
          >
            <router-link
              :to="{ name: 'new-quote' }"
              class="flex w-52 rounded-lg bg-[#24222F] p-4"
            >
              <IconNewquote />
              <p class="ml-2 text-white">
                {{ $t("newsfeed.write_new_quote") }}
              </p>
            </router-link>
            <div class="flex items-center">
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <IconSearch />
                </div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  v-model="searchValue"
                  @keyup.enter="searchByMovieOrQuote"
                  class="w-[688px] rounded-lg border-b border-[#EFEFEF] bg-[#24222F] py-4 pr-4 pl-12 text-sm text-white placeholder-[#CED4DA]"
                  :placeholder="
                    $t('newsfeed.enter') +
                    ' @ ' +
                    $t('newsfeed.to_search_movies') +
                    ' ' +
                    $t('newsfeed.enter') +
                    ' # ' +
                    $t('newsfeed.to_search_quotes')
                  "
                  required
                />
              </div>
            </div>
          </div>
          <div
            class="mt-52 hidden text-center text-6xl text-white"
            v-if="searchValue && !quotes.values.length"
          >
            <p>
              {{ $t("newsfeed.no_results_found") }}
            </p>
          </div>
          <div v-for="(quote, index) in quotes.values" :key="index">
            <article
              class="my-10 mx-auto max-w-4xl rounded-xl bg-[#11101A] md:w-[1000px]"
            >
              <div class="mb-6 flex items-center rounded-md p-6">
                <img
                  class="mr-2 mt-1 h-12 w-12 rounded-full"
                  :src="quote?.user?.thumbnail"
                />
                <div class="ml-4">
                  <h2 class="text-lg font-semibold text-white">
                    {{ quote?.user?.username }}
                  </h2>
                </div>
              </div>

              <h1 class="mb-10 p-6 text-xl text-white lg:text-4xl">
                {{ quote?.quote?.[$i18n.locale] }}
              </h1>

              <div class="p-6 leading-loose text-white">
                <img :src="link + quote?.thumbnail" alt="post image" />
              </div>

              <div class="flex p-6 text-xl text-white">
                <p class="mx-2">{{ quote?.comments?.length }}</p>
                <IconComment />
                <p class="ml-6 mr-2">{{ quote?.likes?.length }}</p>
                <div
                  @click="likeQuote(quote?.id, index)"
                  class="-mt-1 cursor-pointer p-1"
                >
                  <IconHeart />
                </div>
              </div>

              <div class="max-h-60 overflow-auto">
                <div v-for="comment in quote?.comments" :key="comment">
                  <div class="flex p-6 text-white antialiased">
                    <img
                      class="mr-2 mt-1 h-12 w-12 rounded-full"
                      :src="comment?.user?.thumbnail"
                    />
                    <div>
                      <div class="] px-4 pt-2 pb-2.5">
                        <div
                          class="text-sm font-semibold leading-relaxed text-white"
                        >
                          {{ comment?.user?.username }}
                        </div>
                        <div
                          class="text-normal border-b-2 border-[#EFEFEF] pb-6 leading-snug md:leading-normal"
                        >
                          {{ comment?.body }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ValidationForm @submit="onSubmit">
                <div class="flex p-6 text-white antialiased">
                  <img
                    class="mr-2 mt-1 h-12 w-12 rounded-full"
                    :src="user?.thumbnail"
                  />
                  <div class="w-full">
                    <div class="px-4 pt-2 pb-2.5">
                      <Field
                        class="w-full rounded-md bg-[#24222F] p-4"
                        type="text"
                        name="comment"
                        v-model="quote.writtenComment"
                        @keydown.enter="postComment(quote?.id, index)"
                        :placeholder="$t('newsfeed.write_a_comment')"
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
import { reactive, onMounted, onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useQuoteStore } from "@/stores/quote";

const route = useRoute();
const quotes = reactive({});
const searchValue = ref("");
const quoteData = useQuoteStore();

const link = import.meta.env.VITE_BACKEND_IMAGES_URL;

const user = ref({});
const commentQuoteId = ref("");
const quoteIndex = ref();

watch(() => {
  if (quoteData.quote) {
    return quotes.values.push(quoteData.quote);
  }
});

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
