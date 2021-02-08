<template>
  <Dropdown placement="bottomLeft">
    <span :class="[prefixCls]">
      <img :class="`${prefixCls}__header`" :src="userAvatar" alt="" />
      <span :class="`${prefixCls}__info`">管理员</span>
      <span :class="`${prefixCls}__arrow`"></span>
    </span>

    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem key="settings" text="个人设置" icon="SettingOutlined" />
        <MenuItem key="loginOut" text="退出登录" icon="PoweroffOutlined" />
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { Dropdown, Menu } from 'ant-design-vue';

  import { userStore } from '@/store/modules/user';
  import { createAsyncComponent } from '@/utils/factory/createAsyncComponent.tsx';
  import { useDesign } from '@/hooks/web/useDesign';

  type MenuEvent = 'loginOut' | 'doc';

  export default defineComponent({
    name: 'UserDropdown',
    components: {
      Dropdown,
      Menu,
      MenuItem: createAsyncComponent(() => import('./DropMenuItem.vue')),
    },
    setup() {
      const { prefixCls } = useDesign('header-user-dropdown');
      const userAvatar = require('@/assets/images/header.jpg');
      const getUserInfo = computed(() => {
        const { realName } = userStore.getUserInfoState || {};
        return realName;
      });

      function handleLoginOut() {
        alert('退出');
      }

      function handleMenuClick(e: { key: MenuEvent }) {
        switch (e.key) {
          case 'loginOut':
            handleLoginOut();
            break;
          default:
            break;
        }
      }

      return {
        getUserInfo,
        userAvatar,
        prefixCls,
        handleMenuClick,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-header-user-dropdown';

  .@{prefix-cls} {
    display: flex;
    height: @header-height;
    min-width: 100px;
    padding: 0 0 0 10px;
    padding-right: 10px;
    margin-left: 80px;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      margin-right: 12px;
      margin-top: -10px;
    }

    &__info {
      margin-top: -10px;
    }

    &__header {
      border-radius: 50%;
    }

    &__arrow {
      width: 0px;
      height: 0px;
      margin-left: 12px;
      margin-top: -6px;
      .down-arrow(6px, @primary-color);
    }
  }
</style>
