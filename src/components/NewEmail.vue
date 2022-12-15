<template>
  <newemail-layout>
    <ValidationForm class="mt-8">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">New email</span>
          <Field
            :placeholder="$t('texts.enter_new_email')"
            type="email"
            name="email"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] p-3 placeholder-gray-600 shadow-md focus:outline-none"
          />
        </div>

        <div class="flex justify-end pt-4">
          <button class="mx-4 rounded-lg px-4 py-2 text-white hover:bg-black">
            {{ $t("profile.cancel") }}
          </button>
          <button
            class="ml-4 rounded-lg bg-[#E31221] px-4 py-2 text-white hover:bg-[#CC0E10]"
          >
            {{ $t("moviedescription.save_changes") }}
          </button>
        </div>
      </div>
    </ValidationForm>
  </newemail-layout>
</template>

<script setup>
import NewemailLayout from "@/components/layouts/NewemailLayout.vue";
import { Form as ValidationForm, Field } from "vee-validate";
</script>
