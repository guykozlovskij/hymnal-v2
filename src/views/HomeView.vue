<script setup>
import json from '../data/hymnal-data.json'
// import {ref} from 'vue'
</script>

<script>

export default {
  data() {
    return {
      searchValue: '',
      hymnalData: json,
    }
  },
  computed: {
    hymnsSearchable() {
      return this.hymnalData.map(hymn => {
        const joinedVerses = hymn.verses.map(verse => verse.join()).join()
        const joinedChorus = hymn.chorus ? hymn.chorus.join() : ''
        return joinedVerses + joinedChorus
      })
    },
    hymnsFiltered() {
      if (this.searchValue.trim().length > 0) {
        return this.hymnalData.filter((hymn, index) => {
          return hymn.title.toLowerCase().includes(this.searchValue.toLowerCase())
            || this.hymnsSearchable[index].toLowerCase().includes(this.searchValue.toLowerCase())
            || String(hymn.number).includes(this.searchValue.toLowerCase())
        })
      }
      return this.hymnalData
    },
  },
}






</script>

<template>
  <main>
    <section id="home-view">
      <h1>Himnynas V2</h1>
      <br>
      <div id="hymn-list">
        <div v-for="(hymn, index) in hymnalData" :key="index">
          <button class="hymn-select-button" @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number
          }}</button>
        </div>
      </div>
      <div>
        <input v-model="searchValue" placeholder="Paieška">
        <div v-for="(hymn, index) in hymnsFiltered" :key="index">
          {{ hymn.number }}. {{ hymn.title }}
        </div>
      </div>
    </section>
  </main>
</template>
