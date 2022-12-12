<template>
  <div class="w-full max-w-lg px-10 py-8 mx-auto">
    <div class="w-[750px] mx-auto space-y-6">
      <div class="dropdown-menu">
        <div class="bg-black rounded-lg shadow-xl px-4 relative mt-8">
          <IconTriangle class="absolute bottom-full right-60" />
          <div class="flex justify-between text-white pt-8 pb-6">
            <h2 class="text-xl">Notifications</h2>
            <p class="border-b-2 border-white">mark as all read</p>
          </div>
          <div
            class="p-3 mb-3 flex items-center w-full hover:bg-gray-800 border-2 border-[#6C757D]"
          >
            <img
              class="w-20 h-20 object-cover rounded-full"
              src="/src/assets/ProfilePic.jpg"
            />
            <div class="mx-3 flex-1">
              <div class="flex justify-between">
                <h2 class="text-xl font-semibold text-white">Hello john</h2>
                <p class="text-[#D9D9D9]">5 min ago</p>
              </div>
              <div class="flex justify-between">
                <h2 class="text-[#CED4DA] flex items-center">
                  <IconChat class="w-5" />
                  <p class="ml-3">Commented to your movie quotes</p>
                </h2>
                <p class="text-[#198754]">New</p>
              </div>
            </div>
          </div>
          <div
            class="p-3 mb-3 flex items-center w-full hover:bg-gray-800 border-2 border-[#6C757D]"
          >
            <img
              class="w-20 h-20 object-cover rounded-full"
              src="/src/assets/ProfilePic.jpg"
            />
            <div class="mx-3 flex-1">
              <div class="flex justify-between">
                <h2 class="text-xl font-semibold text-white">Hello john</h2>
                <p class="text-[#D9D9D9]">5 min ago</p>
              </div>
              <div class="flex justify-between">
                <h2 class="text-[#CED4DA] flex items-center">
                  <RedHeart class="w-5" />
                  <p class="ml-3">Reacted to your quote</p>
                </h2>
                <p class="text-[#198754]">New</p>
              </div>
            </div>
          </div>
          <div class="py-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconTriangle from "@/components/icons/IconTriangle.vue";
import IconChat from "@/components/icons/IconChat.vue";
import RedHeart from "@/components/icons/RedHeart.vue";
</script>
