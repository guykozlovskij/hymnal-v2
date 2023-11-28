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
      <v-icon name="gi-ancient-sword" scale="4"/>
      <p>here</p>
      <v-icon name="fa-wordpress"  scale="1.5"/>
      <h1>Himnynas V2</h1>
      <input id="search-bar" v-on:change="saveSearchState" v-model="searchValue" placeholder="Paieška">
      <section v-if="!searchValue" id="hymn-list">
        <div v-for="(hymn, index) in hymnalData" :key="index">
          <button class="hymn-select-button" @click="$router.push(`/hymns/${hymn.number}`)" role="link">{{ hymn.number
          }}</button>
        </div>
      </section>
      <section v-if="!searchValue" id="new-hymns-list">
        <h2>Nauji Himnai</h2>
        <div v-for="(hymn, index) in newHymnsData" :key="index" @click="$router.push(`/hymns/n/${hymn.number}`)"
          role="link">
          <button class="new-hymn-select-button">
            {{ hymn.number }} {{ hymn.title }}
          </button>
        </div>
      </section>
      <section>
        <section v-if="searchValue" id="search-list">
          <div id="search-result-wrapper">
            <div class="search-result" v-for="(hymn, index) in hymnsFiltered" :key="index"
              @click="$router.push(`/hymns/${hymn.number}`)" role="link">
              {{ hymn.number }}. {{ hymn.title }}
            </div>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>
