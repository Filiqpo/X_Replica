<script setup>
const { defaultTransition, xBorderColor } = useTailwindConfig();

const wrapperClass = computed(() => `${defaultTransition} ${xBorderColor}`);
</script>

<template>
  <section
    class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300 border-b"
    :class="wrapperClass"
  >
    <slot></slot>
  </section>
</template>
