<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><v-icon name="bi-book" scale="2"/></RouterLink>
        <RouterLink to="/"><v-icon name="bi-search" scale="2"/></RouterLink>
        <RouterLink to="/"><v-icon name="bi-gear-wide" scale="2"/></RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
