<template>
  <newemail-layout>
    <form class="mt-8">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">New email</span>
          <input
            placeholder="Enter new email"
            type="email"
            class="text-md block p-3 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>

        <div class="pt-4 flex justify-end">
          <button class="mx-4 px-4 py-2 rounded-lg text-white">Cancel</button>
          <button class="ml-4 bg-[#E31221] px-4 py-2 rounded-lg text-white">
            Save changes
          </button>
        </div>
      </div>
    </form>
  </newemail-layout>
</template>

<script setup>
import NewemailLayout from "@/components/layouts/NewemailLayout.vue";
</script>
