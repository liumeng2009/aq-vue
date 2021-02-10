<template>
  <span :class="`${prefixCls}-wrapper`">
    <Icon v-if="getIcon" :type="getIcon" :size="18" :class="`${prefixCls}-wrapper__icon`" />
    {{ getName }}
  </span>
</template>

<script lang="ts">
  import { useDesign } from '@/hooks/web/useDesign';
  import { defineComponent } from 'vue';
  import { Icon } from 'ant-design-vue';
  export default defineComponent({
    name: 'MenuItemContent',
    components: {
      Icon,
    },
    setup() {
      const { prefixCls } = useDesign('basic-menu-item-content');

      return {
        prefixCls,
      };
    },
  });
</script>
