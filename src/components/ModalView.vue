<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <div
        class="bg-black bg-opacity-70 fixed w-[100vw] h-[100vh] top-0 left-0"
      >
        <div
          class="container fixed max-w-full sm:max-w-4xl sm:h-fit bg-[#222030] sm:py-24 px-6 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <div class="max-w-sm mx-auto px-6">
            <div class="relative flex flex-wrap">
              <div class="w-full relative">
                <div class="md:mt-6">
                  <transition name="modal-animation-inner">
                    <div v-show="modalActive" class="modal-inner">
                      <slot />
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>
