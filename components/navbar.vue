<script lang="ts">
import Vue from 'vue';

export default {};
</script>

<template>
  <nav>
    <ul>
      <li :class="$style.brand">AutoTWOW</li>
      <li>Voting</li>
      <li>Responses</li>
      <li>Dashboard</li>
    </ul>
  </nav>
</template>

<style lang="postcss" module>
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
