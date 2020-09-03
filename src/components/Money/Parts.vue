<template>
  <div class="parts">
    <slot name="title"></slot>
    <slot name="content">
    </slot>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Parts'
};
</script>

<style lang="scss" scoped>
p{
  padding: 10px;
}
.parts {
  padding: 5px;
  display: flex;
  border-bottom:1px solid lightgray;
  min-height: 50px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
 & input{
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   min-width: 250px;
   min-height: 40px ;
   padding: 0 10px;
   margin:0 30px;
   border-radius: 5px;
   background: #FFEEED;
 }
 }
</style>