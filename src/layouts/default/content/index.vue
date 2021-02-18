<template>
  <div>
    <h1>page</h1>
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive v-if="route.meta.ignoreKeepAlive">
          <component :is="Component" v-bind="getKey(Component, route)" />
        </keep-alive>
        <component v-else :is="Component" v-bind="getKey(Component, route)" />
      </template>
    </router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getKey } from './useCache';

  export default defineComponent({
    name: 'PageLayout',
    setup() {
      return { getKey };
    },
  });
</script>
