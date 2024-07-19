<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from './stores/app'
import { storeToRefs } from 'pinia'

const store = useAppStore()
const { circleIron, circleMosque } = storeToRefs(store)
</script>

<template>
  <div class="h-dvh w-full overflow-x-hidden overflow-y-hidden">
    <RouterView />
    <div
      class="scale-0 z-30 fixed bottom-0 left-0 w-1 h-1 bg-mosque rounded-full"
      ref="circleMosque"
    ></div>
    <div
      class="scale-0 z-30 fixed bottom-0 left-0 w-1 h-1 bg-iron rounded-full"
      ref="circleIron"
    ></div>
  </div>
</template>

<style scoped></style>
