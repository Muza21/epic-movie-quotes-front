<template>
  <div
    class="h-full p-3 pl-16 space-y-2 w-72 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="divide-y divide-gray-700">
      <ul class="pt-2 pb-4 space-y-1 text-sm">
        <li class="flex dark:bg-gray-800 dark:text-gray-50">
          <img
            src="src/assets/Ellipse 1.png"
            alt=""
            class="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div class="ml-4">
            <h2 class="text-lg font-semibold text-white">Nino Tabagari</h2>
            <span class="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                class="text-xs hover:underline text-[#CED4DA] dark:text-gray-400"
                >Edit your profile</a
              >
            </span>
          </div>
        </li>
        <li class="dark:bg-gray-800 dark:text-gray-50">
          <a
            rel="noopener noreferrer"
            href="#"
            class="flex items-center p-2 rounded-md"
          >
            <IconHouseVue />
            <span class="ml-6 text-white">News feed</span>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="#"
            class="flex items-center p-2 rounded-md"
          >
            <IconCameraVue />

            <span class="ml-6 text-white">List of movies</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconCameraVue from "@/components/icons/IconCamera.vue";
import IconHouseVue from "@/components/icons/IconHouse.vue";
</script>
