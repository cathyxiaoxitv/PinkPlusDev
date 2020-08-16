<template>
  <div>
    <slot>
    </slot>
    <label class="details">
      <input type="text">
    </label>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Details'
};
</script>

<style lang="scss" scoped>
.details {
  padding: 5px;
  display: flex;
  border-bottom:1px solid lightgray ;
  min-height: 50px;
  font-weight: bold;
 & input{
   min-width: 200px;
   height: 80% ;
   border: none;
   border-radius: 5px;
   background: #FFEEED;
 }
 }


</style>