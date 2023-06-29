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
    <h1>Hymn number {{ hymnData.number }} </h1>
    <h2>Hymn title: {{ hymnData.title}}</h2>
  </div>
</template>