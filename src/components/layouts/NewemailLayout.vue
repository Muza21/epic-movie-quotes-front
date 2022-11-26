<template>
  <div class="bg-black bg-opacity-60 fixed w-[100vw] h-[100vh] top-0 left-0">
    <div
      class="container fixed max-w-full sm:max-w-[615px] rounded-lg sm:h-fit bg-[#11101A] sm:pb-24 mx-6 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
    >
      <div class="text-3xl text-white mx-14 my-6">Add new Email</div>
      <div class="border-b-2 border-[#CED4DA]"></div>
      <div class="mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
