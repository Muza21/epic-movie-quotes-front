<template>
  <div v-show="props.open" class="modal">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
</script>
