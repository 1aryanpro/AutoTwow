<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<template>
  <div :class="$style.app">
    <nav>
      <ul>
        <li :class="$style.brand">AutoTWOW</li>
        <li>Home</li>
        <li>Something</li>
        <li>Other Thing</li>
      </ul>
    </nav>
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

nav {
  border-bottom: 3px solid green;

  & ul {
    list-style-type: none;
    overflow: hidden;
    margin: 0 auto;
    width: 60%;
    align-items: center;
  }

  & li {
    float: right;
    height: 50px;
    width: 110px;
    padding: 13px 10px;
    text-align: center;

    &.brand {
      font-weight: bolder;
      float: left;
      background-color: #202020;
    }

    &:hover {
      background-color: #202020;
      cursor: pointer;
    }
  }
}
</style>
