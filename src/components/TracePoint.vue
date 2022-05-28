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
      class="w-full bg-gray-300/30 shadow-md px-2 py-3 flex justify-between mb-5 md:mb-8"
    >
      <!-- Info trace-->
      <div class="flex flex-col flex-1 justify-center space-y-1">
        <!-- status -->
        <div class="text-md font-semibold text-logystoDarkBlue">
          {{ estados[status] }}
        </div>
        <template v-if="status === 'delivered'">
          <div class="text-md text-gray-600 font-semibold">
            {{ deliveryAddress }}
          </div>
          <span class="text-xs text-gray-600 font-medium"
            >punto de entrega</span
          >
        </template>
        <template v-if="status === 'collected'">
          <div class="text-md text-gray-600 font-semibold">
            {{ pickupAddress }}
          </div>
          <span class="text-xs text-gray-600 font-medium"
            >punto de recogida</span
          >
        </template>
      </div>
      <!-- Resources -->
      <template v-if="status === 'delivered' || status === 'collected'">
        <div class="flex w-1/4 justify-between items-center space-x-2 px-1">
          <!-- modal con carousel de images de pickupImages
         //icono gallery -->
          <Gallery
            class="h-6 w-6 stroke-logystoDarkBlue cursor-pointer"
            @click="modalShow = true"
          />
          <teleport to="#modals">
            <transition name="fade">
              <Modal @close="toggleModal" v-if="modalShow">
                <template v-if="status === 'collected'">
                  <Carousel :images="pickupImages" />
                </template>
                <template v-else>
                  <Carousel :images="deliveredImages" />
                </template>
              </Modal>
            </transition>
          </teleport>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Marker from "@/components/icons/Marker.vue";
import Gallery from "@/components/icons/Gallery.vue";
import { toRefs, ref, onMounted } from "vue";
import useFormatDate from "@/composables/formatDate";
import Modal from "@/components/Modal.vue";
import Carousel from "@/components/Carousel.vue";
onMounted(() => {
  const lines = document.getElementsByClassName("line-trace");
  for (const line of lines) {
    line.style.visibility = "visible";
  }
  document.getElementsByClassName("line-trace")[
    lines.length - 1
  ].style.visibility = "hidden";
});

const estados = {
  available: "Disponible",
  accepted: "Aceptado",
  collected: "Recolectado",
  in_transit: "En tránsito",
  delivered: "Entregado",
};
const props = defineProps({
  status: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  evidence: {
    type: Object,
    default: {},
  },
  locations: {
    type: Array,
    default: [],
  },
});

const { status, date, evidence, locations } = toRefs(props);

const [pickupAddress, deliveryAddress] = locations.value.map((key) => {
  return key.address;
});
const deliveredImages = [];

if (status.value === "delivered") {
  if (evidence.value.deliver.length) {
    evidence.value.deliver.forEach((element) => {
      deliveredImages.push(element);
    });
  }
}
const pickupImages = [];
if (status.value === "collected") {
  if (evidence.value.deliver.length) {
    evidence.value.pickup.image.forEach((element) => {
      pickupImages.push(element);
    });
  }
}

const { getDateTime } = useFormatDate();

const dateFormated = getDateTime(date.value);

const modalShow = ref(false);
const toggleModal = () => {
  modalShow.value = false;
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.25s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
.fade-leave-active {
  transition: all 0.25s ease;
}
</style>
