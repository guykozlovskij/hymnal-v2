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
    <!-- TODO investigate IDs-->
    <div id="hymn-intro">
      <h4>{{ hymnData.number }}. {{ hymnData.title }}</h4>
      <h4 v-if="hymnData['sub-title']">{{ hymnData['sub-title'] }}</h4>
      <h4>(R{{ hymnData.languages.russian }}, A{{ hymnData.languages.english }})</h4>
    </div>
    <div id="verses">
      <ol class="verse-one">
        <li class="hymn-verse">
          <span v-for="line in hymnData.verses[0]" :key="line.id">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
      <div v-if="hymnData.chorus" class="hymn-chorus">
        <span v-for="line in hymnData.chorus" :key="line.id">
          {{ line }}
          <br>
        </span>
      </div>
      <ol class="remaining-verses" start="2">
        <li class="hymn-verse" v-for="verse in hymnData.verses.slice(1)" :key="verse.id">
          <span v-for="line in verse" :key="line.id">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>        