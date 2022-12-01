<template>
  <NavigationBar />
  <div class="bg-[#11101A] py-36">
    <h1 class="text-center text-3xl text-[#DDCCAA]">
      Find any quote in millions of movie lines
    </h1>
    <div class="flex items-center justify-center">
      <router-link
        :to="{ name: 'signup' }"
        class="bg-[#E31221] px-4 py-2 rounded-lg text-white"
      >
        <h1 id="begin">Get Started</h1>
      </router-link>
    </div>
  </div>
  <v-modal :open="open" @close="open = false">
    <router-view />
  </v-modal>
  <!-- <div>
    <div class="relative">
      <img src="/src/assets/image1.png" alt="pic" />
      <div class="absolute text-white top-[50%] -translate-y-2/3">
        <q>You have to leave somethig behind to go forward</q>
        <p>Interstellar, 2014</p>
      </div>
    </div>
    <div>
      <img src="/src/assets/image2.png" alt="pic" />
      <div>
        <q
          >I think we’re just gonna have to be secretly in love with earch other
          and leave it that</q
        >
        <p>The Royal Tenenbaums,2001</p>
      </div>
    </div>
    <div>
      <img src="/src/assets/image3.png" alt="pic" />
      <div>
        <q
          >I think we’re just gonna have to be secretly in love with earch other
          and leave it that</q
        >
        <p>The Royal Tenenbaums,2001</p>
      </div>
    </div>

    <div>
      <q
        >I think we’re just gonna have to be secretly in love with earch other
        and leave it that</q
      >
      <p>Interstellar, 2014</p>
    </div>
  </div> -->
  <div class="gap-0 relative">
    <img
      class="sticky w-full z-0 top-0"
      src="/src/assets/image1.png"
      alt="pic"
    />
    <div class="absolute z-10 top-[10.5%] w-[760px] ml-60">
      <div class="flex">
        <div class="w-14 h-0 mt-6 mr-3 border-t-2 border-[#FFFFFF]"></div>
        <div>
          <q class="text-white text-5xl">
            You have to leave somethig behind to go forward
          </q>

          <p class="mt-6 text-[#D9D9D9] text-3xl">Interstellar, 2014</p>
        </div>
      </div>
    </div>
    <img
      class="sticky w-full z-10 top-0"
      src="/src/assets/image2.png"
      alt="pic"
    />
    <div class="absolute z-20 top-[45%] w-[760px] ml-60">
      <div class="flex">
        <div class="w-14 h-0 mt-6 mr-3 border-t-2 border-[#FFFFFF]"></div>
        <div>
          <q class="text-white text-5xl">
            I think were just gonna have to be secretly in love with earch other
            and leave it that
          </q>

          <p class="mt-6 text-[#D9D9D9] text-3xl">The Royal Tenenbaums,2001</p>
        </div>
      </div>
    </div>

    <img
      class="sticky w-full z-20 top-0"
      src="/src/assets/image3.png"
      alt="pic"
    />

    <div class="absolute z-30 top-[78%] w-[760px] ml-60">
      <div class="flex">
        <div class="w-14 h-0 mt-6 mr-3 border-t-2 border-[#FFFFFF]"></div>
        <div>
          <q class="text-white text-5xl">
            I think were just gonna have to be secretly in love with earch other
            and leave it that
          </q>

          <p class="mt-6 text-[#D9D9D9] text-3xl">The Royal Tenenbaums,2001</p>
        </div>
      </div>
    </div>
  </div>
  <footer class="py-4 px-10 bg-[#11101A]">
    <div class="text-[#DDCCAA]">&#169; MOVIE QUOTES. ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
</script>
