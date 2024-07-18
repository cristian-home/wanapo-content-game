<script setup lang="ts">
import { RouterView } from 'vue-router'
import Cloud from '@/components/icons/Cloud.vue'
import SolarStarBold from '~icons/solar/star-bold'
import { onMounted, ref } from 'vue'
import { generateUniformPositions } from '@/lib/utils/positions'
import { useMotion } from '@vueuse/motion'
import { useGameStore } from './stores/game'

const gameStore = useGameStore()

const stars = generateUniformPositions(10, {
  minGridSize: 10,
  maxGridSize: 100,
  minSize: 2,
  maxSize: 5
})

const clouds = generateUniformPositions(5, {
  minGridSize: 3,
  maxGridSize: 10,
  minOpacity: 0.2,
  maxOpacity: 1
})

const starsRefs = ref<HTMLDivElement[]>([])

const cloudRefs = ref<HTMLDivElement[]>([])

onMounted(() => {
  starsRefs.value.forEach((ref, index) => {
    const { variant } = useMotion(ref, {
      initial: {
        scale: 0.5,
        opacity: 0,
        rotate: 360
      },
      enter: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 5000,
          delay: index * 50,
          onComplete: () => {
            variant.value = 'rotate'
          }
        }
      },
      rotate: {
        rotate: 360,
        transition: {
          delay: index * 50,
          duration: 40000,
          repeat: Infinity,
          ease: 'linear'
        }
      }
    })
  })

  cloudRefs.value.forEach((ref, index) => {
    const { variant } = useMotion(ref, {
      initial: {
        y: -100,
        opacity: 0,
        rotate: 0
      },
      enter: {
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 40,
          damping: 20,
          delay: index * 50,
          onComplete: () => {
            variant.value = 'levitate'
          }
        }
      },
      levitate: {
        y: 15,
        transition: {
          delay: index * Math.random() * 250,
          duration: 3000,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror'
        }
      }
    })
  })
})
</script>

<template>
  <div class="h-dvh w-full overflow-x-hidden overflow-y-hidden">
    <div class="fixed w-full h-full -z-10">
      <!-- <pre>store</pre>
      <pre>{{ { startGameCountDown: gameStore.startGameCountDown } }}</pre>
      <pre>{{ { attemptsLimit: gameStore.attemptsLimit } }}</pre>
      <pre>{{ { timeLimit: gameStore.timeLimit } }}</pre>
      <pre>{{ { gameStarted: gameStore.gameStarted } }}</pre>
      <pre>{{ { attempts: gameStore.attempts } }}</pre>
      <pre>{{ { currentGameStats: gameStore.currentGameStats } }}</pre> -->
      <div
        class="-z-10"
        v-for="(cloud, i) in clouds"
        :key="i"
        :style="{
          position: 'absolute',
          left: `${cloud.x}%`,
          top: `${cloud.y}%`
        }"
        ref="cloudRefs"
      >
        <Cloud class="-z-10 w-32 h-32" />
      </div>
      <div
        class="-z-10"
        v-for="(star, i) in stars"
        :key="i"
        :style="{
          position: 'absolute',
          left: `${star.x}%`,
          top: `${star.y}%`
        }"
        ref="starsRefs"
      >
        <SolarStarBold
          class="text-seagull-50"
          :style="{
            width: `${star.w}rem`,
            height: `${star.h}rem`,
            opacity: star.opacity
          }"
        />
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped></style>
