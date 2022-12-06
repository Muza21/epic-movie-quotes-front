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
          <h1 class="text-white text-2xl p-6 mx-20">Movie description</h1>

          <div class="grid grid-cols-2 my-10 rounded-xl md:w-full px-20">
            <div class="text-white p-6 leading-loose">
              <img src="/src/assets/postIMg.png" alt="post image" />
            </div>
            <div>
              <div
                class="flex items-center justify-between mb-6 px-6 pt-6 rounded-md"
              >
                <h2 class="text-4xl text-[#DDCCAA]">
                  Dynamic Movie title with year
                </h2>
                <div class="ml-4 flex py-4 px-8 rounded-lg bg-[#24222F]">
                  <IconPencil class="mr-5" />
                  <div class="border-r border-[#6C757D]"></div>
                  <IconTrash class="ml-5" />
                </div>
              </div>

              <div class="my-3 px-6 flex">
                <div
                  class="px-2 py-1 text-white bg-[#6C757D] text-center rounded-md mr-2"
                >
                  dynamic genre
                </div>
              </div>

              <div class="my-3 px-6 flex">
                <h2 class="text-xl text-white">Director:</h2>
                <h2 class="ml-2 text-xl text-white">Dynamic director name</h2>
              </div>

              <div class="my-3 px-6 flex">
                <h2 class="text-xl text-white">Budget:</h2>
                <h2 class="ml-2 text-xl text-white">2000000</h2>
              </div>
              <p class="my-3 px-6 text-white text-lg">
                In a nursing home, resident Duke reads a romance story to an old
                woman who has senile dementia with memory loss. In the late
                1930s, wealthy seventeen year-old Allie Hamilton is spending
                summer vacation in Seabrook. Local worker Noah Calhoun meets
                Allie at a carnival
              </p>
              <p class="my-3 px-6 text-white text-lg">
                In a nursing home, resident Duke reads a romance story to an old
                woman who has senile dementia with memory loss.
              </p>
            </div>

            <div class="flex items-center m-6">
              <h3 class="text-white text-lg pr-4 border-r border-[#6C757D]">
                quotes total 1
              </h3>

              <router-link
                :to="{ name: 'add-quote' }"
                class="mx-4 bg-[#E31221] px-4 py-2 rounded-lg text-white"
              >
                Add quote
              </router-link>
            </div>

            <div class="bg-[#11101A] rounded-lg col-start-1 m-6">
              <div class="flex">
                <div class="p-6 mb-3 flex items-center w-full">
                  <img
                    class="w-50 w-40 object-cover rounded-lg"
                    src="/src/assets/ProfilePic.jpg"
                  />
                  <div class="mx-6">
                    <q class="text-xl text-center font-semibold text-white"
                      >You don't understand! I coulda had class. I coulda been a
                      contender. I could've been somebody, ....
                    </q>
                  </div>
                </div>
                <div class="p-6">
                  <button class="py-2" @click="toggleCrudOperationView">
                    <IconThreedots />
                  </button>
                  <QuoteCrud v-if="view.crudView" />
                </div>
              </div>
              <div
                class="flex text-xl py-6 mx-6 border-t border-[#EFEFEF] text-white"
              >
                <p class="mx-2">10</p>
                <IconComment />
                <p class="mx-2">10</p>
                <IconHeart />
              </div>
            </div>
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
import IconThreedots from "@/components/icons/IconThreedots.vue";

import { reactive } from "vue";
import QuoteCrud from "@/components/QuoteCrud.vue";

const view = reactive({
  crudView: false,
});

function toggleCrudOperationView() {
  view.crudView = !view.crudView;
}
</script>
