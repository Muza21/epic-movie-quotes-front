<template>
  <header class="py-4 px-10 bg-[#11101A]">
    <div class="wrapper">
      <nav class="flex justify-between">
        <RouterLink to="/" class="text-[#DDCCAA]">MOVIE QUOTES</RouterLink>
        <div>
          <span class="mx-2 text-white">Eng</span>
          <router-link
            :to="{ name: 'signup' }"
            class="mx-2 bg-[#E31221] px-4 py-2 rounded-lg text-white"
          >
            Sign Up
          </router-link>
          <router-link
            :to="{ name: 'login' }"
            class="mx-2 px-4 py-2 rounded-lg text-white border border-white"
          >
            Log In
          </router-link>
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
      >
        <h1 id="begin">Get Started</h1>
      </router-link>
    </div>
  </div>
  <v-modal :open="open" @close="open = false">
    <router-view />
  </v-modal>
  <img src="src/assets/Rectangle.jpg" alt="pic" />

  <footer class="py-4 px-10 bg-[#11101A]">
    <div class="text-[#DDCCAA]">&#169; MOVIE QUOTES. ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script>
export default {
  created() {
    this.checkModal();
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.checkModal();
    },
    open(to, from) {
      console.log(to, from);
      if (to == false) {
        if (this.$route.params.modal) {
          this.$router.push("/");
        }
      }
    },
  },
  methods: {
    checkModal() {
      if (
        this.$route.params.modal &&
        this.modalContents[this.$route.params.modal]
      ) {
        this.open = true;
        this.currentModal = this.$route.params.modal;
      } else {
        this.open = false;
      }
    },
    showModal(name) {
      this.$router.push(name).catch(() => {});
    },
  },
};
</script>
