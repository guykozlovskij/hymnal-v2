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
  <div>
    <h1>Hymn number {{ $route.params.id }} </h1>
    <h2>Hymn title: { hymnalData.title}</h2>
  </div>
</template>