<template>
  <!-- <div>Hellow WOrld</div>  bg-[#222030]-->
  <div class="container max-w-full mx-auto md:py-24 px-6">
    <div class="max-w-sm mx-auto px-6">
      <div class="relative flex flex-wrap">
        <div class="w-full relative">
          <div class="md:mt-6">
            <div class="text-center font-semibold text-black">
              Create an account
            </div>
            <div class="text-center font-base text-black">
              Start Your journey!
            </div>
            <form class="mt-8" x-data="{password: '',password_confirm: ''}">
              <div class="mx-auto max-w-lg">
                <div class="py-1">
                  <span class="px-1 text-sm text-gray-600">Username</span>
                  <input
                    placeholder=""
                    type="text"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div class="py-1">
                  <span class="px-1 text-sm text-gray-600">Email</span>
                  <input
                    placeholder=""
                    type="email"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div class="py-1">
                  <span class="px-1 text-sm text-gray-600">Password</span>
                  <input
                    placeholder=""
                    type="password"
                    x-model="password"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div class="py-1">
                  <span class="px-1 text-sm text-gray-600"
                    >Password Confirm</span
                  >
                  <input
                    placeholder=""
                    type="password"
                    x-model="password_confirm"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>

                <button
                  class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                >
                  Get started
                </button>
                <button
                  class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                >
                  <div class="flex justify-center">
                    <IconGoogle class="my-auto mr-3" />Sign up with Google
                  </div>
                </button>
              </div>
            </form>

            <div class="text-sm font-semibold py-6 flex justify-center">
              <a
                href="#"
                class="text-black font-normal border-b-2 border-gray-200 hover:border-teal-500"
                >Already have an account?
                <span class="text-black font-semibold"> Login </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconGoogle from "@/components/icons/IconGoogle.vue";

export default {
  data() {
    return {};
  },

  components: {
    IconGoogle,
  },
  computed: {},

  methods: {},
};
</script>
