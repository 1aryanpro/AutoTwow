<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<template>
  <div :class="$style.page">
    <h3>
      You wake up, and realize you have the power to transform into any object
      you look at.
    </h3>
    <h1>How do you use this to make your life easier?</h1>
    <!-- <input type="textarea" /> -->
    <textarea name="thing" id="thing" cols="30" rows="1" wrap="soft"></textarea>
    <p>X words, Y chars</p>
  </div>
</template>

<style lang="postcss" scoped module>
.page {
  width: 55%;
  margin: auto;
  align-items: center;
  text-align: center;
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

textarea {
  width: 40vw;
  height: auto;
  padding: 5px;
  font-size: 1rem;
  border: 3px solid var(--tertiary);
  margin-top: 2vh;
  border-radius: 6px;
  background-color: var(--dark);
  color: var(--light);
  text-align: center;
  resize: none;
}

p {
  margin-top: 5px;
  color: #808080;
}
</style>
