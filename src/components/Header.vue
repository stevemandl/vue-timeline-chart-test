// EMCSHeader.vue

<template>
  <div>Header</div>
  <div>Current route path: {{ $route.path }}</div>
  | <router-link to="/">Home</router-link> |
  <router-link to="/page1">Page 1</router-link> |
  <router-link to="/page2">Page 2</router-link> | 
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
</script>
