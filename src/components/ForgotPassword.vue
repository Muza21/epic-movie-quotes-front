<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">Forgot password&#63;</div>
    <div class="text-center font-base text-[#6C757D]">
      Enter the email and we&#39;ll send an email with instructions to reset
      your password
    </div>
    <form class="mt-8" x-data="{password: '',password_confirm: ''}">
      <div class="mx-auto max-w-lg">
        <div class="py-1">
          <span class="px-1 text-sm text-white">Email</span>
          <input
            placeholder=""
            type="email"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>

        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Send instructions
        </button>
      </div>
    </form>

    <div class="text-sm font-semibold py-6 flex justify-center">
      <a href="#" class="font-normal flex justify-center"
        ><IconReturn class="my-auto mr-3" />
        <router-link :to="{ name: 'login' }" class="text-[#6C757D]">
          Back to log in
        </router-link>
      </a>
    </div>
  </popup-layout>
</template>

<script>
import IconReturn from "@/components/icons/IconReturn.vue";
import PopupLayout from "@/components/PopupLayout.vue";

export default {
  data() {
    return {};
  },

  components: {
    IconReturn,
    PopupLayout,
  },
  computed: {},

  methods: {},
};
</script>
