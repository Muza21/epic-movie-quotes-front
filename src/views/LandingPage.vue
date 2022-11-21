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
      <router-link
        :to="{ name: 'signup' }"
        class="bg-[#E31221] px-4 py-2 rounded-lg text-white"
        @click="toggleModal"
      >
        <h1 id="begin">Get Started</h1>
      </router-link>
    </div>
  </div>
  <v-modal :open="open" @close="open = false">
    <template v-slot:title v-if="open">
      {{ modalContents[currentModal].title }}
    </template>
    <template v-slot:content v-if="open">
      {{ modalContents[currentModal].content }}
    </template>
  </v-modal>
  <ModalView :modalActive="modalActive">
    <router-view />
  </ModalView>
  <!-- <button @click="toggleModal" type="button">Open Modal</button> -->
  <img src="src/assets/Rectangle.jpg" alt="pic" />
  <!--<div class="border-8 border-red-500">
    <SignUp />
  </div>
  <div class="border-8 border-red-500">
    <LogIn />
  </div>
  <div class="border-8 border-red-500">
    <ForgotPassword />
  </div>
  <div class="border-8 border-red-500">
    <NewPassword />
  </div>
  <div class="border-8 border-red-500">
    <ResetPassword />
  </div>
  <div class="border-8 border-red-500">
    <RegisteredSuccessfully />
  </div>
  <div class="border-8 border-red-500">
    <VerifiedSuccessfully />
  </div>
  <div class="border-8 border-red-500">
    <ResetedPassword />
  </div> -->
  <footer class="py-4 px-10 bg-[#11101A]">
    <div class="text-[#DDCCAA]">&#169; MOVIE QUOTES. ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script>
// import SignUp from "@/components/SignUp.vue";
// import LogIn from "@/components/LogIn.vue";
// import ForgotPassword from "@/components/ForgotPassword.vue";
// import NewPassword from "@/components/NewPassword.vue";
// import ResetPassword from "@/components/notifications/ResetPassword.vue";
// import RegisteredSuccessfully from "@/components/notifications/RegisteredSuccessfully.vue";
// import VerifiedSuccessfully from "@/components/notifications/VerifiedSuccessfully.vue";
// import ResetedPassword from "@/components/notifications/ResetedPassword.vue";
import ModalView from "@/components/ModalView.vue";
import { ref } from "vue";

export default {
  data() {
    return {};
  },

  components: {
    // SignUp,
    // LogIn,
    // ForgotPassword,
    // NewPassword,
    // ResetPassword,
    // RegisteredSuccessfully,
    // VerifiedSuccessfully,
    // ResetedPassword,
    ModalView,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
  computed: {},

  methods: {},
};
</script>
