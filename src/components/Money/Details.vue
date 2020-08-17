<template>
  <div class="details">
    <slot>
    </slot>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Details'
};
</script>

<style lang="scss" scoped>
p{
  padding: 10px;
}
.details {
  padding: 5px;
  display: flex;
  border-bottom:1px solid lightgray;
  min-height: 50px;
  font-weight: bold;
 & .inputBox{
   display: flex;
   align-items: center;
   justify-content: center;
   min-width: 200px;
   height: 80% ;
   border: none;
   border-radius: 5px;
   background: #FFEEED;
 }
 }
</style>