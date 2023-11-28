<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><v-icon class="vue-icon" name="bi-book" scale="2" style="color: transparent;"/></RouterLink>
        <RouterLink to="/"><v-icon class="vue-icon" name="bi-search" scale="2"/></RouterLink>
        <RouterLink to="/"><v-icon class="vue-icon" name="bi-gear-wide" scale="2"/></RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
