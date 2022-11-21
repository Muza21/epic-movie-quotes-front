<template>
  <div v-show="open" class="modal">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["open"],
};
</script>
