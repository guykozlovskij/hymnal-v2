<script setup>
import newHymnsJSON from '../data/new-hymns.json'
</script >

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
  <section v-if="!searchValue" id="new-hymns-list">
    <h2>Nauji Himnai</h2>
    <div v-for="(hymn, index) in newHymnsData" :key="index" @click="$router.push(`/hymns/n/${hymn.number}`)" role="link">
      <button class="new-hymn-select-button">
        {{ hymn.number }} {{ hymn.title }}
      </button>
    </div>
  </section>
</template>
