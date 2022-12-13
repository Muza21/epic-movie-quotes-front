<template>
  <newemail-layout>
    <ValidationForm class="mt-8">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">New email</span>
          <Field
            placeholder="Enter new email"
            type="email"
            name="email"
            class="text-md block w-full rounded-lg border-2 border-gray-300 bg-[#CED4DA] p-3 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div class="flex justify-end pt-4">
          <button class="mx-4 rounded-lg px-4 py-2 text-white">Cancel</button>
          <button class="ml-4 rounded-lg bg-[#E31221] px-4 py-2 text-white">
            Save changes
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
