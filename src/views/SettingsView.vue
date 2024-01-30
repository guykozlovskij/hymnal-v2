<script setup>
// import { useDark, useToggle  } from '@vueuse/core'
// import { VueToggles } from "vue-toggles"
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
</script>

<template>
  <section id="settings-view">
    <h1>Nustatymai</h1>
    <!-- <p class="settings-title">Tamsi Tema</p> -->
    <!-- <VueToggles :width="50" @click="toggleDark()" value="false" /> -->
    <section id="change-log">
      <h3>Pakeitimų Žurnalas</h3>
      <ul class="update-card">
        <strong>2024-01-30</strong>
        <li>Himnas #1 - "šventoji" -> "Šventoji"</li>
        <li>Himnas #28 - pakeista melodija</li>
      </ul>
    </section>
  </section>
</template>
