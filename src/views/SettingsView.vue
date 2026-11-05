<script setup>

import { ref, watch } from 'vue'
import { chords } from "../stores/chords.js"

const chordsOn = ref(chords.value.isEnabled)
const widgetOn = ref(localStorage.getItem('hymnalWidgetEnabled') === 'true')

watch(chordsOn, (newVal) => {
  chords.value.setIsEnabled(newVal)
})

watch(widgetOn, (newVal) => {
  localStorage.setItem('hymnalWidgetEnabled', JSON.stringify(newVal))
})

</script>

<template>
  <div class="top">Nustatymai</div>
  <section id="settings-view">
    <hr class="solid">
    <div class="setting">
      <p>Akordai</p>
      <label class="switch">
        <input type="checkbox" v-model="chordsOn">
        <span class="slider round"></span>
      </label>
    </div>
    <hr class="solid">
    <div class="setting">
      <p>Melodijos grotuvas</p>
      <label class="switch">
        <input type="checkbox" v-model="widgetOn">
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
