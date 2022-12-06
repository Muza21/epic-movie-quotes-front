<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">Create new password</div>
    <div class="text-center font-base text-[#6C757D]">
      Your new password must be different from previous used passwords&#33;
    </div>
    <ValidationForm class="mt-8" @submit="onSubmit">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">Password</span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            placeholder=""
            type="password"
            name="password"
            rules="required"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          <div>
            <ErrorMessage class="ml-4 text-orange-600" name="password" />
          </div>
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-white">Password Confirm</span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            placeholder=""
            type="password"
            name="password_confirmation"
            rules="required|confirmed:password"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          <div>
            <ErrorMessage
              class="ml-4 text-orange-600"
              name="password_confirmation"
            />
          </div>
        </div>

        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Reset password
        </button>
      </div>
    </ValidationForm>

    <div class="text-sm font-semibold py-6 flex justify-center">
      <router-link
        :to="{ name: 'login' }"
        class="font-normal flex justify-center"
        ><IconReturn class="my-auto mr-3" />
        <router-link :to="{ name: 'login' }" class="text-[#6C757D]">
          Back to log in
        </router-link>
      </router-link>
    </div>
  </popup-layout>
</template>

<script setup>
import IconReturn from "@/components/icons/IconReturn.vue";
import PopupLayout from "@/components/layouts/PopupLayout.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import { useRoute, useRouter } from "vue-router";
import axiosInstance from "@/config/axios/index.js";

const route = useRoute();
const router = useRouter();

const onSubmit = async (values) => {
  try {
    const response = await axiosInstance.post(`/reset-password`, {
      password: values.password,
      password_confirmation: values.password_confirmation,
      email: route.query.email,
      token: route.query.token,
    });
    router.push({ name: "reseted-password" });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
