import { nextTick, ref } from 'vue'
import { defineStore } from 'pinia'
import { useMotion } from '@vueuse/motion'

export const useAppStore = defineStore('app', () => {
  const circleMosque = ref<HTMLDivElement | null>(null)
  const circleIron = ref<HTMLDivElement | null>(null)

  const rippleTransition = async () => {
    await new Promise((resolve) => {
      useMotion(circleMosque, {
        initial: {
          scale: 0,
          opacity: 1
        },
        enter: {
          scale: Math.max(window.innerWidth, window.innerHeight) / 2 + 150,
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
                  scale: Math.max(window.innerWidth, window.innerHeight) / 2 + 150,
                  opacity: 1,
                  transition: {
                    duration: 500,
                    onComplete: () => {
                      resolve(true)
                      nextTick(() => {
                        setTimeout(() => {
                          circleMosque.value!.style.transform = 'scale(0)'
                          circleIron.value!.style.transform = 'scale(0)'
                        }, 100)
                      })
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

  return {
    circleMosque,
    circleIron,
    rippleTransition
  }
})
