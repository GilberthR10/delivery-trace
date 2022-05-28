<template>
  <a
    :href="link"
    class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
  >
    <useIcon
      class="text-gray-400 group-hover:text-gray-500 group-hover:fill-gray-500 mr-4 flex-shrink-0 h-6 w-6 fill-gray-400"
    />
    {{ text }}
  </a>
</template>

<script setup>
import { toRefs, defineAsyncComponent } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "#",
  },
});

const { text, icon } = toRefs(props);

const useIcon = defineAsyncComponent(() => import(`./icons/${icon.value}.vue`));
</script>

<style lang="scss" scoped></style>
