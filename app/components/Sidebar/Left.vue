<script setup>
import X from "../Logo/X.vue";

const { defaultTransition } = useTailwindConfig();
</script>

<template>
  <div class="h-screen">
    <div
      class="p-2 my-2 rounded-full hover:bg-gray-200 w-min dark:hover:bg-gray-700"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <X />
        </div>
      </nuxt-link>
    </div>

    <div
      class="p-2 my-2 rounded-full hover:bg-gray-200 w-min dark:hover:bg-gray-700"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <X />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
