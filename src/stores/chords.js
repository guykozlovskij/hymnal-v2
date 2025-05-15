import { ref } from "vue"

export const chords = ref({
  isEnabled: false,
  setIsEnabled() {
    this.isEnabled = !this.isEnabled
  }
}) 