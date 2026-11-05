<template>
  <main class="hymn-view" role="alert">
    <div class="top">Puslapis nerastas</div>
    <p class="not-found-message">Ieškomas puslapis nerastas.</p>
    <button class="not-found-home" @click="$router.replace('/')" aria-label="Grįžti į pradžią">
      ⌂
    </button>
  </main>
</template>

<style scoped>
.not-found-message {
  margin: 0 0 10px;
}

.not-found-home {
  padding: 6px 14px;
  background-color: #448aff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}
</style>
