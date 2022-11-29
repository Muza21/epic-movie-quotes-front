<template>
  <form-layout>
    <template v-slot:header>
      <div class="w-full px-10">
        <div class="text-center text-3xl text-white mx-14 my-6">Add quote</div>
      </div>
    </template>
    <ValidationForm class="mt-8">
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

        <div class="mb-3 flex items-center w-full">
          <img
            class="w-72 h-40 object-cover rounded-xl"
            src="/src/assets/ProfilePic.jpg"
          />
          <div class="mx-3 flex-1">
            <div class="my-3">
              <h2 class="text-xl font-semibold text-[#DDCCAA]">
                dynamic movie name
              </h2>
            </div>
            <div class="my-3 flex">
              <div
                class="px-2 py-1 text-white bg-[#6C757D] text-center rounded-md mr-2"
              >
                dynamic genre
              </div>
            </div>
            <div class="my-3 flex">
              <h2 class="text-xl text-white">Director:</h2>
              <h2 class="ml-2 text-xl text-white">Dynamic director name</h2>
            </div>
          </div>
        </div>

        <div class="py-1">
          <Field
            as="textarea"
            placeholder="Quote in English"
            name="quote_en"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
        </div>
        <div class="py-1">
          <Field
            as="textarea"
            placeholder="ციტატა ქართულ ენაზე"
            name="quote_ka"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#11101A] border-2 border-[#6C757D] placeholder-white shadow-md"
          />
        </div>

        <div class="py-1 mt-8">
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
                <Field name="quote_picture" type="file" class="hidden" />
              </div>
            </div>
          </div>
        </div>

        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Save Changes
        </button>
      </div>
    </ValidationForm>
  </form-layout>
</template>

<script setup>
import FormLayout from "@/components/layouts/FormLayout.vue";
import IconPhoto from "@/components/icons/IconPhoto.vue";
import { Form as ValidationForm, Field } from "vee-validate";
</script>
