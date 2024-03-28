<script setup lang="ts">
import { ref } from 'vue';
import {
  Timeline,
  TimelineGroup,
  TimelineItem,
  TimelineMarker,
} from 'vue-timeline-chart';
import 'vue-timeline-chart/style.css';

const groups = ref<TimelineGroup[]>([
  { id: 'group1', content: 'Group 1' },
  { id: 'group2', content: 'Group 2' },
]);
const items = ref<TimelineItem[]>([
  { group: 'group1', type: 'range', start: 1707135072000, end: 1708431072000 },
  { group: 'group2', type: 'range', start: 1706790600000, end: 1706877000000 },
]);
</script>

<template>
  <div>
    <h1>Timeline Test</h1>
    <Timeline
      :groups="groups"
      :items="items"
      :markers="markers"
      :initial-viewport-start="1703112200000"
      :initial-viewport-end="1714566600000"
    >
    </Timeline>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
