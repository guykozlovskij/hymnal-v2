<script setup>
import json from '../data/hymnal-data.json'
</script>

<script>
export default {
  data() {
    return {
      hymnalData: json
    }
  }
}
</script>

<template>
  <main>
    <h1>Himnynas</h1>
    <div v-for="hymn in hymnalData" :key="hymn.number">
      <button @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number }}</button>
    </div>
  </main>
</template>
