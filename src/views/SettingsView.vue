<script setup>
import { useDark, useToggle } from '@vueuse/core'
</script>

<script>
const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <section>
    <h1>Nustatymai</h1>
    <p>Dark theme {{ isDark }}</p>
    <button @click="toggleDark()">Toggle Color Mode</button>
  </section>
</template>
