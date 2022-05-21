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
        <li>Voting</li>
        <li>Responses</li>
        <li>Dashboard</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap');

:root {
  --dark: #323031;
  --light: #e5e5e5;

  --primary: #177e89;
  --primaryDark: #084c61;
  --secondary: #db3a34;
  --tertiary: #ffc857;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="postcss" module>
body {
  background-color: var(--dark);
  font-family: 'Roboto', sans-serif;
}

.app {
  margin: auto;
  background-color: var(--dark);
  color: var(--light);
}

nav ul {
  list-style-type: none;
  overflow: hidden;
  margin: 0 auto;
  width: 60%;
  align-items: center;
  border-bottom: 2px solid var(--tertiary);
  border-top: 2px solid var(--tertiary);
  background: #202020;
}

nav li {
  float: right;
  width: 100px;
  padding: 13px 15px;
  text-align: center;

  border-left: 2px solid var(--tertiary);
}

nav li:nth-child(2) {
  border-right: 2px solid var(--tertiary);
}

nav li.brand {
  float: left;
  border-right: 2px solid var(--tertiary);
  font-family: 'Montserrat', sans-serif;
  color: var(--tertiary);
}
</style>
