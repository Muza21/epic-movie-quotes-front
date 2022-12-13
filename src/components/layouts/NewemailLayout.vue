<template>
  <div class="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-60">
    <div
      class="container fixed top-[50%] left-[50%] mx-6 max-w-full -translate-x-[50%] -translate-y-[50%] rounded-lg bg-[#11101A] sm:h-fit sm:max-w-[615px] sm:pb-24"
    >
      <div class="mx-14 my-6 text-3xl text-white">Add new Email</div>
      <div class="border-b-2 border-[#CED4DA]"></div>
      <div class="mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="relative w-full">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
