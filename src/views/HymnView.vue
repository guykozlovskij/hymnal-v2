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
    <h1>{{ hymnData.number }}. {{ hymnData.title }}</h1>
    <div>
      <span v-for="line in hymnData.verses[0]" :key="line.id">
        {{ line }}
        <!-- TODO: remove breakline -->
        <br>
      </span>
      <br>
    </div>
    <div>
      <span>Priedainis:</span>
      <br>
      <span v-for="line in hymnData.chorus" :key="line.id">
        {{ line }}
        <!-- TODO: remove breakline -->
        <br>
      </span>
      <br>
    </div>
    <br>
    <div v-for="verse in hymnData.verses.slice(1)" :key="verse.id">
      <span v-for="line in verse" :key="line.id">
        {{ line }}
        <!-- TODO: remove breakline -->
        <br>
      </span>
      <!-- TODO: remove breakline -->
      <br>
    </div>
  </div>
</template>        