<template>
  <!-- trace item -->
  <div class="flex flex-col md:flex-row justify-between">
    <!-- Trace item date -->
    <div
      class="md:px-6 flex md:flex-col md:mr-4 lg:mr-12 items-center justify-between px-1 md:justify-start"
    >
      <span class="text-center text-md text-gray-600 min-w-max">{{
        dateFormated.date
      }}</span>
      <span class="text-center font-semibold md:text-sm md:mt-1">{{
        dateFormated.hour
      }}</span>
    </div>
    <!-- Trace item marker container -->
    <div class="hidden md:flex flex-col items-center md:mr-6 lg:mr-10">
      <!-- Trace item marker -->
      <div>
        <div
          class="flex items-center justify-center w-10 h-10 border rounded-full bg-logystoOrange"
        >
          <Marker class="fill-white" />
        </div>
      </div>
      <!-- Trace item line -->
      <div class="w-1 h-full bg-gray-300 line-trace"></div>
    </div>
    <!-- Trace info content -->
    <div
      class="w-full flex-col bg-gray-300/30 shadow-md px-2 py-3 flex justify-between mb-5 md:mb-8"
    >
      <!-- header -->
      <div class="p-4 flex justify-between">
        <div class="flex flex-col">
          <div class="space-x-1">
            <span class="text-gray-600 font-bold">No. Orden:</span>
            <span class="font-light">{{ order || "No incluido" }}</span>
          </div>
          <span class="text-gray-500 text-xs font-light">Entregar Sobre</span>
        </div>

        <div class="flex">
          <div class="space-x-1">
            <span class="text-gray-600 font-bold">No. Guía:</span>
            <span class="font-light">{{ guide }}</span>
          </div>
        </div>
      </div>
      <!-- Mapbox content-->
      <div class="justify-center relative h-56 w-full overflow-hidden">
        <div class="inset-0 absolute w-full" ref="mapbox"></div>
      </div>

      <!-- footer -->
      <div class="p-4 flex flex-col space-y-2">
        <div class="flex items-center space-x-4" v-for="(item, i) in locations">
          <span
            class="bg-logystoDarkBlue text-white rounded-lg py-0.5 font-semibold text-xs min-w-[28px] text-center"
            >{{ i + 1 }}</span
          >
          <span class="text-sm">{{ item.address }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-sm font-semibold text-gray-600">Contacto:</span>
          <span class="text-sm">{{ contact.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Marker from "@/components/icons/Marker.vue";
import useCreateMap from "@/composables/mapbox";
import useFormatDate from "@/composables/formatDate";
import { ref, onMounted, toRefs, nextTick } from "vue";
const mapbox = ref(null);
const { initMap } = useCreateMap();
onMounted(async () => {
  initMap(mapbox.value, marker1.value, marker2.value);
  await nextTick();
});

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  locations: {
    type: Array,
    default: [],
  },
  contact: {
    type: Object,
    required: true,
  },
  guide: {
    type: Number,
    required: true,
  },
  order: {
    type: String,
  },
  marker1: {
    type: Object,
    required: true,
  },
  marker2: {
    type: Object,
    required: true,
  },
});

const { date, locations, contact, guide, order, marker1, marker2 } =
  toRefs(props);

const { getDateTime } = useFormatDate();

const dateFormated = getDateTime(date.value);
</script>
