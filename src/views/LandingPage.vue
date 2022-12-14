<template>
  <div class="h-screen bg-[#11101A]">
    <NavigationBar />
    <div class="bg-[#11101A] py-36">
      <h1 class="text-center text-3xl text-[#DDCCAA]">
        {{ $t("landing.find_any_quote_in_millions_of_movie_lines") }}
      </h1>
      <div class="flex items-center justify-center">
        <router-link
          :to="{ name: 'signup' }"
          class="mt-8 rounded-lg bg-[#E31221] px-4 py-2 text-white"
        >
          <h1 id="begin">{{ $t("landing.get_started") }}</h1>
        </router-link>
      </div>
    </div>
    <v-modal :open="open" @close="open = false">
      <router-view />
    </v-modal>

    <div class="relative w-screen gap-0 font-bold">
      <img
        class="sticky top-0 z-0 w-full"
        src="/src/assets/image1.png"
        alt="pic"
      />
      <div
        class="absolute top-[10.5%] z-10 ml-12 w-[305px] md:ml-60 md:w-[760px]"
      >
        <div class="flex">
          <div
            class="mt-3 mr-1 h-0 w-5 border-t-2 border-[#FFFFFF] md:mt-6 md:mr-3 md:w-14"
          ></div>
          <div>
            <q class="text-xl text-white md:text-5xl">
              {{
                $t("landing.you_have_to_leave_somethig_behind_to_go_forward")
              }}
            </q>

            <p class="mt-2 text-lg text-[#D9D9D9] md:mt-6 md:text-3xl">
              {{ $t("landing.interstellar") }}
            </p>
          </div>
        </div>
      </div>
      <img
        class="sticky top-0 z-10 w-full"
        src="/src/assets/image2.png"
        alt="pic"
      />
      <div
        class="absolute top-[40%] z-20 ml-12 w-[273px] md:top-[45%] md:ml-60 md:w-[991px]"
      >
        <div class="flex">
          <div
            class="mt-3 mr-1 h-0 w-5 border-t-2 border-[#FFFFFF] md:mt-6 md:mr-3 md:w-14"
          ></div>
          <div>
            <q class="text-xl text-white md:text-5xl">
              {{
                $t(
                  "landing.i_think_were_just_gonna_have_to_be_secretly_in_love"
                )
              }}
            </q>

            <p class="mt-2 text-lg text-[#D9D9D9] md:mt-6 md:text-3xl">
              {{ $t("landing.the_royal_tenenbaums") }},2001
            </p>
          </div>
        </div>
      </div>

      <img
        class="sticky top-0 z-20 w-full"
        src="/src/assets/image3.png"
        alt="pic"
      />

      <div
        class="absolute top-[78%] z-30 ml-12 w-[297px] md:ml-60 md:w-[991px]"
      >
        <div class="flex">
          <div
            class="mt-3 mr-1 h-0 w-5 border-t-2 border-[#FFFFFF] md:mt-6 md:mr-3 md:w-14"
          ></div>
          <div>
            <q class="text-xl text-white md:text-5xl">
              {{ $t("landing.i_see_in_your_eyes_the_same_fear") }}
            </q>

            <p class="m-2 text-lg text-[#D9D9D9] md:mt-6 md:text-3xl">
              {{ $t("landing.the_lord_of_the_rings") }},2003
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="bg-[#11101A] py-4 px-10">
      <div class="text-[#DDCCAA]">
        &#169; 2022 {{ $t("landing.movie_quotes_all_rights_reserved") }}
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/layouts/NavigationBar.vue";
</script>
