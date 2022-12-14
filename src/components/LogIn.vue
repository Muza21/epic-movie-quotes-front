<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">
      {{ $t("landing.log_in_to_your_account") }}
    </div>
    <div class="font-base text-center text-[#6C757D]">
      {{ $t("landing.welcome_back_please_eneter_your_details") }}
    </div>
    <ValidationForm @submit="onSubmit" class="mt-8">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.username") }}&#47;{{ $t("landing.email") }}
          </span>
          <Field
            placeholder=""
            type="username"
            name="username"
            rules="required|min:3"
            @focus="clearError"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          />
          <div v-if="errorData.authError">
            <div class="ml-4 text-orange-600">
              {{ errorData.authError }}
            </div>
          </div>
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="username" />
          </div>
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.password") }}
          </span>
          <Field
            placeholder=""
            type="password"
            name="password"
            rules="required"
            @focus="clearError"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="password" />
          </div>
        </div>

        <div class="my-4 flex justify-between">
          <label class="flex items-center font-bold text-gray-500">
            <Field
              name="remember"
              class="top-0 leading-loose text-pink-600"
              type="checkbox"
              @click="toggleRemember"
              :value="rememberMe"
            />
            <span class="ml-2 py-2 text-left text-sm text-white">
              {{ $t("landing.remember_me") }}
            </span>
          </label>
          <router-link
            :to="{ name: 'forgot-password' }"
            class="flex items-center text-[#0D6EFD] underline"
          >
            {{ $t("landing.forgot_password") }}
          </router-link>
        </div>
        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
        >
          {{ $t("landing.sign_in") }}
        </button>
      </div>
    </ValidationForm>

    <GoogleLogin>
      {{ $t("landing.sign_in_with_google") }}
    </GoogleLogin>

    <div class="flex justify-center py-6 text-sm font-semibold">
      <div class="font-normal text-[#6C757D] hover:border-teal-500">
        {{ $t("landing.do_not_have_an_account") }}
        <router-link
          :to="{ name: 'signup' }"
          class="font-semibold text-[#0D6EFD] underline"
        >
          {{ $t("landing.signup") }}
        </router-link>
      </div>
    </div>
  </popup-layout>
</template>

<script setup>
import PopupLayout from "@/components/layouts/PopupLayout.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { reactive } from "vue";

import GoogleLogin from "@/components/GoogleLogin.vue";

const router = useRouter();
const authStore = useAuthStore();

let rememberMe = true;

const errorData = reactive({
  authError: "",
});

function clearError() {
  errorData.authError = "";
}

const onSubmit = async (values) => {
  try {
    const response = await axiosInstance.post(`/login`, {
      username: values.username,
      password: values.password,
      remember: values.remember,
    });
    authStore.authenticated = true;
    router.push({ name: "newsfeed" });
    console.log(response);
  } catch (err) {
    if (err.response.status === 422) {
      if (err.response.data.errors.username) {
        errorData.authError = err.response.data.errors.username[0];
      }
    }
    if (err.response.status === 401) {
      if (err.response.data) {
        errorData.authError = err.response.data;
      }
    }
    console.log(err);
  }
};

function toggleRemember() {
  rememberMe = !rememberMe;
}
</script>
