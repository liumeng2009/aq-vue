<template>
  <MenuItem>
    <MenuItemContent />
  </MenuItem>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Menu } from 'ant-design-vue';

  import MenuItemContent from './MenuItemContent.vue';
  import { useDesign } from '@/hooks/web/useDesign';

  export default defineComponent({
    name: 'BasicMenuItem',
    components: {
      MenuItem: Menu.Item,
      MenuItemContent,
    },
    setup() {
      const { prefixCls } = useDesign('basic-menu-item');

      return {
        prefixCls,
      };
    },
  });
</script>
