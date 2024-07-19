<script setup lang="ts">
import Button from '@/components/controls/Button.vue'
import QLogo from '@/components/icons/QLogo.vue'
import QR from '@/components/icons/QR.vue'
import { useAppStore } from '@/stores/app'
import { useGameStore } from '@/stores/game'
import { onMounted } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'

const gameStore = useGameStore()
const store = useAppStore()
const router = useRouter()

const newGame = () => {
  gameStore.newGame()
  router.push({ name: 'home' })
}

onBeforeRouteLeave(async () => {
  await store.rippleTransition()
})

onMounted(() => {})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{
      opacity: 1,
      transition: {
        delay: 100,
        duration: 500
      }
    }"
    class="h-dvh w-full overflow-x-hidden grid grid-cols-1 grid-rows-[1fr_1fr_10rem_10rem]"
  >
    <QLogo
      @click="router.push({ name: 'config' })"
      class="absolute top-2 left-2 w-16 max-w-[15%] h-16 fill-resolution-blue"
    />
    <div class="w-full flex flex-col justify-center items-center">
      <img src="@/assets/img/content-logo.svg" class="max-h-32 max-w-[50%]" />
    </div>
    <div class="w-full flex flex-col justify-start items-center relative">
      <img
        class="w-full -mt-[40%] xs:-mt-[30%]"
        src="@/assets/img/grey-arc.webp"
        alt=""
        srcset=""
      />
      <div class="w-full grow bg-geyser">
        <img
          class="absolute bottom-0 left-0 max-w-[50%] max-h-[120%] self-end"
          src="@/assets/img/doctor.webp"
          alt=""
        />
        <div class="w-full h-full min-h-[150px] flex flex-row justify-end items-center">
          <div class="w-[60%]">
            <p class="font-bold text-4xl sm:text-5xl text-center text-resolution-blue italic">
              ¡Muy Bien!
            </p>
            <p class="font-bold text-3xl sm:text-4xl text-center text-resolution-blue italic">
              felicitaciones
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 w-full grow bg-geyser border-t-[8px] border-iron-500">
      <p class="leading-8 text-center text-2xl sm:text-3xl italic font-bold text-mosque">
        Lograste armar
      </p>
      <p class="leading-8 text-center text-4xl sm:text-5xl italic font-bold text-resolution-blue">
        {{ gameStore.getPairsFound }} parejas
      </p>
    </div>
    <div class="w-full flex flex-col justify-center items-center bg-mosque">
      <Button class="shadow-xl -mt-8" type="button" @click="newGame">Aceptar</Button>

      <div class="w-full h-full flex flex-row justify-end items-center gap-10 px-5">
        <div class="w-24 h-24 bg-white p-2 rounded-se-[15px_15px] rounded-es-[15px_15px]">
          <QR />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
