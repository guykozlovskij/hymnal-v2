<script setup>

import { ref, watch } from 'vue'
import { chords } from "../stores/chords.js"

const chordsOn = ref(JSON.parse(localStorage.getItem('chordsEnabled')) || false)

watch(chordsOn, (newVal) => {
  localStorage.setItem('chordsEnabled', JSON.stringify(newVal))
  chords.setIsEnabled(newVal)
})

</script>

<template>
  <div class="top">Nustatymai</div>
  <section id="settings-view">
    <hr class="solid">
    <div class="setting">
      <p>Akordai</p>
      <label class="switch">
        <input type="checkbox" @click.stop="chords.setIsEnabled()" v-model="chordsOn">
        <span class="slider round"></span>
      </label>
    </div>
    <hr class="solid">
  </section>
      <div class="bottom">
      <div class="button-parent">
        <button @click="$router.push('/')" role="link">⌂</button>
      </div>
    </div>
</template>
