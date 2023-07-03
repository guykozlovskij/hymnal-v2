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
    <section id="home-view">
      <h1>Himnynas</h1>
      <div id="hymn-list">
        <div v-for="hymn in hymnalData" :key="hymn.number">
          <button class="hymn-select-button" @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number
          }}</button>
        </div>
      </div>
    </section>
  </main>
</template>
