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
      newHymnsData: newHymnsJSON,
      colors: ["#d0e0fd", "#acc9ff"]
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
    onQueryChange(event) {
      if (event.target.value.trim().length === 0) {
        this.response = null;
      }
    }
  },
  created() {
    this.getSearchDataFromSate()
  },
}
</script>

<template>
  <main>
    <section id="search-view">
      <h1>Himnynas</h1>
      <input @input="onQueryChange" id="search-bar" v-on:change="saveSearchState" v-model="searchValue"
        placeholder="Paieška" type="search">
      <section id="search-list">
        <div class="search-wrapper" v-for="(hymn, index) in hymnsFiltered" :key="index"
          @click="$router.push(`/hymns/${hymn.number}`)" role="link">
          <div class="search-result-line" v-bind:style="{ backgroundColor: colors[index % 2]}">
            <a>{{ hymn.number }}. {{ hymn.verses[0][0].replace(/\.$|\,$|\:$|\!$|\—$/, "") }}</a>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
