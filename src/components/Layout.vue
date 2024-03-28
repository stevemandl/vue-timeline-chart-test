<template>
  <div>
    <component :is="cmp"> </component>
  </div>
</template>
<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!'
  );
  // cancel the navigation and stay on the same page
  if (!answer) return false;
});
const props = defineProps({
  cmp: String,
});
</script>
