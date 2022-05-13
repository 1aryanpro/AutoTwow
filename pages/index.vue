<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<template>
  <div :class="$style.app">
    <p>testing</p>
  </div>
</template>

<style lang="postcss">
:root {
  --dark: #303030;
  --light: lightgray;

  --primary: ;
  --secondary: ;
}
</style>

<style lang="postcss" module>
.app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: var(--dark);
  color: var(--light);
}
</style>
