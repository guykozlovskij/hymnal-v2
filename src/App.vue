<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterView />
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><v-icon class="vue-icon" name="bi-book" scale="2" /></RouterLink>
        <RouterLink to="/search"><v-icon class="vue-icon" name="bi-search" scale="2" /></RouterLink>
        <RouterLink to="/settings"><v-icon class="vue-icon" name="bi-gear-wide" scale="2" /></RouterLink>
      </nav>
    </div>
  </header>
</template>
