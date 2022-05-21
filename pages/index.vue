<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<template>
  <div :class="$style.app"></div>
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

body {
  background-color: var(--dark);
  font-family: 'Roboto', sans-serif;
  color: var(--light);
}
</style>

<style lang="postcss" module>
.app {
  margin: auto;
}
</style>
