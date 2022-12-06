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
          <div class="flex justify-between mx-20 mt-5">
            <h2 class="text-white text-xl">My list of movies Total 25</h2>
            <div>
              <router-link
                :to="{ name: 'add-movie' }"
                class="bg-[#E31221] px-4 py-2 rounded-lg text-white"
              >
                <IconAdd class="my-auto mr-3" />Add movie
              </router-link>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 m-20">
              <router-link :to="{ name: 'movie-description' }">
                <div
                  class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
                >
                  <img
                    src="/src/assets/movie1.png"
                    alt="Fiction Product"
                    class="object-cover rounded-tl-md rounded-tr-md"
                  />
                  <div class="my-2">
                    <h3 class="text-xl text-white">Movie title</h3>
                  </div>
                  <div class="flex my-2 text-xl text-white">
                    <p class="mr-2">4</p>
                    <IconChat />
                  </div>
                </div>
              </router-link>

              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie3.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
              </div>
              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie1.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
              </div>
              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie3.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
              </div>
              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie3.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
              </div>
              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie3.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
              </div>
              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie1.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
              </div>
              <div
                class="flex flex-col drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
              >
                <img
                  src="/src/assets/movie1.png"
                  alt="Fiction Product"
                  class="object-cover rounded-tl-md rounded-tr-md"
                />
                <div class="my-2">
                  <h3 class="text-xl text-white">Movie title</h3>
                </div>
                <div class="flex my-2 text-xl text-white">
                  <p class="mr-2">4</p>
                  <IconChat />
                </div>
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
import IconChat from "@/components/icons/IconChat.vue";
</script>
