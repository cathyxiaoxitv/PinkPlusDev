<template v-slot:name>
  <Details>
    <p slot="title">日期</p>
    <a-date-picker :locale="locale" />
  </Details>

</template>

<script>
import Details from '@/components/Money/Details.vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
export default {
  name: "Date",
  components: {Details,a-date-picker}
  data(){
    return {
      locale,
    }
  }
}
</script>
