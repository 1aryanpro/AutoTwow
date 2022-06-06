<script lang="ts">
// import Vue from 'vue';

export default {};
</script>

<template>
  <nav>
    <ul>
      <li :class="$style.brand"><NuxtLink to="/">AutoTWOW</NuxtLink></li>
      <li>
        <NuxtLink to="/">Voting</NuxtLink>
      </li>
      <li>
        <NuxtLink to="supervoter">Supervoter</NuxtLink>
      </li>
      <li>
        <NuxtLink to="responding">Responses</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Dashboard</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss" module>
nav {
  background: var(--tertiary);
}

nav ul {
  list-style-type: none;
  overflow: hidden;
  margin: 0 auto;
  width: 60%;
  align-items: center;
  background: var(--tertiary);
}

nav li {
  display: flex;
  float: right;
  width: 100px;
  height: 20px;
  padding: 13px 15px;
  justify-content: center;
  align-items: center;

  background: var(--dark);
  margin: 4px 2px;
}

nav li a {
  color: var(--light);
  text-decoration: none;
}

nav li.brand {
  float: left;
  width: fit-content;
}

nav li.brand a {
  font-family: 'Audiowide', sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  color: var(--tertiary);
}
</style>
