import './index.less';
import type { Menu } from '@/router/types';

import type { CSSProperties } from 'vue';

import { computed, defineComponent, unref, ref } from 'vue';
import { SimpleMenu } from '@/components/menu';

import { useGo } from '@/hooks/web/usePage';
import { ScrollContainer } from '@/components/container';
import { getMenus } from '@/router/menus';

import { openWindow } from '@/utils';
import { isUrl } from '@/utils/is';

export default defineComponent({
  name: 'LayoutMenu',
  async setup() {
    const go = useGo();

    const menusRef = ref<Menu[]>([]);
    menusRef.value = await getMenus();

    const getWrapperStyle = computed(
      (): CSSProperties => {
        return {
          height: `calc(100% - 48px)`,
        };
      }
    );
    /**
     * click menu
     * @param menu
     */

    function handleMenuClick(path: string) {
      go(path);
    }

    /**
     * before click menu
     * @param menu
     */
    async function beforeMenuClickFn(path: string) {
      if (!isUrl(path)) {
        return true;
      }
      openWindow(path);
      return false;
    }

    function renderMenu() {
      const menus = unref(menusRef);
      console.log(menus);
      if (!menus || !menus.length) return null;
      return (
        <SimpleMenu beforeClickFn={beforeMenuClickFn} items={menus} onMenuClick={handleMenuClick} />
      );
    }

    return () => {
      return (
        <>
          {<ScrollContainer style={unref(getWrapperStyle)}>{() => renderMenu()}</ScrollContainer>}
        </>
      );
    };
  },
});
