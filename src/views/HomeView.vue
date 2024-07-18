<script setup lang="ts">
import Button from '@/components/controls/Button.vue'
import QLogo from '@/components/icons/QLogo.vue'
import router from '@/router'
import { useGameStore } from '@/stores/game'
import { onLongPress } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'
import { onMounted, ref, type Ref } from 'vue'
import { RouterLink, onBeforeRouteLeave } from 'vue-router'

const qLogoRef = ref<HTMLDivElement | null>(null)
const pageContent = ref<HTMLDivElement | null>(null)
const winnyLogo = ref<HTMLImageElement | null>(null)
const start = ref<HTMLDivElement | null>(null)
const buttonStart = ref<HTMLButtonElement | null>(null)
const footerParagraphLeft = ref<HTMLParagraphElement | null>(null)
const footerParagraphRight = ref<HTMLParagraphElement | null>(null)
const buttonStartRef = ref<HTMLButtonElement | null>(null)

const floatingElements = [winnyLogo, start, buttonStart]
const fixedElements = [footerParagraphLeft, footerParagraphRight]
const absoluteElements = [qLogoRef]

const animateEnter = (ref: Ref<HTMLElement | null>, index: number = 0) => {
  useMotion(ref, {
    initial: {
      y: 100,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 20,
        delay: index * 50
      }
    }
  })
}

const animateFloating = (ref: Ref<HTMLElement | null>, index: number = 0) => {
  const { variant } = useMotion(ref, {
    initial: {
      y: 100,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 350,
        damping: 20,
        delay: index * 150,
        onComplete: () => {
          variant.value = 'levitate'
        }
      }
    },
    levitate: {
      y: 15,
      transition: {
        duration: 2000,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror'
      }
    }
  })
}

const animateLeave = async () => {
  await Promise.all([
    ...floatingElements.reverse().map((ref, index) => {
      return new Promise((resolve) => {
        useMotion(ref, {
          initial: {
            scale: 1,
            opacity: 1
          },
          enter: {
            scale: 0,
            opacity: 0,
            transition: {
              // type: 'spring',
              // stiffness: 350,
              delay: index * 150,
              onComplete: () => {
                resolve(true)
              }
            }
          }
        })
      })
    }),

    ...fixedElements.reverse().map((ref, index) => {
      return new Promise((resolve) => {
        useMotion(ref, {
          initial: {
            y: 0,
            opacity: 1
          },
          enter: {
            y: 100,
            opacity: 0,
            transition: {
              // type: 'spring',
              // stiffness: 350,
              // damping: 20,
              delay: index * 150,
              onComplete: () => {
                resolve(true)
              }
            }
          }
        })
      })
    })
  ])
}

onBeforeRouteLeave(async () => {
  await animateLeave()
})

// onLongPress(
//   buttonStartRef,
//   () => {
//     router.push({ name: 'config' })
//   },
//   {
//     // delay: 1500,
//     modifiers: {
//       prevent: true
//     }
//   }
// )

onMounted(() => {
  absoluteElements.forEach((ref, index) => {
    useMotion(ref, {
      initial: {
        opacity: 0,
        scale: 0
      },
      enter: {
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 350,
          damping: 20,
          delay: index * 100
        }
      }
    })
  })

  floatingElements.forEach((ref, index) => {
    animateFloating(ref, index)
  })

  fixedElements.forEach((ref, index) => {
    animateEnter(ref, index)
  })
})
</script>

<template>
  <div class="h-dvh w-full overflow-x-hidden">
    <QLogo class="absolute top-2 left-2 w-16 h-16 fill-endeavour" ref="qLogoRef" />
    <div
      ref="pageContent"
      class="w-full h-dvh overflow-x-hidden overflow-y-hidden grid grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-center align-items-center gap-4 p-4"
    >
      <div class="col-start-1 col-end-1 row-start-1 row-end-1">
        <img src="@/assets/img/winny-logo_600x600.webp" class="max-h-28" ref="winnyLogo" />
      </div>
      <div
        ref="start"
        :leave="{ opacity: 0 }"
        class="self-start col-start-1 col-end-1 row-start-2 row-end-2 flex flex-col justify-center items-center gap-6"
      >
        <div class="row-start-1 row-end-1">
          <img src="@/assets/img/start_600x600.webp" class="max-h-80" />
        </div>
        <div class="col-start-1 col-end-1 row-start-2 row-end-2" ref="buttonStart">
          <RouterLink to="/game" custom v-slot="{ navigate }">
            <Button type="button" @click="navigate" ref="buttonStartRef">Iniciar</Button>
          </RouterLink>
        </div>
      </div>
      <div
        class="w-full text-endeavour col-start-1 col-end-1 row-start-3 row-end-3 flex flex-row justify-center gap-10"
      >
        <div class="max-w-64 w-1/2">
          <p class="text-lg text-center" ref="footerParagraphLeft">
            En
            <span class="text-2xl text-mauvelous"
              >{{ useGameStore().startGameCountDown }} segundos</span
            >
            deberas memorizar las fichas
          </p>
        </div>
        <div class="max-w-64 w-1/2">
          <p class="text-lg text-center" ref="footerParagraphRight">
            Son
            <span class="text-2xl text-mauvelous"
              >{{ useGameStore().attemptsLimit }} movimientos</span
            >
            para armar la mayor cantidad de parejas
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
