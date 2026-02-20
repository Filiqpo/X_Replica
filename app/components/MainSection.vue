<script setup>
const { xBorderColor } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <section class="border-x" :class="xBorderColor">
    <div
      class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80"
    >
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
        {{ props.title }}
      </h2>
    </div>
    <div
      class="flex items-center justify-center p-4 border-b"
      :class="xBorderColor"
      v-if="props.loading"
    >
      <UISpinner />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </section>
</template>
