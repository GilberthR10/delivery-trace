<template>
  <div class="container mx-auto px-1 pt-3 md:px-4">
    <Header />
    <Suspense>
      <Main />
      <!-- loading state via #fallback slot -->
      <template #fallback><Loading /></template>
    </Suspense>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Loading from "@/components/Loading.vue";
</script>

<style></style>
