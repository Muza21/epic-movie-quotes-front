<template>
  <form-layout>
    <template v-slot:header>
      <div class="text-center text-3xl text-white mx-14 my-6">
        Write new quote
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
            placeholder="Start create new quote"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <textarea
            placeholder="ახალი ციტატა"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <div class="p-2 flex items-center w-full border-2 border-[#6C757D]">
            <IconPhoto />
            <div class="mx-3 flex-1">
              <div class="flex items-center">
                <h2 class="text-xl font-semibold text-white">
                  Drag and drop your image here or
                </h2>
                <button class="p-2 ml-2 bg-[#9747FF] rounded-lg text-white">
                  Choose file
                </button>
                <input type="file" class="hidden" />
              </div>
            </div>
          </div>
        </div>
        <div class="py-1">
          <div class="p-2 flex items-center w-full border-2 border-[#6C757D]">
            <IconCamera />
            <div class="mx-3 flex-1">
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-white">Choose a movie</h2>
                <IconDropdown />
              </div>
            </div>
          </div>
        </div>
        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Post
        </button>
      </div>
    </form>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import IconCamera from "@/components/icons/IconCamera.vue";
import IconDropdown from "@/components/icons/IconDropdown.vue";
</script>
