<template>
  <div class="hello">
    <Button :type="color" @click="handleBtnClick">{{ text }}</Button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { propTypes } from '@/utils/propTypes';
  import { useDebounce } from '@/hooks/core/useDebounce';

  import { Button } from 'ant-design-vue';

  export default defineComponent({
    name: 'HelloWorld',
    components: {
      Button,
    },
    props: {
      text: propTypes.string,
      color: propTypes.oneOf(['primary', 'default', 'success', 'danger']).def('primary'),
    },
    setup() {
      const btnClick = () => {
        console.log('clicked');
      };
      const [handleBtnClick] = useDebounce(btnClick, 2000);
      return { handleBtnClick };
    },
  });
</script>
