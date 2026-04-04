<script setup>
import json from '../data/hymnal-data.json'
</script>

<script>
export default {
  data() {
    const hymnNumber = Number(this.$route.params.id)
    const hymnIndex = json.findIndex(h => h.number === hymnNumber)

    return {
      hymnData: json[hymnIndex],
      hymnIndex: hymnIndex,
      hymns: json,
      chordsOn: JSON.parse(localStorage.getItem('chordsEnabled'))
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    nextHymn() {
      const next = this.hymns[this.hymnIndex + 1]
      if (next) {
        this.$router.push(`/hymns/${next.number}`)
      }
    },
    prevHymn() {
      const prev = this.hymns[this.hymnIndex - 1]
      if (prev) {
        this.$router.push(`/hymns/${prev.number}`)
      }
    }
  },
  created() {
    this.scrollToTop();
  },
  watch: {
    '$route.params.id'(newId) {
      const hymnNumber = Number(newId)
      const index = this.hymns.findIndex(h => h.number === hymnNumber)

      this.hymnIndex = index
      this.hymnData = this.hymns[index]

      this.scrollToTop()
    }
  }
}
</script>

<template>
  <div class="top">
    {{ hymnData?.number }}
  </div>
  <section class="hymn-view">
    <section class="hymn-top">
      <div class="hymn-intro">
        <h4 class="uppercase">{{ hymnData.category }} - </h4>
        <h4 class="uppercase" v-if="hymnData['subcategory']">{{ hymnData['subcategory'] }}</h4>
        <h4 v-if="hymnData['languages']">
          (
          <span v-if="hymnData['languages']['russian']">R{{ hymnData.languages.russian }}, </span>
          <span v-if="hymnData['languages']['english']">A{{ hymnData.languages.english }}</span>
          )
        </h4>
      </div>
    </section>
    <audio :key="hymnData.number" controls loop v-if="hymnData['melody-url']" class="hymn-mp3" autostart="false" preload="auto" name="media">
      <source v-bind:src="hymnData['melody-url']" type="audio/mpeg">
    </audio>
    <div class="verses">
      <span class="chords-capo" v-if="chordsOn && hymnData.chords?.capo">{{ hymnData.chords.capo }}</span>
      <ol v-if="hymnData['verses'].length > 1" class="verse-one">
        <li class="hymn-verse">
          <span v-for="(line, index) in hymnData.verses[0]" :key="index">
            <div v-if="chordsOn && hymnData.chords?.verse">
              <span class="chords" v-if="hymnData.chords.verse">
                {{ hymnData.chords.verse[index] }}
                <br>
              </span>
            </div>
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
      <div v-if="hymnData['verses'].length === 1">
        <span v-for="(line, index) in hymnData.verses[0]" :key="index">
          <div v-if="chordsOn && hymnData.chords?.verse">
            <span class="chords" v-if="hymnData.chords.verse">
              {{ hymnData.chords.verse[index] }}
              <br>
            </span>
          </div>
          {{ line }}
          <br>
        </span>
        <br>
      </div>
      <div v-if="hymnData.chorus" class="hymn-chorus">
        <span v-for="(line, index) in hymnData.chorus" :key="index">
          <div v-if="chordsOn">
            <span class="chords" v-if="hymnData.chords?.chorus">
              {{ hymnData.chords.chorus[index] }}
              <br>
            </span>
          </div>
          {{ line }}
          <br>
        </span>
      </div>
      <ol class="remaining-verses" start="2">
        <li class="hymn-verse" v-for="(verse, index) in hymnData.verses.slice(1)" :key="index">
          <span v-for="(line, index) in verse" :key="index">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
      <div v-if="hymnData.chorus2" class="hymn-chorus">
        <span v-for="(line, index) in hymnData.chorus2" :key="index">
          {{ line }}
          <br>
        </span>
      </div>
    </div>
    <div class="bottom">
      <div class="button-parent">
        <button class="arrow" @click="prevHymn" role="link">«</button>
        <button @click="$router.push('/')" role="link">⌂</button>
        <button class="arrow" @click="nextHymn" role="link">»</button>
      </div>
    </div>
  </section>
</template>