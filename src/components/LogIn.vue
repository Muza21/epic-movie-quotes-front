<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">Log in to your account</div>
    <div class="text-center font-base text-[#6C757D]">
      Welcome back&#33; Please eneter your details&#33;
    </div>
    <ValidationForm @submit="onSubmit" class="mt-8">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">Username&#47;Email</span>
          <Field
            placeholder=""
            type="username"
            name="username"
            rules="required|min:3"
            @focus="clearError"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
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
          <span class="px-1 text-sm text-white">Password</span>
          <Field
            placeholder=""
            type="password"
            name="password"
            rules="required"
            @focus="clearError"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="password" />
          </div>
        </div>

        <div class="flex justify-between my-4">
          <label class="text-gray-500 font-bold flex items-center">
            <Field
              name="remember"
              class="leading-loose text-pink-600 top-0"
              type="checkbox"
              @click="toggleRemember"
              :value="rememberMe"
            />
            <span class="ml-2 text-sm py-2 text-white text-left">
              Remember me
            </span>
          </label>
          <router-link
            :to="{ name: 'forgot-password' }"
            class="flex items-center underline text-[#0D6EFD]"
          >
            Forgot password
          </router-link>
        </div>
        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Sign in
        </button>
      </div>
    </ValidationForm>

    <form :action="link">
      <button
        class="mt-3 text-lg font-semibold w-full text-white rounded-lg border border-white px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
      >
        <div class="flex justify-center">
          <IconGoogle class="my-auto mr-3" />Sign in with Google
        </div>
      </button>
    </form>

    <div class="text-sm font-semibold py-6 flex justify-center">
      <div class="text-[#6C757D] font-normal hover:border-teal-500">
        Do not have an account?
        <router-link
          :to="{ name: 'signup' }"
          class="font-semibold underline text-[#0D6EFD]"
        >
          SignUp
        </router-link>
      </div>
    </div>
  </popup-layout>
</template>

<script setup>
import IconGoogle from "@/components/icons/IconGoogle.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import axiosInstance from "@/config/axios/index.js";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { reactive } from "vue";
// import { setJwtToken } from "@/helpers/jwt/index.js";

const link = import.meta.env.VITE_BACKEND_API_URL + "/redirect";

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
    axiosInstance.defaults.withCredentials = true;
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
