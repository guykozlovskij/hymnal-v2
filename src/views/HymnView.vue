<script setup>
import json from '../data/hymnal-data.json'
</script>

<script>
export default {
  data() {
    return {
      hymnData: json[this.$route.params.id - 1]
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ hymnData.number }}. {{ hymnData.title}}</h1>
    <div v-for="verse in hymnData.verses" :key="verse.id">
      <p>{{verse}}</p>
    </div>
  </div>
</template>