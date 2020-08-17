<template v-slot:name>
  <Details>
    <p>日期</p>
    <label >
      <input type="text" class="inputBox">
    </label>
  </Details>

</template>

<script lang="ts">
import Details from '@/components/Money/Details.vue';
export default {

name: "Date",
  components: {Details}
}
</script>
