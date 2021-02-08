<template>
  <div :class="prefixCls">
    <Popover title="" trigger="click" :overlayClassName="`${prefixCls}__overlay`">
      <Badge :count="count" dot :class="prefixCls + '__badge'">
        <BellOutlined />
      </Badge>
      <template #content>
        <h1>放一些提醒信息</h1>
      </template>
    </Popover>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Popover, Badge } from 'ant-design-vue';
  import { BellOutlined } from '@ant-design/icons-vue';
  import { useDesign } from '@/hooks/web/useDesign';

  export default defineComponent({
    name: 'HeaderNotify',
    components: {
      Popover,
      BellOutlined,
      Badge,
    },
    setup() {
      const count = ref(5);
      const { prefixCls } = useDesign('header-notify');

      return {
        count,
        prefixCls,
      };
    },
  });
</script>

<style lang="less">
  @prefix-Cls: ~'@{namespace}-header-notify';
  .@{prefix-Cls} {
    height: @header-height + 8;
    cursor: pointer;

    &__overlay {
      max-width: 360px;
    }

    span[role='img'] {
      font-size: 16px;
    }

    &__badge {
      .ant-badge-dot {
        width: 8px;
        height: 8px;
      }
    }
  }
</style>
