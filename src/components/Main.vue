<template>
  <div class="mx-auto max-w-7xl md:py-8 mt-5 flex flex-col">
    <div
      class="px-2 w-full md:ml-auto flex items-center py-6 space-x-5 mb-4 md:w-9/12 xl:w-4/5"
    >
      <button
        type="button"
        class="inline-flex items-center p-1.5 text-sm font-medium text-center rounded border-2 border-logystoDarkBlue text-logystoDarkBlue hover:bg-logystoDarkBlue/5"
      >
        <ArrowBack />
      </button>
      <p>Información del servicio</p>
    </div>
    <template v-if="response">
      <TracePointMapbox
        :contact="contact"
        :locations="locations"
        :guide="guide"
        :order="order"
        :marker1="marker1"
        :marker2="marker2"
        :date="date"
      />
      <trace-point
        v-for="(item, i) in trace"
        :key="i"
        :status="item.status"
        :date="item.date"
        :locations="locations"
        :evidence="evidence"
      />
    </template>
  </div>
</template>

<script setup>
import TracePoint from "@/components/TracePoint.vue";
import TracePointMapbox from "@/components/TracePointMapbox.vue";
import ArrowBack from "@/components/icons/ArrowBack.vue";
import { onUpdated } from "vue";
import useTraceability from "@/composables/traceability";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const { email, codigo } = route.params;
const { getTraceability } = useTraceability();

const { response, status, message } = await getTraceability(email, codigo);
if (!status) {
  router.push({
    name: "NotFound",
  });
}

onUpdated(() => {
  const lines = document.getElementsByClassName("line-trace");
  for (const line of lines) {
    line.style.visibility = "visible";
  }
  document.getElementsByClassName("line-trace")[
    lines.length - 1
  ].style.visibility = "hidden";
});

const {
  contact,
  date,
  evidence,
  locations,
  trace,
  vueltap_guide: guide,
  order_number: order,
} = response;
const [marker1, marker2] = response.locations;
</script>

<style scoped></style>
