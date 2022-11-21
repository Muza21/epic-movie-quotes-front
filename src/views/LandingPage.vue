<template>
  <header class="py-4 px-10 bg-[#11101A]">
    <div class="wrapper">
      <nav class="flex justify-between">
        <RouterLink to="/" class="text-[#DDCCAA]">MOVIE QUOTES</RouterLink>
        <div>
          <span class="mx-2 text-white">Eng</span>
          <span class="mx-2 bg-[#E31221] px-4 py-2 rounded-lg text-white"
            >Sign Up</span
          >
          <span class="mx-2 px-4 py-2 rounded-lg text-white border border-white"
            >Log In</span
          >
        </div>
      </nav>
    </div>
  </header>
  <div class="bg-[#11101A] py-36">
    <h1 class="text-center text-3xl text-[#DDCCAA]">
      Find any quote in millions of movie lines
    </h1>
    <div class="flex items-center justify-center">
      <button class="bg-[#E31221] px-4 py-2 rounded-lg text-white">
        Get Started
      </button>
    </div>
  </div>
  <img src="src/assets/Rectangle.jpg" alt="pic" />
  <SignUp />
  <LogIn />
  <footer class="py-4 px-10 bg-[#11101A]">
    <div class="text-[#DDCCAA]">&#169; MOVIE QUOTES. ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";

export default {
  data() {
    return {};
  },

  components: {
    SignUp,
    LogIn,
  },
  computed: {},

  methods: {},
};
</script>
