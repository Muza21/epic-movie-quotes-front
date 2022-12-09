<template>
  <div class="absolute w-60 h-[168px] bg-[#24222F] mt-2">
    <div class="py-1 hover:bg-gray-800">
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center p-3 rounded-md"
      >
        <IconEyes class="ml-6" />
        <span class="ml-6 text-white">View quote</span>
      </a>
    </div>
    <div class="py-1 hover:bg-gray-800">
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center p-3 rounded-md"
      >
        <IconPencil class="ml-6" />
        <span class="ml-6 text-white">Edit</span>
      </a>
    </div>
    <div class="py-1 hover:bg-gray-800">
      <a
        rel="noopener noreferrer"
        href="#"
        class="flex items-center p-3 rounded-md"
      >
        <IconTrash class="ml-6" />
        <span class="ml-6 text-white">Delete</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import IconEyes from "@/components/icons/IconEyes.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
</script>
