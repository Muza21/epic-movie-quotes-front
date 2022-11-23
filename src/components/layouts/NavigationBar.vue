<template>
  <header class="py-4 px-16 bg-[#11101A]">
    <div class="wrapper">
      <nav class="flex justify-between">
        <RouterLink to="/" class="text-[#DDCCAA]">MOVIE QUOTES</RouterLink>
        <div class="flex items-center">
          <div class="mx-4">
            <IconNotification />
          </div>
          <span class="flex items-center mx-4 text-white"
            >Eng <IconDropdown class="ml-2" />
          </span>
          <router-link
            :to="{ name: 'signup' }"
            class="mx-4 bg-[#E31221] px-4 py-2 rounded-lg text-white"
          >
            Sign Up
          </router-link>
          <router-link
            :to="{ name: 'login' }"
            class="mx-4 px-4 py-2 rounded-lg text-white border border-white"
          >
            Log In
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import IconNotification from "@/components/icons/IconNotification.vue";
import IconDropdown from "@/components/icons/IconDropdown.vue";
</script>
