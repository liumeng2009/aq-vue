<template>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Layout,
    Header: Layout.Header,
    Content: Layout.Content,
    Footer: Layout.Footer
  }
});
</script>
