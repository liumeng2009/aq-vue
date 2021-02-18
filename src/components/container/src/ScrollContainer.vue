<template>
  <Scrollbar ref="scrollbarRef" class="scroll-container" v-bind="$attrs">
    <slot></slot>
  </Scrollbar>
</template>

<script lang="ts">
  import { defineComponent, nextTick, ref, unref } from 'vue';
  import { Scrollbar, ScrollbarType } from '@/components/scrollbar';

  import { useScrollTo } from '@/hooks/event/useScrollTo';
  export default defineComponent({
    name: 'ScrollContainer',
    components: {
      Scrollbar,
    },
    setup() {
      const scrollbarRef = ref<Nullable<ScrollbarType>>(null);

      function scrollTo(to: number, duration = 500) {
        const scrollbar = unref(scrollbarRef);
        if (!scrollbar) return;

        nextTick(() => {
          const wrap = unref(scrollbar.wrap);
          if (!wrap) return;

          const { start } = useScrollTo({
            el: wrap,
            to,
            duration,
          });
          start();
        });
      }

      return {
        scrollbarRef,
        scrollTo,
      };
    },
  });
</script>

<style lang="less">
  .scroll-container {
    width: 100%;
    height: 100%;

    .scrollbar__wrap {
      margin-bottom: 18px !important;
      overflow-x: hidden;
    }

    .scrollbar__view {
      box-sizing: border-box;
    }
  }
</style>
