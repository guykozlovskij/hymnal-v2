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
    <section id="change-log">
      <h3>Pakeitimų Žurnalas</h3>
      <ul class="update-card">
        <strong>2024-02-01</strong>
        <p>Nauji himnai perkelti į pagrindinį himnyną:</p>
        <li>"Raginimas Bendrauti su Viešpačiu" -> himnas #17</li>
        <li>"Viešpaties Šlovininimas už Jo Išgelėbjimą" -> himnas #13</li>
        <li>"Štai Žmogus Šlovėje" -> himnas #8</li>
      </ul>
      <ul class="update-card">
        <strong>2024-01-30</strong>
        <li>Himnas #1 - "šventoji" -> "Šventoji"</li>
        <li>Himnas #28 - pakeista melodija</li>
      </ul>
    </section>
  </section>
</template>
