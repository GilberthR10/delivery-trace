<template>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in images" :key="item.id" class="h-full">
      <img :src="item.url" class="object-contain w-full" />
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { toRefs } from "vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [EffectFade, Navigation, Pagination];

const props = defineProps({
  images: {
    type: Array,
    default: [],
  },
});

const { images } = toRefs(props);
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: lightgray;
}
.swiper-button-disabled {
  visibility: hidden;
}
</style>
