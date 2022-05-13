<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<template>
  <div :class="$style.app">
    <ul :class="$style.nav">
      <li :class="$style.logo">AutoTWOW</li>
      <li>Home</li>
      <li>Something</li>
      <li>Other Thing</li>
    </ul>
  </div>
</template>

<style lang="postcss">
:root {
  --dark: #303030;
  --light: lightgray;

  --primary: ;
  --secondary: ;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="postcss" module>
body {
  background-color: var(--dark);
}

.app {
  margin: auto;
  background-color: var(--dark);
  color: var(--light);
}

.nav {
  list-style-type: none;
  overflow: hidden;
  border-bottom: 3px solid green;

  & li {
    float: left;
    padding: 10px;

    &.logo {
      font-weight: bolder;
    }

    &:hover {
      background-color: #202020;
    }
  }
}
</style>
