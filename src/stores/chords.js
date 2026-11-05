import { ref } from "vue"

export const chords = ref({
  isEnabled: JSON.parse(localStorage.getItem('chordsEnabled') || 'false'),
  setIsEnabled(isEnabled) {
    this.isEnabled = isEnabled
    localStorage.setItem('chordsEnabled', JSON.stringify(isEnabled))
  }
})
