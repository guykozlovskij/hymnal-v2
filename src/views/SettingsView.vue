<script setup>
// import { useDark, useToggle  } from '@vueuse/core'
// import { VueToggles } from "vue-toggles"
import {chords} from "../stores/chords.js"
</script>

<script>
// export const isDark = useDark({
//   default: "light",
//   selector: "body", //element to add attribute to
//   attribute: "theme", // attribute name
//   valueDark: "custom-dark", // attribute value for dark mode
//   valueLight: "custom-light", // attribute value for light mode
// });
// const toggleDark = useToggle(isDark);
export default {
  data() {
    return {
      displayChords: false
    } 
  },
  methods: {
    toggleChords() {
      this.displayChords = !this.displayChords
      console.log(this.displayChords)
    }
  }
}


</script>

<template>
  <div class="top">Nustatymai</div>
  <section id="settings-view">
    <button @click="toggleChords()">chords test</button>
    <button @click="chords.setIsEnabled()">Toggle</button>
    <!-- <p class="settings-title">Tamsi Tema</p> -->
    <!-- <VueToggles :width="50" @click="toggleDark()" value="false" /> -->
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
