<template>
  <div class="absolute w-60 h-[168px] bg-[#24222F] mt-2">
    <div @click="handleClose" class="py-1 hover:bg-gray-800">
      <router-link
        :to="{ name: 'view-quote', params: { quoteId: props.myParam } }"
      >
        <div class="flex items-center p-3 rounded-md">
          <IconEyes class="ml-6" />
          <span class="ml-6 text-white">View quote</span>
        </div>
      </router-link>
    </div>
    <div @click="handleClose" class="py-1 hover:bg-gray-800">
      <router-link
        :to="{ name: 'edit-quote', params: { quoteId: props.myParam } }"
        class="py-1 hover:bg-gray-800"
      >
        <div class="flex items-center p-3 rounded-md">
          <IconPencil class="ml-6" />
          <span class="ml-6 text-white">Edit</span>
        </div>
      </router-link>
    </div>
    <div
      @click="
        deleteQuote();
        handleClose();
      "
      class="py-1 hover:bg-gray-800 cursor-pointer"
    >
      <div class="flex items-center p-3 rounded-md">
        <IconTrash class="ml-6" />
        <span class="ml-6 text-white">Delete</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconEyes from "@/components/icons/IconEyes.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import axiosInstance from "@/config/axios/index.js";
const props = defineProps({
  myParam: {},
});
const emit = defineEmits(["close"]);

const handleClose = () => {
  emit("close");
};

const deleteQuote = async () => {
  try {
    const response = await axiosInstance.post(`/quote/${props.myParam}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
