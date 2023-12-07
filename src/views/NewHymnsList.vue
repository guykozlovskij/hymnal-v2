<script setup>
import newHymnsJSON from '../data/new-hymns.json'
</script>

<script>
export default {
  data() {
    return {
      searchValue: '',
      newHymnsData: newHymnsJSON
    }
  },
}
</script>

<template>
  <section v-if="!searchValue" id="new-hymns-page">
    <h2>Nauji Himnai</h2>
    <div id="new-hymns-list">
      <div v-for="(hymn, index) in newHymnsData" :key="index" @click="$router.push(`/hymns/n/${hymn.number}`)"
        role="link">
        <a class="new-hymn-select-button">
          {{ hymn.number }}. {{ hymn.title }}
        </a>
      </div>
    </div>
  </section>
</template>
