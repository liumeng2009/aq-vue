<template>
  <Menu
    :selectedKeys="selectedKeys"
    :defaultSelectedKeys="defaultSelectedKeys"
    :openKeys="getOpenKeys"
    :class="getMenuClass"
    @openChange="handleOpenChange"
    @click="handleMenuClick"
    :subMenuOpenDelay="0.2"
  >
    <template v-for="item in items" :key="item.path">
      <BasicSubMenuItem :item="item" />
    </template>
  </Menu>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import { Menu } from 'ant-design-vue';
  import { MenuState } from './types';
  import BasicSubMenuItem from './components/BasicSubMenuItem.vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useOpenKeys } from './useOpenKeys';
  import { basicProps } from './props';
  import { isFunction } from '@/utils/is';
  export default defineComponent({
    name: 'BasicMenu',
    components: {
      Menu,
      BasicSubMenuItem,
    },
    props: basicProps,
    emits: ['menuClick'],
    setup(props, { emit }) {
      // const currentActiveMenu = ref('');

      const menuState = reactive<MenuState>({
        defaultSelectedKeys: [],
        openKeys: [],
        selectedKeys: [],
        collapsedOpenKeys: [],
      });

      const { prefixCls } = useDesign('basic-menu');

      const { items, accordion } = toRefs(props);

      const { handleOpenChange, getOpenKeys } = useOpenKeys(menuState, items, accordion);

      async function handleMenuClick({ key }: { key: string; keyPath: string[] }) {
        const { beforeClickFn } = props;
        if (beforeClickFn && isFunction(beforeClickFn)) {
          const flag = await beforeClickFn(key);
          if (!flag) return;
        }
        emit('menuClick', key);
        menuState.selectedKeys = [key];
      }

      return {
        prefixCls,
        handleMenuClick,
        handleOpenChange,
        getOpenKeys,
        ...toRefs(menuState),
      };
    },
  });
</script>
<style lang="less">
  @import './index.less';
</style>
