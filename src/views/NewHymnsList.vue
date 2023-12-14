<script setup>
import newHymnsJSON from '../data/new-hymns.json'
</script>

<script>
export default {
  data() {
    return {
      searchValue: '',
      newHymnsData: newHymnsJSON,
      colors: ["#d0e0fd", "#acc9ff"]
    }
  },
}
</script>

<template>
  <section v-if="!searchValue" id="new-hymns-page">
    <h2>Nauji Himnai</h2>
    <div id="new-hymns-list">
      <div class="new-hymn-select-button" v-bind:style="{ backgroundColor: colors[index % 2] }"
        v-for="(hymn, index) in newHymnsData" :key="index" @click="$router.push(`/hymns/n/${hymn.number}`)" role="link">
        <a>{{ hymn.number }}. {{ hymn.title }}</a>
      </div>
    </div>
  </section>
</template>
