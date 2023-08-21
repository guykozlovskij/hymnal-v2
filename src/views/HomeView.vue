<script setup>
import json from '../data/hymnal-data.json'
import {ref} from 'vue'
</script>

<script>
export default {
  data() {
    return {
      hymnalData: json
    }
  }
}

const search = ref(null)
console.log(Boolean(searchQuery))
</script>

<template>
  <main>
    <section id="home-view">
      <h1>Himnynas V2</h1>
      <br>
      <input v-model="search" placeholder="Paieška">
      <div v-if="search !== true" id="hymn-list">
        <div v-for="(hymn, index) in hymnalData" :key="index">
          <button class="hymn-select-button" @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number
          }}</button>
        </div>
      </div>
    </section>
  </main>
</template>
