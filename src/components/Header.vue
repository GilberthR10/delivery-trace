<script setup>
import Menu from "@/components/icons/Menu.vue";
import ArrowLeft from "@/components/icons/ArrowLeft.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import Sidebar from "@/components/Sidebar.vue";
import { ref } from "vue";

const showSidebar = ref(false);
</script>

<template>
  <header class="flex items-center justify-around">
    <Menu
      class="h-6 w-6 stroke-logystoDarkBlue cursor-pointer"
      @click="showSidebar = !showSidebar"
    />
    <ArrowLeft class="h-8 w-6" />
    <p class="text-center text-sm">
      Hola <span class="font-bold">Jorge</span> cuantos pedidos realizaras hoy
    </p>
    <ArrowRight class="h-8 w-6" />
  </header>
  <Sidebar v-show="showSidebar" @close="showSidebar = false" />
</template>
