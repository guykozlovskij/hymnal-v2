import { ref } from "vue"

export const chords = ref({
  isEnabled: false,
  setIsEnabled() {
    this.isEnabled = !this.isEnabled
    localStorage.setItem('chordsEnabled', JSON.stringify(this.isEnabled))
    console.log(this.isEnabled)
    console.log('local', localStorage.getItem('chordsEnabled'))
  } 
}) 