<!-- TODO: This duplicate file will be retired as soon as the new hymns are re-numbered and made part of the core hymnal. It'sa complete copy of HymnView.vue -->
<!-- TODO: If making changes to the HymnView.vue, upon completion please copy and paste the changes (overwriting everything inside the template tag is easiest) -->

<script setup>
import json from '../data/new-hymns.json'
</script>

<script>
export default {
  data() {
    return {
      newHymnData: json[this.$route.params.id - 1]
    }
  }
}

</script>

<template>
  <section class="hymn-view">
    <div class="hymn-intro">
      <h4>{{ newHymnData.number }}. {{ newHymnData.title }}</h4>
      <h4 v-if="newHymnData['sub-title']">{{ newHymnData['sub-title'] }}</h4>
      <h4 v-if="newHymnData['languages']">(R{{ newHymnData.languages.russian }}, A{{ newHymnData.languages.english }})
      </h4>
    </div>
    <audio v-if="newHymnData['melody-url']" class="hymn-mp3" controls="" autostart="false" preload="auto" name="media">
      <source v-bind:src="newHymnData['melody-url']" type="audio/mpeg">
    </audio>
    <div class="verses">
      <ol v-if="newHymnData['verses'].length > 1" class="verse-one">
        <li class="hymn-verse">
          <span v-for="(line, index) in newHymnData.verses[0]" :key="index">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
      <div v-if="newHymnData['verses'].length === 1">
        <span v-for="(line, index) in newHymnData.verses[0]" :key="index">
          {{ line }}
          <br>
        </span>
      </div>
      <div v-if="newHymnData.chorus" class="hymn-chorus">
        <span v-for="(line, index) in newHymnData.chorus" :key="index">
          {{ line }}
          <br>
        </span>
      </div>
      <ol class="remaining-verses" start="2">
        <li class="hymn-verse" v-for="(verse, index) in newHymnData.verses.slice(1)" :key="index">
          <span v-for="(line, index) in verse" :key="index">
            {{ line }}
            <br>
          </span>
        </li>
      </ol>
    </div>
    <button class="hymn-back-button" @click="$router.push(`/`)" role="link">« Grįžti</button>
  </section>
</template>        