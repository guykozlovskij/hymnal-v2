<script>
import hymnalJSON from '../data/hymnal-data.json'

const normalizeSearch = (value) =>
  String(value ?? '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[\p{P}\p{Z}\s]+/gu, '')

export default {
  data() {
    return {
      searchValue: '',
      hymnalData: hymnalJSON,
      colors: ['#d0e0fd', '#acc9ff']
    }
  },
  computed: {
    hymnsSearchable() {
      return this.hymnalData.map((hymn) => {
        const lyrics = [...hymn.verses.flat(), ...(hymn.chorus || []), ...(hymn.chorus2 || [])]
        return normalizeSearch([hymn.category, ...lyrics].join(' '))
      })
    },
    hymnsFiltered() {
      const query = normalizeSearch(this.searchValue)

      if (!query) return this.hymnalData

      return this.hymnalData.filter(
        (hymn, index) =>
          this.hymnsSearchable[index].includes(query) ||
          normalizeSearch(hymn.number) === query ||
          normalizeSearch(hymn?.languages?.russian) === query ||
          normalizeSearch(hymn?.languages?.english) === query
      )
    }
  },
  methods: {
    getSearchDataFromState() {
      const searchData = sessionStorage.getItem('searchValue')
      if (searchData) {
        this.searchValue = searchData
      }
    },
    saveSearchState() {
      sessionStorage.setItem('searchValue', this.searchValue)
    },
    clearSearch() {
      this.searchValue = ''
      sessionStorage.setItem('searchValue', '')
      this.$refs.searchInput.focus()
    }
  },
  created() {
    this.getSearchDataFromState()
  }
}
</script>

<template>
  <main>
    <div class="top">Himnynas</div>
    <section id="search-view">
      <div id="search-and-settings">
        <div class="search-input-wrapper">
          <input
            @input="saveSearchState"
            id="search-bar"
            ref="searchInput"
            v-model="searchValue"
            placeholder="Paieška..."
            type="search"
          />
          <button
            v-if="searchValue"
            class="search-clear"
            type="button"
            aria-label="Išvalyti paiešką"
            @click="clearSearch"
          >
            ×
          </button>
        </div>
        <a @click="$router.push(`/settings`)" role="link"
          ><v-icon class="vue-icon" name="bi-gear-wide" scale="2"
        /></a>
      </div>
      <section id="search-list">
        <template v-for="(hymn, index) in hymnsFiltered" :key="index">
          <div
            v-if="index === 0 || hymn.category !== hymnsFiltered[index - 1].category"
            id="category"
          >
            {{ hymn.category }}
          </div>
          <div class="search-wrapper" @click="$router.push(`/hymns/${hymn.number}`)" role="link">
            <div class="search-result-line" :style="{ backgroundColor: colors[index % 2] }">
              <a> {{ hymn.number }}. {{ hymn.verses[0][0].replace(/\.$|\,$|\:$|\!$|\—$/, '') }} </a>
            </div>
          </div>
        </template>
      </section>
    </section>
  </main>
</template>
