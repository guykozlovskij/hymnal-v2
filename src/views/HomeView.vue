<script setup>
import hymnalJSON from '../data/hymnal-data.json'
import newHymnsJSON from '../data/new-hymns.json'
</script >

<script>
export default {
  data() {
    return {
      searchValue: '',
      hymnalData: hymnalJSON,
      newHymnsData: newHymnsJSON
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
  methods: {
    getSearchDataFromSate() {
      const searchData = sessionStorage.getItem('searchValue' || '')
      if (searchData) {
        this.searchValue = searchData
      }
    },
    saveSearchState() {
      sessionStorage.setItem('searchValue', this.searchValue)
    },
  },
  created() {
    this.getSearchDataFromSate()
  },
}
</script>

<template>
  <main>
    <section id="home-view">
      <h1>Himnynas</h1>
      <input id="search-bar" v-on:change="saveSearchState" v-model="searchValue" placeholder="Paieška">
      <a id="new-hymns-link" role="link" @click="$router.push(`/new-hymns`)">« Nauji Himnai »</a>
      <section v-if="!searchValue" id="hymn-list">
        <div v-for="(hymn, index) in hymnalData" :key="index">
          <button class="hymn-select-button" @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number
          }}</button>
        </div>
      </section>
      <section>
        <section v-if="searchValue" id="search-list">
            <div class="search-wrapper" v-for="(hymn, index) in hymnsFiltered" :key="index" @click="$router.push(`/hymns/${hymn.number}`)" role="link">
              <a class="search-result-line">{{ hymn.number }}. {{ hymn.verses[0][0] }}</a>
            </div>
        </section>
      </section>
    </section>
  </main>
</template>
