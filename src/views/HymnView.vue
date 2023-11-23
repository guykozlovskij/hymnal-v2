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
      <h4 v-if="hymnData['languages']">(R{{ hymnData.languages.russian }}, A{{ hymnData.languages.english }})</h4>
    </div>

    <audio v-if="hymnData['melody-url']" class="hymn-mp3" controls="" autostart="false" preload="none" name="media">
      <source v-bind:src="hymnData['melody-url']" type="audio/mpeg">
    </audio>

    <!--* Rendering an ordered list if there are multiple verses -->
    <div class="verses">
      <ol v-if="hymnData['verses'].length > 1" class="verse-one">
        <li class="hymn-verse">
          <span v-for="(line, index) in hymnData.verses[0]" :key="index">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>

      <!--* Not rendering lists if there is only 1 verse -->
      <div v-if="hymnData['verses'].length === 1">
        <span v-for="(line, index) in hymnData.verses[0]" :key="index">
            {{ line }}
            <br>
          </span>
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
  </section>
</template>        