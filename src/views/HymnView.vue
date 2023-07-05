<script setup>
import json from '../data/hymnal-data.json'

</script>

<script>
export default {
  data() {
    return {
      hymnData: json[this.$route.params.id - 1]
    }
  }
}
</script>

<template>
  <section class="hymn-view">
    <div class="hymn-intro">
      <h4>{{ hymnData.number }}. {{ hymnData.title }}</h4>
      <h4 v-if="hymnData['sub-title']">{{ hymnData['sub-title'] }}</h4>
      <h4>(R{{ hymnData.languages.russian }}, A{{ hymnData.languages.english }})</h4>
    </div>
    <audio class="hymn-mp3" controls="" autostart="false" preload ="none" name="media">
      <source src="https://www.hymnal.net/Hymns/Hymnal/mp3/e0007_full.mp3" type="audio/mpeg">
    </audio>
    <div class="verses">
      <ol class="verse-one">
        <li class="hymn-verse">
          <span v-for="(line, index) in hymnData.verses[0]" :key="index">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
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
  </section>
</template>        