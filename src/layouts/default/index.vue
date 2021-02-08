<template>
  <Layout>
    <LayoutHeader />
    <Layout>
      <LayoutSider />
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';
  import LayoutHeader from './header/index.vue';
  import LayoutSider from './sider/index.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Layout,
      LayoutHeader,
      LayoutSider,
      Content: Layout.Content,
      Footer: Layout.Footer,
    },
  });
</script>
