<template>
  <span :class="`${prefixCls}-wrapper`">
    <Icon v-if="getIcon" :icon="getIcon" :size="18" :class="`${prefixCls}-wrapper__icon`" />
    {{ props.item?.name }}
  </span>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';

  import Icon from '@/components/icon/index';
  import { useDesign } from '@/hooks/web/useDesign';
  import { contentProps } from '../props';

  export default defineComponent({
    name: 'MenuItemContent',
    components: {
      Icon,
    },
    props: contentProps,
    setup(props) {
      const { prefixCls } = useDesign('basic-menu-item-content');
      const getIcon = computed(() => props.item?.icon);

      return {
        prefixCls,
        getIcon,
      };
    },
  });
</script>
