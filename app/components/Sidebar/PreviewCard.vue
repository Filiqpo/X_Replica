<script setup>
const { xBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section
    class="m-2 border bg-gray-50 rounded-2xl dark:bg-dim-700 overflow-hidden"
    :class="xBorderColor"
  >
    <h1
      class="p-3 text-xl font-extrabold color-gray-900 border-b dark:text-white"
      :class="xBorderColor"
    >
      {{ props.title }}
    </h1>

    <slot></slot>

    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition"
    >
      Show more
    </div>
  </section>
</template>
