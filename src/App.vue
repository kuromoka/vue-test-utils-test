<template>
  <div id="app">
    <HelloWorld2 msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import HelloWorld2 from './components/HelloWorld2.vue';

export default createComponent({
  components: {
    HelloWorld2
  },
});
</script>
