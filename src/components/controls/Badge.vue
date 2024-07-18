<script setup lang="ts">
import IonHeart from '~icons/ion/heart'
</script>

<template>
  <div
    class="transition h-auto text-xl shadow-md outline outline-4 outline-white bg-gradient-to-t from-seagull from-5% via-ebb-500 via-50% to-ebb-500 to-90% text-endeavour rounded-full px-4 py-2 flex flex-row gap-2 justify-center items-center"
  >
    <slot name="left-icon">
      <IonHeart class="w-4 h-4 -rotate-45 text-light-orchid" />
    </slot>
    <slot />
    <slot name="right-icon">
      <IonHeart class="w-4 h-4 rotate-45 text-light-orchid" />
    </slot>
  </div>
</template>

<style scoped></style>
