<script setup>
import json from '../data/hymnal-data.json'
import { chords } from '../stores/chords';
</script>

<script>
export default {
  data() {
    return {
      hymnData: json[this.$route.params.id - 1],
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.scrollToTop()
  }
}

console.log(chords.isEnabled)
</script>

<template>
  <div class="top">{{ hymnData.number }}</div>
  <section class="hymn-view">
    <div class="hymn-intro">
      <h4>{{ hymnData.title }}</h4>
      <h4 v-if="hymnData['sub-title']">{{ hymnData['sub-title'] }}</h4>
      <h4 v-if="hymnData['languages']">
        (
        <span v-if="hymnData['languages']['russian']">R{{ hymnData.languages.russian }}, </span>
        <span v-if="hymnData['languages']['english']">A{{ hymnData.languages.english }}</span>
        )
      </h4>
    </div>
    <audio controls loop v-if="hymnData['melody-url']" class="hymn-mp3" autostart="false" preload="auto" name="media">
      <source v-bind:src="hymnData['melody-url']" type="audio/mpeg">
    </audio>
    <div class="verses">
      <ol v-if="hymnData['verses'].length > 1" class="verse-one">
        <li class="hymn-verse">
          <span v-for="(line, index) in hymnData.verses[0]" :key="index">
            <div v-if="chords.isEnabled">
              <span v-class="chords" v-if="hymnData.chords">
                {{ hymnData.chords[index] }}
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
          {{ line }}
          <br>
        </span>
        <br>
      </div>
      <div v-if="hymnData.chorus" class="hymn-chorus">
        <span v-for="(line, index) in hymnData.chorus" :key="index">
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
    </div>
    <!-- <button @click="toggleChords()">Toggle</button> -->
    <button class="hymn-back-button" @click="$router.go(-1)" role="link">« Grįžti</button>
  </section>
</template>