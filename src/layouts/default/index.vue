<template>
  <Layout>
    <LayoutHeader />
    <Layout>
      <LayoutSider />
      <LayoutContent />
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import LayoutHeader from './header/index.vue';
  import LayoutSider from './sider/index.vue';
  import LayoutContent from './content/index.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Layout,
      LayoutHeader,
      LayoutSider,
      LayoutContent,
      Footer: Layout.Footer,
    },
  });
</script>
