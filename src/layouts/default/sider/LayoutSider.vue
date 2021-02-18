<template>
  <div
    v-if="getMenuFixed && !getIsMobile"
    :style="getHiddenDomStyle"
    :class="{ hidden: !showClassSideBarRef }"
  ></div>
  <Sider
    ref="sideRef"
    breakpoint="lg"
    collapsible
    :width="getMenuWidth"
    :collapsed="getIsMobile ? false : getCollapsed"
    :collapsedWidth="getCollapsedWidth"
    :theme="getMenuTheme"
    @collapse="onCollapseChange"
    @breakpoint="onBreakpointChange"
    v-bind="getTriggerAttr"
  >
    <LayoutMenu />
  </Sider>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Layout } from 'ant-design-vue';
  import LayoutMenu from '../menu';

  import { useDesign } from '@/hooks/web/useDesign';
  export default defineComponent({
    name: 'LayoutSideBar',
    components: { Sider: Layout.Sider, LayoutMenu },
    setup() {
      const dragBarRef = ref<ElRef>(null);
      const sideRef = ref<ElRef>(null);

      const { prefixCls } = useDesign('layout-sideBar');

      return {
        prefixCls,
        sideRef,
        dragBarRef,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-layout-sideBar';

  .@{prefix-cls} {
    z-index: @layout-sider-fixed-z-index;

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
    }

    &--mix {
      top: @header-height;
      height: calc(100% - @header-height);
    }

    &.ant-layout-sider-dark {
      background: @sider-dark-bg-color;

      .ant-layout-sider-trigger {
        color: darken(@white, 25%);
        background: @trigger-dark-bg-color;

        &:hover {
          color: @white;
          background: @trigger-dark-hover-bg-color;
        }
      }
    }

    &:not(.ant-layout-sider-dark) {
      // box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);

      .ant-layout-sider-trigger {
        color: @text-color-base;
        border-top: 1px solid @border-color-light;
      }
    }

    .ant-layout-sider-zero-width-trigger {
      top: 40%;
      z-index: 10;
    }

    & .ant-layout-sider-trigger {
      height: 36px;
      line-height: 36px;
    }
  }
</style>
