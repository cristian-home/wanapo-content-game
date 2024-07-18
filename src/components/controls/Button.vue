<script setup lang="ts"></script>

<template>
  <button
    class="text-4xl font-sans font-bold text-iron italic transition h-16 duration-300 hover:shadow-xl hover:scale-105 active:scale-95 px-12 py-0 flex flex-row gap-2 justify-center items-center bg-robin-s-egg-blue rounded-se-[23px_30px] rounded-es-[23px_30px]"
  >
    <div
      class="px-2 bg-iron bg-gradient-to-r from-iron-300 via-iron-50 to-iron-300 bg-clip-text text-4xl text-transparent font-bold font-ubuntu tracking-wider"
    >
      <slot />
    </div>
  </button>
</template>

<style scoped></style>
