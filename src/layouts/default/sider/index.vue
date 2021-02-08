<template>
  <Sider>
    <Menu>
      <MenuItem>
        <span>nav 1</span>
      </MenuItem>
    </Menu>
  </Sider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Layout, Menu } from 'ant-design-vue';
  import { useDesign } from '@/hooks/web/useDesign';
  export default defineComponent({
    name: 'LayoutSider',
    components: {
      Sider: Layout.Sider,
      Menu,
      MenuItem: Menu.Item,
    },
    setup() {
      const { prefixCls } = useDesign('layout-sidebar');

      return {
        prefixCls,
      };
    },
  });
</script>
<style lang="less"></style>
