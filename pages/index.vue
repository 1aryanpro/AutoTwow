<script lang="ts">
import Vue from 'vue';

export default Vue.extend();
</script>

<template>
  <div :class="$style.page">
    <DashboardTable :class="$style.col" />
    <DashboardTable :class="$style.col" />
  </div>
</template>

<style lang="postcss"></style>

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

.col {
  width: 50%;
  float: left;
}
</style>
