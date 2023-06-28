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
    <div v-for="hymn in hymnalData" :key="hymn.number">
      <button>{{ hymn.number }}</button>
    </div>
  </main>
</template>
