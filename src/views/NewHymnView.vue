<!-- TODO: This duplicate file will be retired as soon as the new hymns are re-numbered and made part of the core hymnal. It'sa complete copy of HymnView.vue -->
<!-- TODO: If making changes to the HymnView.vue, upon completion please copy and paste the changes (overwriting everything inside the template tag is easiest) -->

<script setup>
import json from '../data/new-hymns.json'
</script>

<script>
export default {
  data() {
    return {
      hymnData: json[this.$route.params.id - 1]
    }
  },
}

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
    <button class="hymn-back-button" @click="$router.go(-1)" role="link">« Grįžti</button>
  </section>
</template>           