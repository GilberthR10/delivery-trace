<template>
  <div class="container mx-auto h-screen grid place-content-center">
    <dogNotFound />
    <main class="flex flex-col">
      <h1
        v-if="!code"
        class="text-center text-lg font-extrabold text-gray-900 tracking-tight sm:text-3xl"
      >
        Página no encontrada
      </h1>
      <p v-else class="mt-1 text-lg text-gray-500 text-center">
        Servicio con código
        <span class="font-semibold text-gray-600">{{ code }}</span> no
        encontrado
      </p>
      <div class="mt-5 flex space-x-3 sm:border-l sm:border-transparent">
        <a
          href="#"
          class="mx-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Soporte de contacto
        </a>
      </div>
    </main>
  </div>
</template>

<script setup>
import dogNotFound from "@/components/icons/dogNotFound.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const code = route.params.codigo;
</script>
