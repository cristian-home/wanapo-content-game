<template>
  <div
    class="transition h-auto text-xl shadow-md bg-iron bg-gradient-to-r from-iron-300 via-iron-50 to-iron-300 text-resolution-blue italic px-4 py-0 flex flex-row gap-2 justify-center items-center rounded-se-[23px_30px] rounded-es-[23px_30px]"
  >
    <slot name="left-icon"> </slot>
    <slot />
    <slot name="right-icon"> </slot>
  </div>
</template>

<style scoped></style>
