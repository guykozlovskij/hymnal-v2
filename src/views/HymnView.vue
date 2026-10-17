<script setup>
import json from '../data/hymnal-data.json'
</script>

<script>
export default {
  data() {
    const hymnNumber = Number(this.$route.params.id)
    const hymnIndex = json.findIndex((h) => h.number === hymnNumber)

    return {
      hymnData: json[hymnIndex],
      hymnIndex: hymnIndex,
      hymns: json,
      chordsOn: JSON.parse(localStorage.getItem('chordsEnabled')),
      musicStatus: 'loading',
      widgetLoadToken: 0
    }
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
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
    },

    handleOffline() {
      this.musicStatus = this.hymnData?.['melody-url'] ? 'offline' : 'unavailable'
    },

    handleOnline() {
      this.loadHymnalWidget()
    },

    loadHymnalWidget() {
      const widget = document.getElementById('hymnalnet-widget')

      if (!widget || !this.hymnData?.number) return

      const token = ++this.widgetLoadToken

      // Clean up any previous attempt.
      this._hymnalWidgetObserver?.disconnect()
      clearTimeout(this._hymnalWidgetTimeout)

      this._hymnalWidgetObserver = null
      this._hymnalWidgetTimeout = null

      document.getElementById('hymnalnet-widget-script')?.remove()
      widget.replaceChildren()

      // This hymn has no recording listed in our data.
      if (!this.hymnData['melody-url']) {
        this.musicStatus = 'unavailable'
        return
      }

      // Don't try to load the remote widget while offline.
      if (!navigator.onLine) {
        this.musicStatus = 'offline'
        return
      }

      this.musicStatus = 'loading'

      const script = document.createElement('script')
      script.id = 'hymnalnet-widget-script'
      script.src = 'https://www.hymnal.net/js/widget/widget.min.js?ver=1.2'
      script.async = true

      const observer = new MutationObserver(() => {
        const iframe = widget.querySelector('iframe') || document.getElementById('hymnalnet-iframe')

        if (!iframe) return

        observer.disconnect()

        iframe.addEventListener(
          'load',
          () => {
            clearTimeout(this._hymnalWidgetTimeout)
            this._hymnalWidgetTimeout = null

            if (token !== this.widgetLoadToken) return

            this.musicStatus = navigator.onLine ? 'ready' : 'offline'
          },
          { once: true }
        )
      })

      this._hymnalWidgetObserver = observer

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      this._hymnalWidgetTimeout = setTimeout(() => {
        observer.disconnect()

        if (token !== this.widgetLoadToken) return

        if (this.musicStatus === 'loading') {
          this.musicStatus = navigator.onLine ? 'error' : 'offline'
        }
      }, 12000)

      script.onerror = () => {
        observer.disconnect()
        clearTimeout(this._hymnalWidgetTimeout)
        this._hymnalWidgetTimeout = null

        if (token !== this.widgetLoadToken) return

        this.musicStatus = navigator.onLine ? 'error' : 'offline'
      }

      document.body.appendChild(script)
    }
  },

  created() {
    this.scrollToTop()
  },

  mounted() {
    window.addEventListener('offline', this.handleOffline)
    window.addEventListener('online', this.handleOnline)

    this.$nextTick(() => {
      this.loadHymnalWidget()
    })
  },

  beforeUnmount() {
    window.removeEventListener('offline', this.handleOffline)
    window.removeEventListener('online', this.handleOnline)

    this._hymnalWidgetObserver?.disconnect()
    clearTimeout(this._hymnalWidgetTimeout)
  },

  watch: {
    '$route.params.id'(newId) {
      const hymnNumber = Number(newId)
      const index = this.hymns.findIndex((h) => h.number === hymnNumber)

      this.hymnIndex = index
      this.hymnData = this.hymns[index]

      this.scrollToTop()

      this.$nextTick(() => {
        this.loadHymnalWidget()
      })
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
        <h4 class="uppercase">{{ hymnData.category }} -</h4>
        <h4 class="uppercase" v-if="hymnData['subcategory']">{{ hymnData['subcategory'] }}</h4>
        <h4 v-if="hymnData['languages']">
          (
          <span v-if="hymnData['languages']['russian']">R{{ hymnData.languages.russian }}, </span>
          <span v-if="hymnData['languages']['english']">A{{ hymnData.languages.english }}</span>
          )
        </h4>
      </div>
    </section>

    <div class="hymnal-player-shell">
      <div v-if="musicStatus !== 'ready'" class="music-status" role="status" aria-live="polite">
        <span v-if="musicStatus === 'loading'" class="music-spinner" aria-hidden="true"></span>
        <span v-if="musicStatus === 'loading'"> Įkeliama muzika… </span>
        <span v-else-if="musicStatus === 'offline'"> Nėra interneto ryšio </span>
        <span v-else-if="musicStatus === 'unavailable'"> Šiaim himnui nėra muzikos įrašo </span>
        <span v-else> Muzikos įkelti nepavyko. Patikrinkite ryšį. </span>
      </div>

      <div class="hymnal-widget-crop">
        <div
          :key="hymnData.number"
          id="hymnalnet-widget"
          type="h"
          :num="hymnData.number"
          width="320"
          height="200"
          theme="light"
          autoplay="false"
          loop="true"
        ></div>
      </div>
    </div>

    <div class="verses">
      <span class="chords-capo" v-if="chordsOn && hymnData.chords?.capo">{{
        hymnData.chords.capo
      }}</span>
      <ol v-if="hymnData['verses'].length > 1" class="verse-one">
        <li class="hymn-verse">
          <span v-for="(line, index) in hymnData.verses[0]" :key="index">
            <div v-if="chordsOn && hymnData.chords?.verse">
              <span class="chords" v-if="hymnData.chords.verse">
                {{ hymnData.chords.verse[index] }}
                <br />
              </span>
            </div>
            {{ line }}
            <br />
          </span>
        </li>
      </ol>
      <div v-if="hymnData['verses'].length === 1">
        <span v-for="(line, index) in hymnData.verses[0]" :key="index">
          <div v-if="chordsOn && hymnData.chords?.verse">
            <span class="chords" v-if="hymnData.chords.verse">
              {{ hymnData.chords.verse[index] }}
              <br />
            </span>
          </div>
          {{ line }}
          <br />
        </span>
        <br />
      </div>
      <div v-if="hymnData.chorus" class="hymn-chorus">
        <span v-for="(line, index) in hymnData.chorus" :key="index">
          <div v-if="chordsOn">
            <span class="chords" v-if="hymnData.chords?.chorus">
              {{ hymnData.chords.chorus[index] }}
              <br />
            </span>
          </div>
          {{ line }}
          <br />
        </span>
      </div>
      <ol class="remaining-verses" start="2">
        <li class="hymn-verse" v-for="(verse, index) in hymnData.verses.slice(1)" :key="index">
          <span v-for="(line, index) in verse" :key="index">
            {{ line }}
            <br />
          </span>
        </li>
      </ol>
      <div v-if="hymnData.chorus2" class="hymn-chorus">
        <span v-for="(line, index) in hymnData.chorus2" :key="index">
          {{ line }}
          <br />
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