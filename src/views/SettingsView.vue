<script setup>
import { chords } from "../stores/chords.js"
</script>

<script>

export default {
  data() {
    return {
      chordsOn: JSON.parse(localStorage.getItem('chordsEnabled'))
    }
  },
}

</script>

<template>
  <div class="top">Nustatymai</div>
  <section id="settings-view">
    <label class="switch">
      <input type="checkbox" v-model="chordsOn" @click="chords.setIsEnabled()">
      <span class="slider round"></span>
    </label>
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
