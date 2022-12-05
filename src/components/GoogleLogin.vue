<template>
  <form :action="link">
    <button
      class="mt-3 text-lg font-semibold w-full text-white rounded-lg border border-white px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
    >
      <div class="flex justify-center">
        <IconGoogle class="my-auto mr-3" />
        <slot />
      </div>
    </button>
  </form>
</template>

<script setup>
import IconGoogle from "@/components/icons/IconGoogle.vue";
const link = import.meta.env.VITE_BACKEND_API_URL + "/redirect";
</script>
