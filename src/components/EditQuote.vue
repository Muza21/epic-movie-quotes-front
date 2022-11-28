<template>
  <form-layout>
    <template v-slot:header>
      <div class="flex items-center w-full justify-between px-10">
        <div class="flex item-center">
          <IconTrash />
          <p class="text-[#CED4DA] ml-2">Delete</p>
        </div>
        <div class="text-center text-3xl text-white mx-14 my-6">Add movie</div>
        <IconCross />
      </div>
    </template>
    <form class="mt-8">
      <div class="mx-auto px-4">
        <div class="my-10 rounded-xl bg-[#11101A]">
          <div class="flex items-center mb-6 rounded-md">
            <img
              class="rounded-full w-12 h-12 mr-2 mt-1"
              src="/src/assets/ProfilePic.jpg"
            />
            <div>
              <h2 class="text-lg font-semibold text-white">Nino Tabagari</h2>
            </div>
          </div>
        </div>

        <div class="py-1">
          <textarea
            placeholder="Quote on English"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
        </div>
        <div class="py-1">
          <textarea
            placeholder="ციტატა ქართულ ენაზე"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
        </div>

        <div class="text-white w-full relative py-6 leading-loose">
          <img
            class="relative mx-auto block"
            src="/src/assets/imageeditquote.png"
            alt="post image"
          />
          <button
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-28"
          >
            <div
              class="bg-black w-32 h-28 opacity-70 rounded-xl block shadow-xl"
            ></div>
            <div
              class="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <IconPhoto />
              <p class="text-white w-32">Change photo</p>
            </div>
          </button>
        </div>

        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Save Changes
        </button>
      </div>
    </form>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import IconCross from "@/components/icons/IconCross.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
</script>
