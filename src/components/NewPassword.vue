<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">
      {{ $t("landing.create_new_password") }}
    </div>
    <div class="font-base text-center text-[#6C757D]">
      {{ $t("landing.your_new_password_must_be_different") }}
    </div>
    <ValidationForm class="mt-8" @submit="onSubmit">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">
            {{ $t("landing.password") }}
          </span>
          <span class="text-[#DC3545]">&#42;</span>
          <Field
            :placeholder="$t('texts.at_least_8')"
            type="password"
            name="password"
            rules="required|min:3|max:15|lowercase"
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
          {{ $t("landing.reset_password") }}
        </button>
      </div>
    </ValidationForm>

    <div class="flex justify-center py-6 text-sm font-semibold">
      <router-link
        :to="{ name: 'login' }"
        class="flex justify-center font-normal"
        ><IconReturn class="my-auto mr-3" />
        <router-link :to="{ name: 'login' }" class="text-[#6C757D]">
          {{ $t("landing.back_to_log_in") }}
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
