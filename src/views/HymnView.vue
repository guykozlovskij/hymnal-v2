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
    <div id="hymn-intro">
      <h4>{{ hymnData.number }}. {{ hymnData.title }}</h4>
      <h4 v-if="hymnData['sub-title']">{{ hymnData['sub-title'] }}</h4>
      <h4>(R{{ hymnData.languages.russian }}, A{{ hymnData.languages.english }})</h4>
    </div>
    <div id="verses">
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
          <span v-for="line in verse" :key="line.id">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>        