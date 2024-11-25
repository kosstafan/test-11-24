<script setup>
import { ref, computed } from 'vue'
import IconPlay from './icons/IconPlay.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeItemId = ref(props.items[0].id)
const activeItem = computed(() => {
  return props.items.find((i) => i.id === activeItemId.value)
})
</script>
<template>
  <div class="flex flex-col-reverse lg:flex-col gap-[10px]">
    <div class="w-full block rounded-[10px] overflow-hidden relative">
      <img :src="activeItem.image" alt="" />
      <div class="absolute inset-0 bg-overlay"></div>
      <a
        :href="activeItem.link"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[16px] rounded-full w-[80px] h-[80px] flex items-center justify-center"
      >
        <IconPlay />
      </a>
      <div
        class="absolute rounded-[8px] bottom-[17px] inset-x-[17px] flex justify-between backdrop-blur-[25px] px-4 py-[10px] text-white"
      >
        <div class="">{{ activeItem.name }}</div>
        <div class="">{{ activeItem.duration }}</div>
      </div>
    </div>
    <div class="flex gap-[10px] justify-between">
      <button
        v-for="video in props.items"
        :key="video.id"
        class="px-[50px] py-[8px] rounded-[4px] text-sm text-primary"
        :class="{ 'border border-primary': video.id === activeItemId }"
        @click="activeItemId = video.id"
      >
        {{ video.name }}
      </button>
    </div>
  </div>
</template>
