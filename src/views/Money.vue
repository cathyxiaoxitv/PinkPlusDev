<template>
  <Layout>
    <Types/>
    <Date/>
    <Notes/>
    <Number/>
    <Tags/>
    <Button/>
  </Layout>
</template>

<script lang="ts">

import Types from '@/components/Money/Types.vue';
import Date from '@/components/Money/Date.vue';
import Notes from '@/components/Money/Notes.vue';
import Number from '@/components/Money/Number.vue';
import Tags from '@/components/Money/Tags.vue';
import Button from '@/components/Money/Button.vue';

export default {
  name: 'Money',
  components: {Button, Tags, Number, Notes, Date, Types},
};
</script>
