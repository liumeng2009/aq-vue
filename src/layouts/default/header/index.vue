<template>
  <Header :class="`${prefixCls}`">
    <div :class="`${prefixCls}-action`">
      <UserDropDown />
      <FullScreen :class="`${prefixCls}-action__item fullscreen-item`" />
      <Notify />
    </div>
  </Header>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '@/hooks/web/useDesign';

  import { FullScreen, UserDropDown, Notify } from './components';

  export default defineComponent({
    name: 'LayoutHeader',
    components: {
      Header: Layout.Header,
      FullScreen,
      UserDropDown,
      Notify,
    },
    setup() {
      const { prefixCls } = useDesign('layout-header');

      return {
        prefixCls,
      };
    },
  });
</script>

<style lang="less">
  @import './index.less';
</style>
