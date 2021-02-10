import { useTimeoutFn } from '@/hooks/core/useTimeout';
import { es6Unique } from '@/utils';
import { getAllParentPath } from '@/router/helper/menuHelper';

import { toRaw, unref, Ref, computed } from 'vue';
import { MenuState } from './types';
import type { Menu as MenuType } from '@/router/types';

export function useOpenKeys(menuState: MenuState, menus: Ref<MenuType[]>, accordion: Ref<boolean>) {
  async function setOpenKeys(path: string) {
    useTimeoutFn(
      () => {
        const menuList = toRaw(menus.value);
        if (menuList?.length === 0) {
          menuState.openKeys = [];
          return;
        }

        if (!unref(accordion)) {
          menuState.openKeys = es6Unique([
            ...menuState.openKeys,
            ...getAllParentPath(menuList, path),
          ]);
        } else {
          menuState.openKeys = getAllParentPath(menuList, path);
        }
      },
      16,
      false
    );
  }

  const getOpenKeys = computed(() => {
    return menuState.collapsedOpenKeys;
  });

  function resetKeys() {
    menuState.selectedKeys = [];
    menuState.openKeys = [];
  }

  function handleOpenChange(openKeys: string[]) {
    const rootSubMenuKeys: string[] = [];
    for (const { children, path } of unref(menus)) {
      if (children && children.length > 0) {
        rootSubMenuKeys.push(path);
      }
    }
    // if (!unref(getCollapsed)) {
    const latestOpenKey = openKeys.find((key) => menuState.openKeys.indexOf(key) === -1);
    if (rootSubMenuKeys.indexOf(latestOpenKey as string) === -1) {
      menuState.openKeys = openKeys;
    } else {
      menuState.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
    // } else {
    //   menuState.collapsedOpenKeys = openKeys;
    // }
  }

  return { setOpenKeys, getOpenKeys, resetKeys, handleOpenChange };
}
