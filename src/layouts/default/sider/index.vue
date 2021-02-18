<template>
  <Sider />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Sider from './LayoutSider.vue';
  export default defineComponent({
    name: 'LayoutSider',
    components: {
      Sider,
    },
  });
</script>
