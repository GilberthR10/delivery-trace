<template>
  <div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="fixed inset-0 flex z-40" role="dialog" aria-modal="true">
      <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <!-- overlay -->
      <div
        @click.self="closeSidebar"
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
      ></div>

      <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
      <!-- off canva menu -->
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <!-- close button -->
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button
            @click.stop="closeSidebar"
            type="button"
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <Close class="stroke-white h-8 w-8" />
          </button>
        </div>

        <!-- firts group -->
        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-14 w-auto mx-auto"
              src="@/assets/logysto.png"
              alt="logysto logo"
            />
          </div>
          <nav class="mt-5 px-2 space-y-1">
            <sidebar-item
              v-for="(item, i) in items"
              :key="i"
              :text="item.text"
              :icon="item.icon"
            />
          </nav>
        </div>

        <!-- bottom item -->
        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <a
                href="#"
                class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                <ArrowLeftCircle
                  class="group-hover:text-gray-500 group-hover:fill-gray-100 mr-4 flex-shrink-0 h-6 w-6"
                />
                Cerrar sesión
              </a>
            </div>
          </a>
        </div>
      </div>

      <div class="flex-shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeftCircle from "@/components/icons/ArrowLeftCircle.vue";
import Close from "@/components/icons/Close.vue";
import SidebarItem from "@/components/SidebarItem.vue";

const emits = defineEmits(["close"]);

const closeSidebar = () => {
  emits("close");
};
const items = [
  { icon: "Helmet", text: "Solicitar envio" },
  { icon: "Motocicle", text: "Solicitar aliado" },
  { icon: "Clock", text: "Servicios" },
  { icon: "Account", text: "Mi cuenta" },
  { icon: "Promotion", text: "Promociones" },
];
</script>
