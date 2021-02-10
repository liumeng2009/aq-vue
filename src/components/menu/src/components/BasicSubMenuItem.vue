<template>
  <BasicMenuItem v-if="!menuHasChildren(item) && getShowMenu" />
  <SubMenu v-if="menuHasChildren(item) && getShowMenu">
    <template #title>
      <MenuItemContent :item="item" />
    </template>

    <template v-for="childrenItem in item.children || []" :key="childrenItem.path">
      <BasicSubMenuItem :item="childrenItem" />
    </template>
  </SubMenu>
</template>

<script lang="ts">
  import type { Menu as MenuType } from '@/router/types';

  import { useDesign } from '@/hooks/web/useDesign';
  import { computed, defineComponent } from 'vue';
  import { Menu } from 'ant-design-vue';

  import { itemProps } from '../props';
  import BasicMenuItem from './BasicMenuItem.vue';
  import MenuItemContent from './MenuItemContent.vue';
  export default defineComponent({
    name: 'BasicSubMenuItem',
    components: {
      BasicMenuItem,
      SubMenu: Menu.SubItem,
      MenuItemContent,
    },
    props: itemProps,
    setup(props) {
      const { prefixCls } = useDesign('basic-menu-item');

      const getShowMenu = computed(() => {
        return props.item.meta?.hideMenu;
      });

      function menuHasChildren(menuTreeItem: MenuType): boolean {
        return (
          Reflect.has(menuTreeItem, 'children') &&
          !!menuTreeItem.children &&
          menuTreeItem.children.length > 0
        );
      }

      return {
        prefixCls,
        getShowMenu,
        menuHasChildren,
      };
    },
  });
</script>
