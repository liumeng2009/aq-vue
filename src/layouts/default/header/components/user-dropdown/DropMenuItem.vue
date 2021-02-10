<template>
  <MenuItem :key="key">
    <span class="flex items-center">
      <component :is="icon" />
      <span>{{ text }}</span>
    </span>
  </MenuItem>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Menu } from 'ant-design-vue';
  import { PoweroffOutlined, SettingOutlined } from '@ant-design/icons-vue';
  // import Icon from '@/components/Icon/index';
  import { propTypes } from '@/utils/propTypes';

  export default defineComponent({
    name: 'DropdownMenuItem',
    components: {
      MenuItem: Menu.Item,
      PoweroffOutlined,
      SettingOutlined,
    },
    props: {
      key: propTypes.string,
      text: propTypes.string,
      icon: propTypes.string,
    },
  });
</script>

<style lang="less"></style>
