<template>
  <form :action="link">
    <button
      class="mt-3 block w-full rounded-lg border border-white px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
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
