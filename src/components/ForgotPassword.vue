<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">Forgot password&#63;</div>
    <div class="font-base text-center text-[#6C757D]">
      Enter the email and we&#39;ll send an email with instructions to reset
      your password
    </div>
    <ValidationForm class="mt-8" @submit="onSubmit">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">Email</span>
          <Field
            placeholder=""
            type="email"
            name="email"
            @focus="clearError"
            rules="required|email|min:3"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div v-if="errorData.emailError">
          <div class="ml-4 text-orange-600">
            {{ errorData.emailError }}
          </div>
        </div>
        <div>
          <ErrorMessage class="ml-4 text-orange-600" name="email" />
        </div>
        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          Send instructions
        </button>
      </div>
    </ValidationForm>

    <div class="flex justify-center py-6 text-sm font-semibold">
      <a href="#" class="flex justify-center font-normal"
        ><IconReturn class="my-auto mr-3" />
        <router-link :to="{ name: 'login' }" class="text-[#6C757D]">
          Back to log in
        </router-link>
      </a>
    </div>
  </popup-layout>
</template>

<script setup>
import IconReturn from "@/components/icons/IconReturn.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";

import axiosInstance from "@/config/axios/index.js";
import { reactive } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const errorData = reactive({
  emailError: "",
});

function clearError() {
  errorData.emailError = "";
}

const onSubmit = async (values) => {
  try {
    const response = await axiosInstance.post(`/forgot-password`, {
      email: values.email,
    });
    router.push({ name: "change-password" });
    console.log(response);
  } catch (err) {
    if (err.response.status === 422) {
      if (err.response.data.errors.email) {
        errorData.emailError = err.response.data.errors.email[0];
      }
    }
    console.log(err);
  }
};
</script>
