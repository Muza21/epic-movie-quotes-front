import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuoteStore = defineStore("quote", () => {
  const quote = ref(null);
  return { quote };
});

export const useUpdateQuoteStore = defineStore("updateQuote", () => {
  const quote = ref(null);
  return { quote };
});

export const useDeleteQuoteStore = defineStore("deleteQuote", () => {
  const quote = ref(null);
  return { quote };
});
