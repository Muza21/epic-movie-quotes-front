<template>
  <div class="container max-w-full bg-[#222030] mx-auto md:py-24 px-6">
    <div class="max-w-sm mx-auto px-6">
      <div class="relative flex flex-wrap">
        <div class="w-full relative">
          <div class="md:mt-6">
            <div>
              <EmailSent class="mx-auto" />
            </div>
            <div class="text-center text-3xl text-white">Check your email</div>
            <div class="text-center font-base text-white">
              We have sent a password recover instructions to your email
            </div>
            <form class="mt-8">
              <div class="mx-auto max-w-lg">
                <button
                  class="mt-3 text-lg font-semibold bg-[#E31221] w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                >
                  Go to my email
                </button>
              </div>
            </form>

            <div class="text-sm font-semibold py-6 flex justify-center">
              <a href="#" class="font-normal flex justify-center">
                <span class="text-[#6C757D]">
                  Skip&#44; I&#39;ll confirm later
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailSent from "@/components/icons/EmailSent.vue";

export default {
  data() {
    return {};
  },

  components: {
    EmailSent,
  },
  computed: {},

  methods: {},
};
</script>
