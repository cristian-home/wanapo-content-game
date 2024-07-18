<script setup lang="ts">
import greenArc from '@/assets/img/green-arc.webp'
import Button from '@/components/controls/Button.vue'
import QLogo from '@/components/icons/QLogo.vue'
import TimerMain from '@/components/icons/TimerMain.vue'
import { useGameStore } from '@/stores/game'
import { useMotion } from '@vueuse/motion'
import { onMounted, ref } from 'vue'
import { RouterLink, onBeforeRouteLeave, useRouter } from 'vue-router'

const gameStore = useGameStore()
const router = useRouter()

const circleMosque = ref<HTMLDivElement | null>(null)
const circleIron = ref<HTMLDivElement | null>(null)

const animateLeave = async () => {
  await new Promise((resolve) => {
    useMotion(circleMosque, {
      initial: {
        scale: 0,
        opacity: 1
      },
      enter: {
        scale: 600,
        opacity: 1,
        transition: {
          duration: 500,
          onComplete: () => {
            useMotion(circleIron, {
              initial: {
                scale: 0,
                opacity: 1
              },
              enter: {
                scale: 600,
                opacity: 1,
                transition: {
                  duration: 500,
                  onComplete: () => {
                    resolve(true)
                  }
                }
              }
            })
          }
        }
      }
    })
  })
}

onBeforeRouteLeave(async () => {
  await animateLeave()
})

onMounted(() => {})
</script>

<template>
  <div class="h-dvh w-full overflow-x-hidden grid grid-cols-1 grid-rows-[1fr_1fr_10rem]">
    <QLogo
      @click="router.push({ name: 'config' })"
      class="absolute top-2 left-2 w-16 max-w-[15%] h-16 fill-resolution-blue"
      ref="qLogoRef"
    />
    <div class="w-full flex flex-col justify-center items-center">
      <img src="@/assets/img/content-logo.svg" class="max-h-32 max-w-[50%]" ref="winnyLogo" />
    </div>
    <div class="w-full flex flex-col justify-start items-center relative">
      <img class="w-full -mt-32" :src="greenArc" alt="" srcset="" />
      <div class="w-full grow bg-mosque">
        <img
          class="absolute bottom-0 left-0 max-w-[70%] max-h-[120%] self-end"
          src="@/assets/img/nurse.webp"
          alt=""
        />
        <div
          class="scale-0 z-30 fixed bottom-0 left-0 w-1 h-1 bg-mosque rounded-full"
          ref="circleMosque"
        ></div>
        <div
          class="scale-0 z-30 fixed bottom-0 left-0 w-1 h-1 bg-iron rounded-full"
          ref="circleIron"
        ></div>
        <div class="w-full h-full min-h-[150px] flex flex-row justify-end items-start">
          <div class="w-[60%]">
            <p class="font-bold text-3xl text-center text-white italic">
              <span class="text-2xl">Participa en el </span>
              <br />
              <span>desafío mental</span>
              <br />
              <span>Content</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <RouterLink to="/game" custom v-slot="{ navigate }">
        <Button class="shadow-xl z-20 -mt-8" type="button" @click="navigate" ref="buttonStartRef">
          <span>Inicio</span>
        </Button>
      </RouterLink>

      <div
        class="text-resolution-blue w-full h-full flex flex-row justify-center items-center gap-10 px-5"
      >
        <div class="w-1/2 italic font-medium text-xl">
          <div class="flex flex-row gap-2">
            <TimerMain class="w-16" :seconds="gameStore.startGameCountDown" />
            <p class="leading-5">
              <span>En </span>
              <span class="font-bold text-4xl leading-5 text-robin-s-egg-blue">
                {{ gameStore.startGameCountDown }}
              </span>
              <span class="text-xl leading-5 text-robin-s-egg-blue"> segundos </span>
              <br />
              <span>deberas memorizar las fichas</span>
            </p>
          </div>
        </div>
        <div class="w-1/2 font-medium text-xl">
          <p class="leading-5">
            <span> Son </span>
            <span class="font-bold text-6xl leading-5 text-robin-s-egg-blue">
              {{ gameStore.attemptsLimit }}
            </span>
            <span> movimientos </span>
            <span> para armar la mayor cantidad de parejas </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
