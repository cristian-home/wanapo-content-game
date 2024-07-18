<script setup lang="ts">
import Button from '@/components/controls/Button.vue'
import { useGameStore } from '@/stores/game'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const gameStore = useGameStore()

const guardar = (e: Event) => {
  const formData = new FormData(e.target as HTMLFormElement)

  const startGameCountDown = Number(formData.get('startGameCountDown'))
  const timeLimit = Number(formData.get('timeLimit'))
  const attemptsLimit = Number(formData.get('attemptsLimit'))

  console.log(startGameCountDown, timeLimit, attemptsLimit)

  gameStore.startGameCountDown = startGameCountDown
  gameStore.timeLimit = timeLimit
  gameStore.attemptsLimit = attemptsLimit
}

onMounted(() => {})
</script>

<template>
  <div class="w-full h-full p-8 flex flex-col justify-center items-center">
    <form @submit.prevent="guardar" class="w-full max-w-xl">
      <fieldset
        class="border border-resolution-blue rounded-2xl overflow-x-hidden flex flex-col items-center justify-center gap-4 p-4"
      >
        <legend class="text-3xl text-resolution-blue">Configuración</legend>

        <div class="flex flex-col gap-1 w-full">
          <label class="text-xl text-resolution-blue">Tiempo de previsualización</label>
          <input
            class="rounded-2xl border border-resolution-blue py-4 px-10 text-xl"
            type="number"
            name="startGameCountDown"
            :value="gameStore.startGameCountDown"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label class="text-xl text-resolution-blue">Tiempo limite de juego</label>
          <input
            class="rounded-2xl border border-resolution-blue py-4 px-10 text-xl"
            type="number"
            name="timeLimit"
            :value="gameStore.timeLimit"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label class="text-xl text-resolution-blue">Limite de intentos</label>
          <input
            class="rounded-2xl border border-resolution-blue py-4 px-10 text-xl"
            type="number"
            name="attemptsLimit"
            :value="gameStore.attemptsLimit"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <Button type="submit">Guardar</Button>
        </div>
        <div class="flex flex-col gap-1 w-full">
          <RouterLink :to="{ name: 'home' }" custom v-slot="{ navigate }">
            <Button type="button" @click="navigate">Volver a inicio</Button>
          </RouterLink>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style scoped></style>
