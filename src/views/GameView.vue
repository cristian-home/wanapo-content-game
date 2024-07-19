<script setup lang="ts">
import PairCounter from '@/components/PairCounter.vue'
import GameBoard from '@/components/GameBoard.vue'
import QLogo from '@/components/icons/QLogo.vue'
import { computed, onMounted, ref, watch } from 'vue'
import Button from '@/components/controls/Button.vue'
import Badge from '@/components/controls/Badge.vue'
import TimerGame from '@/components/icons/TimerGame.vue'
import { useIntervalFn } from '@vueuse/core'
import { invoke, until, useCounter } from '@vueuse/core'
import ModalDialog from '@/components/ModalDialog.vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import CountDown from '@/components/CountDown.vue'
import QR from '@/components/icons/QR.vue'
import { useMotion } from '@vueuse/motion'

const gameStore = useGameStore()
const router = useRouter()

const gameOverModal = ref(false)
const modalTitle = ref('')
const modalText = ref('')

const circleMosque = ref<HTMLDivElement | null>(null)
const circleIron = ref<HTMLDivElement | null>(null)

const startGameCountDown = ref(gameStore.startGameCountDown.valueOf())

const { count: timeLeft, dec: decTimeLeft } = useCounter(gameStore.getTimelimit)

const attempts = computed(() => gameStore.getAttempts)

const { pause, resume } = useIntervalFn(() => {
  decTimeLeft()
}, 1000)

pause()

invoke(async () => {
  await until(startGameCountDown).toBe(0)
  gameStore.startGame()
  resume()
})

invoke(async () => {
  await until(attempts).toBe(gameStore.getAttemptsLimit)
  endGame({ title: 'Juego Terminado', text: 'Se acabaron tus intentos' })
})

invoke(async () => {
  await until(attempts).toBe(gameStore.getAttemptsLimit)
  endGame({ title: 'Juego Terminado', text: 'Se acabaron tus intentos' })
})

invoke(async () => {
  await until(timeLeft).toBe(0)
  endGame({ title: 'Juego Terminado', text: 'Se acabo el tiempo' })
})

const endGame = async (
  options: { title: string; text: string } = { title: 'Juego Terminado', text: 'Fue un buen juego' }
) => {
  pause()
  saveGameState()

  gameOverModal.value = true
  modalTitle.value = options.title
  modalText.value = options.text

  await until(gameOverModal).toBe(false)

  router.push('/congrats')
}

const saveGameState = () => {
  gameStore.setCurrentGameStats({
    date: new Date(),
    attempts: gameStore.getAttempts,
    time: gameStore.getTimelimit - timeLeft.value,
    pairsFound: gameStore.getPairsFound
  })
}

watch(
  () => gameStore.getTilesUnmatched.length,
  (value) => {
    if (value === 0) {
      endGame({ title: 'Juego Terminado', text: 'Felicitaciones has completado el juego' })
    }
  }
)

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
  if (attempts.value < gameStore.getAttemptsLimit && timeLeft.value > 0) return false

  await animateLeave()
})

onMounted(() => {
  if (gameStore.gameStarted) resume()
})
</script>

<template>
  <div
    class="h-dvh w-full overflow-x-hidden overflow-y-hidden grid grid-cols-1 grid-rows-[auto_1fr_6rem] justify-items-center place-items-center gap-2"
  >
    <div class="px-4 w-full flex flex-row justify-between items-center gap-4">
      <div class="h-20 shrink-0 flex flex-row justify-start items-start gap-4">
        <QLogo class="fill-resolution-blue max-h-full max-w-full w-16 h-16" />
        <PairCounter
          class="h-full self-start"
          :pair-count="gameStore.getPairsFound"
          :max-pairs="gameStore.getMaxPosiblePairs"
        />
      </div>
      <div class="grow h-20 flex flex-row justify-end items-center pt-2">
        <img src="@/assets/img/content-logo.svg" class="h-full" />
      </div>
    </div>
    <div class="w-full h-[0] min-h-full flex flex-col justify-center items-center">
      <GameBoard />
    </div>
    <div class="w-full flex flex-row justify-between gap-2 p-2">
      <div class="pl-6">
        <Badge class="py-0">
          <template #left-icon>
            <TimerGame class="w-16 h-16 origin-right scale-150" :seconds="timeLeft" />
          </template>
          <div class="flex-col">
            <p class="leading-5 text-2xl whitespace-nowrap">
              {{ timeLeft }}
              <span class="text-lg leading-5"> segundos</span>
            </p>
            <p class="leading-5 text-2xl whitespace-nowrap">
              {{ gameStore.attempts }}/{{ gameStore.getAttemptsLimit }}
              <span class="text-lg leading-5"> intentos</span>
            </p>
          </div>
        </Badge>
      </div>

      <QR class="w-20 h-20" />
    </div>
  </div>
  <div
    class="scale-0 z-30 fixed bottom-0 left-0 w-1 h-1 bg-mosque rounded-full"
    ref="circleMosque"
  ></div>
  <div
    class="scale-0 z-30 fixed bottom-0 left-0 w-1 h-1 bg-iron rounded-full"
    ref="circleIron"
  ></div>
  <CountDown v-model:seconds="startGameCountDown" v-if="!gameStore.gameStarted" />
  <ModalDialog
    :is-open="gameOverModal"
    :title="modalTitle"
    :message="modalText"
    @on:modalClose="() => (gameOverModal = false)"
  >
    <template #actions="{ close }">
      <Button type="button" @click="close">Aceptar</Button>
    </template>
  </ModalDialog>
</template>

<style scoped></style>
