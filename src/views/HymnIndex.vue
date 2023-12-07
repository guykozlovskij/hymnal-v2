<script setup>
import hymnalJSON from '../data/hymnal-data.json'
import newHymnsJSON from '../data/new-hymns.json'
</script>

<script>
export default {
  data() {
    return {
      searchValue: '',
      hymnalData: hymnalJSON,
      newHymnsData: newHymnsJSON
    }
  }
}
</script>

<template>
  <main>
    <section id="index-view">
      <h1>Index</h1>
      <a id="new-hymns-link" role="link" @click="$router.push(`/new-hymns`)">« Nauji Himnai »</a>
      <section v-if="!searchValue" id="hymn-list">
        <div v-for="(hymn, index) in hymnalData" :key="index">
          <button class="hymn-select-button" @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number
          }}</button>
        </div>
      </section>
    </section>
  </main>
</template>
