<template>
  <div class="absolute mt-2 h-[168px] w-60 bg-[#24222F]">
    <div @click="handleClose" class="py-1 hover:bg-gray-800">
      <router-link
        :to="{ name: 'view-quote', params: { quoteId: props.myParam } }"
      >
        <div class="flex items-center rounded-md p-3">
          <IconEyes class="ml-6" />
          <span class="ml-6 text-white">
            {{ $t("moviedescription.view_quote") }}
          </span>
        </div>
      </router-link>
    </div>
    <div @click="handleClose" class="py-1 hover:bg-gray-800">
      <router-link
        :to="{ name: 'edit-quote', params: { quoteId: props.myParam } }"
        class="py-1 hover:bg-gray-800"
      >
        <div class="flex items-center rounded-md p-3">
          <IconPencil class="ml-6" />
          <span class="ml-6 text-white">
            {{ $t("moviedescription.edit") }}
          </span>
        </div>
      </router-link>
    </div>
    <div
      @click="
        deleteQuote();
        handleClose();
      "
      class="cursor-pointer py-1 hover:bg-gray-800"
    >
      <div class="flex items-center rounded-md p-3">
        <IconTrash class="ml-6" />
        <span class="ml-6 text-white">
          {{ $t("moviedescription.delete") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconEyes from "@/components/icons/IconEyes.vue";
import IconPencil from "@/components/icons/IconPencil.vue";
import IconTrash from "@/components/icons/IconTrash.vue";
import axiosInstance from "@/config/axios/index.js";
import { useDeleteQuoteStore } from "@/stores/quote";

const quoteDeleteData = useDeleteQuoteStore();

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
    quoteDeleteData.quote = response.data;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
