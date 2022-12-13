<template>
  <div
    class="fixed top-0 left-0 z-50 h-[100vh] w-[100vw] bg-black bg-opacity-60 backdrop-blur-sm"
  >
    <div
      class="container fixed top-[50%] left-[50%] max-w-full -translate-x-[50%] -translate-y-[50%] bg-[#222030] px-6 sm:h-fit sm:max-w-4xl sm:py-24"
    >
      <div class="mx-auto max-w-sm px-6">
        <div class="relative flex flex-wrap">
          <div class="relative w-full">
            <div class="md:mt-6">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
