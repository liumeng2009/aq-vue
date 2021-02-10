<template>
  <div>
    <h1>parent view</h1>
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive v-if="true" :include="getCaches">
          <component :is="Component" v-bind="getKey(Component, route)" />
        </keep-alive>
        <component v-else :is="Component" v-bind="getKey(Component, route)" />
      </template>
    </router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useCache, getKey } from './useCache';

  export default defineComponent({
    name: 'PageLayout',
    setup() {
      const { getCaches } = useCache(false);
      return { getCaches, getKey };
    },
  });
</script>
