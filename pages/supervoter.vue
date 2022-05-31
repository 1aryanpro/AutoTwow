<script lang="ts">
import { TwowSort } from '../components/twowsort.js';

import Vue from 'vue';
export default Vue.extend({});
</script>

<template>
  <div :class="$style.page">
    <div v-if="state == 0">
      <div>
        <button :class="$style.resp">Response Text 1</button
        ><button :class="$style.thumbup">👍</button
        ><button :class="$style.thumbdown">👎</button>
      </div>
      <div>
        <button :class="$style.resp">Response Text 2</button
        ><button :class="$style.thumbup">👍</button
        ><button :class="$style.thumbdown">👎</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped module>
.page {
  width: 75%;
  margin: auto;
  align-items: center;
  text-align: center;
  padding-top: 20px;
}

h3 {
  margin-top: 20vh;
  font-size: 1.25rem;
  color: #a0a0a0;
}

h1 {
  margin-top: 1vh;
  font-size: 2rem;
}

button {
  border-top: 2px solid var(--tertiary);
  border-right: 2px solid var(--tertiary);
  border-bottom: 2px solid var(--tertiary);
  border-left: none;
  background: var(--dark);
  color: var(--light);
  padding: 5px;
  font-size: 1.5rem;
  height: 100px;
  width: 7vw;
}

button.resp {
  border-left: 2px solid var(--tertiary);
  width: 60vw;
}

button:hover {
  cursor: pointer;
  background-color: #202020;
}
</style>
