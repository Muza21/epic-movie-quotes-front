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
            class="max-w-4xl my-10 rounded-lg md:w-[1000px] bg-[#11101A] mx-auto"
          >
            <div class="flex items-center mb-6 p-4 rounded-md">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                src="/src/assets/ProfilePic.jpg"
              />
              <div class="ml-4">
                <h2 class="text-lg font-semibold text-white">Nino Tabagari</h2>
              </div>
            </div>

            <h1 class="text-white text-xl p-4 lg:text-4xl mb-10">
              Follow your dreem movie billy elliot
            </h1>

            <div class="text-white p-4 leading-loose">
              <img src="/src/assets/postIMg.png" alt="post image" />
            </div>

            <div class="flex text-xl p4 text-white">
              <p class="mx-2">3</p>
              <IconComment />
              <p class="mx-2">10</p>
              <IconHeart />
            </div>
            <!-- component -->

            <div class="text-white p-4 antialiased flex">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                src="/src/assets/ProfilePic.jpg"
              />
              <div>
                <div class="px-4 pt-2 pb-2.5">
                  <div class="font-semibold text-white text-sm leading-relaxed">
                    Nino Tabagari
                  </div>
                  <div class="text-normal leading-snug md:leading-normal">
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
          </article>
          <article
            class="max-w-4xl my-10 rounded-lg md:w-[1000px] bg-[#11101A] mx-auto"
          >
            <div class="flex items-center mb-6 p-4 rounded-md">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                src="/src/assets/ProfilePic.jpg"
              />
              <div class="ml-4">
                <h2 class="text-lg font-semibold text-white">Nino Tabagari</h2>
              </div>
            </div>

            <h1 class="text-white text-xl p-4 lg:text-4xl mb-10">
              Follow your dreem movie billy elliot
            </h1>

            <div class="text-white p-4 leading-loose">
              <img src="/src/assets/postIMg.png" alt="post image" />
            </div>

            <div class="flex text-xl p4 text-white">
              <p class="mx-2">3</p>
              <IconComment />
              <p class="mx-2">10</p>
              <IconHeart />
            </div>
            <!-- component -->

            <div class="text-white p-4 antialiased flex">
              <img
                class="rounded-full w-12 h-12 mr-2 mt-1"
                src="/src/assets/ProfilePic.jpg"
              />
              <div>
                <div class="px-4 pt-2 pb-2.5">
                  <div class="font-semibold text-white text-sm leading-relaxed">
                    Nino Tabagari
                  </div>
                  <div class="text-normal leading-snug md:leading-normal">
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
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import IconHeart from "../components/icons/IconHeart.vue";
import IconComment from "../components/icons/IconComment.vue";
</script>
