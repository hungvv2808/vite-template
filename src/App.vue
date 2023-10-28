<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view/>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
h1 {
  @apply text-3xl font-bold underline text-red-500;
}
</style>
