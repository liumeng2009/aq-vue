<template>
  <h1>分析页</h1>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  export default defineComponent({
    name: 'Analysis',
    setup() {
      onMounted(() => {
        console.log('---test keepalive onmounted---');
      });
    },
  });
</script>
