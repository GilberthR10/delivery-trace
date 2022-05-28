<template>
  <div
    class="backdrop inset-0 grid place-content-center"
    @click.self="closeModal"
  >
    <div
      class="modal max-w-xs bg-white p-4 mx-auto space-y-2 md:max-w-md lg:max-w-lg"
    >
      <div class="flex justify-between">
        <span class="font-semibold text-logystoDarkBlue">Evidencia</span>
        <Close @click="closeModal" class="h-5 cursor-pointer" />
      </div>
      <slot></slot>
      <div
        @click="closeModal"
        class="w-full text-center border-2 border-logystoDarkBlue text-lg cursor-pointer"
      >
        cerrar
      </div>
    </div>
  </div>
</template>
<script>
import Close from "@/components/icons/Close.vue";
export default {
  components: { Close },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.backdrop {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 99999;
}
</style>
