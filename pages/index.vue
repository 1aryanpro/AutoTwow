<script lang="ts">
import Vue from 'vue';

export default Vue.extend();
</script>

<template>
  <div :class="$style.page">
    <nuxt-link :class="$style.login_link" to="/auth/login">Login with Discord</nuxt-link>
    <DashboardTable :class="$style.col" />
    <DashboardTable :class="$style.col" />
  </div>
</template>

<style lang="postcss" module>
.page {
  width: 80%;
  margin: auto;
  padding-top: 40px;
}

.page:after {
  content: "";
  display: table;
  clear: both;
}

.login_link {
  text-decoration: none;
  font-size: 1em;
  color: var(--light);
  font-weight: bold;
  display: block;
  text-align: center;
  padding: 5px;
  border: 3px solid var(--tertiary);
  border-radius: 10px;
  margin-bottom: 15px;
}

.col {
  width: 50%;
  float: left;
}

</style>
