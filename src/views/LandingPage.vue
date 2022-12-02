<template>
  <div class="bg-[#11101A] h-screen">
    <NavigationBar />
    <div class="bg-[#11101A] py-36">
      <h1 class="text-center text-3xl text-[#DDCCAA]">
        Find any quote in millions of movie lines
      </h1>
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'signup' }"
          class="bg-[#E31221] px-4 py-2 mt-8 rounded-lg text-white"
        >
          <h1 id="begin">Get Started</h1>
        </router-link>
      </div>
    </div>
    <v-modal :open="open" @close="open = false">
      <router-view />
    </v-modal>

    <div class="gap-0 relative w-screen font-bold">
      <img
        class="sticky w-full z-0 top-0"
        src="/src/assets/image1.png"
        alt="pic"
      />
      <div
        class="absolute z-10 top-[10.5%] w-[305px] ml-12 md:w-[760px] md:ml-60"
      >
        <div class="flex">
          <div
            class="w-5 md:w-14 h-0 mt-3 mr-1 md:mt-6 md:mr-3 border-t-2 border-[#FFFFFF]"
          ></div>
          <div>
            <q class="text-white text-xl md:text-5xl">
              You have to leave somethig behind to go forward
            </q>

            <p class="mt-2 md:mt-6 text-[#D9D9D9] text-lg md:text-3xl">
              Interstellar, 2014
            </p>
          </div>
        </div>
      </div>
      <img
        class="sticky w-full z-10 top-0"
        src="/src/assets/image2.png"
        alt="pic"
      />
      <div
        class="absolute z-20 top-[40%] md:top-[45%] ml-12 w-[273px] md:w-[991px] md:ml-60"
      >
        <div class="flex">
          <div
            class="w-5 md:w-14 h-0 mt-3 mr-1 md:mt-6 md:mr-3 border-t-2 border-[#FFFFFF]"
          ></div>
          <div>
            <q class="text-white text-xl md:text-5xl">
              I think were just gonna have to be secretly in love with earch
              other and leave it that
            </q>

            <p class="mt-2 md:mt-6 text-[#D9D9D9] text-lg md:text-3xl">
              The Royal Tenenbaums,2001
            </p>
          </div>
        </div>
      </div>

      <img
        class="sticky w-full z-20 top-0"
        src="/src/assets/image3.png"
        alt="pic"
      />

      <div
        class="absolute z-30 top-[78%] ml-12 w-[297px] md:w-[991px] md:ml-60"
      >
        <div class="flex">
          <div
            class="w-5 md:w-14 h-0 mt-3 mr-1 md:mt-6 md:mr-3 border-t-2 border-[#FFFFFF]"
          ></div>
          <div>
            <q class="text-white text-xl md:text-5xl">
              I think were just gonna have to be secretly in love with earch
              other and leave it that
            </q>

            <p class="m-2 md:mt-6 text-[#D9D9D9] text-lg md:text-3xl">
              The Royal Tenenbaums,2001
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="py-4 px-10 bg-[#11101A]">
      <div class="text-[#DDCCAA]">
        &#169; MOVIE QUOTES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
</script>
