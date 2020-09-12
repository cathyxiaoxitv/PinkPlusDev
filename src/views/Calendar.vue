<template>
  <Layout>
  <p slot="header">日历</p>
  <div slot="body">
    <a-calendar @panelChange="onPanelChange" />
  </div>
  </Layout>
</template>
<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>