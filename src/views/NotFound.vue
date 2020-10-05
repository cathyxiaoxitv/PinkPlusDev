<template>
  <empty-data></empty-data>

</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import EmptyData from "@/components/Money/EmptyData.vue";

@Component({
  components: {EmptyData}
})
export default class NotFound extends Vue {
}
</script>

<style lang="scss" scoped>

</style>