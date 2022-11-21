<template>
  <popup-layout>
    <div class="text-center text-3xl text-white">Log in to your account</div>
    <div class="text-center font-base text-[#6C757D]">
      Welcome back&#33; Please eneter your details&#33;
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
        <div class="py-1">
          <span class="px-1 text-sm text-white">Password</span>
          <input
            placeholder=""
            type="password"
            x-model="password"
            class="text-md block px-3 py-2 rounded-lg w-full bg-[#CED4DA] border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>

        <div class="flex justify-between my-4">
          <label class="text-gray-500 font-bold flex items-center">
            <input class="leading-loose text-pink-600 top-0" type="checkbox" />
            <span class="ml-2 text-sm py-2 text-white text-left"
              >Remember me
            </span>
          </label>
          <router-link
            :to="{ name: 'forgot-password' }"
            class="flex items-center text-[#0D6EFD]"
            >Forgot password</router-link
          >
        </div>
        <button
          class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Sign in
        </button>
        <button
          class="mt-3 text-lg font-semibold w-full text-white rounded-lg border border-white px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          <div class="flex justify-center">
            <IconGoogle class="my-auto mr-3" />Sign up with Google
          </div>
        </button>
      </div>
    </form>

    <div class="text-sm font-semibold py-6 flex justify-center">
      <div class="text-[#6C757D] font-normal hover:border-teal-500">
        Do not have an account?
        <router-link
          :to="{ name: 'signup' }"
          class="font-semibold text-[#0D6EFD]"
        >
          SignUp
        </router-link>
      </div>
    </div>
  </popup-layout>
</template>

<script>
import IconGoogle from "@/components/icons/IconGoogle.vue";
import PopupLayout from "@/components/PopupLayout.vue";

export default {
  data() {
    return {};
  },

  components: {
    IconGoogle,
    PopupLayout,
  },
  computed: {},

  methods: {},
};
</script>
