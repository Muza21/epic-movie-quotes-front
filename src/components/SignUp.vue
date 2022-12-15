<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">
      {{ $t("landing.create_an_account") }}
    </div>
    <div class="font-base text-center text-[#6C757D]">
      {{ $t("landing.start_your_journey") }}&#33;
    </div>
    <ValidationForm @submit="onSubmit" class="mt-8">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.username") }}
          </span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            :placeholder="$t('texts.at_least_3')"
            type="text"
            name="username"
            rules="required|min:3|max:15|lowercase"
            @focus="clearError"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:outline-none"
          />
          <div v-if="errorData.usernameError">
            <div class="ml-4 text-orange-600">
              {{ errorData.usernameError }}
            </div>
          </div>
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="username" />
          </div>
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.email") }}
          </span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            :placeholder="$t('texts.enter_your_email')"
            type="email"
            name="email"
            rules="required|email|min:3"
            @focus="clearError"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:outline-none"
          />
          <div v-if="errorData.emailError">
            <div class="ml-4 text-orange-600">{{ errorData.emailError }}</div>
          </div>
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="email" />
          </div>
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.password") }}
          </span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            :placeholder="$t('texts.at_least_8')"
            type="password"
            name="password"
            rules="required|min:8|max:15|lowercase"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="password" />
          </div>
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.password_confirm") }}
          </span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            :placeholder="$t('texts.confirm_password')"
            type="password"
            name="password_confirmation"
            rules="required|confirmed:password"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] px-3 py-2 placeholder-gray-600 shadow-md focus:outline-none"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="password_confirmation"
            />
          </div>
        </div>

        <button
          class="mt-3 block w-full rounded-lg bg-[#E31221] px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-[#CC0E10] hover:text-white"
        >
          {{ $t("landing.get_started") }}
        </button>
      </div>
    </ValidationForm>

    <GoogleLogin>
      {{ $t("landing.sign_up_with_google") }}
    </GoogleLogin>

    <div class="flex justify-center py-6 text-sm font-semibold">
      <div class="font-normal text-[#6C757D] hover:border-teal-500">
        {{ $t("landing.already_have_an_account") }}&#63;
        <router-link
          :to="{ name: 'login' }"
          class="font-semibold text-[#0D6EFD]"
        >
          {{ $t("landing.login") }}
        </router-link>
      </div>
    </div>
  </popup-layout>
</template>

<script setup>
import PopupLayout from "@/components/layouts/PopupLayout.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { reactive } from "vue";
import GoogleLogin from "@/components/GoogleLogin.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const errorData = reactive({
  usernameError: "",
  emailError: "",
});

function clearError() {
  errorData.usernameError = "";
  errorData.emailError = "";
}

const onSubmit = async (values) => {
  try {
    const response = await axiosInstance.post(`/signup`, {
      username: values.username,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    });
    router.push({ name: "registered" });
    console.log(response);
  } catch (err) {
    if (err.response.status === 422) {
      if (err.response.data.errors.username) {
        errorData.usernameError = err.response.data.errors.username[0];
      }
      if (err.response.data.errors.email) {
        errorData.emailError = err.response.data.errors.email[0];
      }
    }
    console.log(err);
  }
};
</script>
