<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      response: '',
    };
  },
  methods: {
    wordCount() {
      let s = this.response;
      s = s.replace(/(^\s*)|(\s*$)/gi, ''); //exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi, ' '); //2 or more space to 1
      s = s.replace(/\n /, '\n'); // exclude newline with a start spacing
      return s.split(' ').filter(function (str) {
        return str != '';
      }).length;
    },
  },
});
</script>

<template>
  <div :class="$style.page">
    <h3>
      You wake up, and realize you have the power to transform into any object
      you look at.
    </h3>
    <h1>How do you use this to make your life easier?</h1>
    <!-- <input type="textarea" /> -->
    <textarea
      v-model="response"
      name="response"
      id="response"
      cols="30"
      rows="1"
      wrap="soft"
    ></textarea>
    <p>{{wordCount()}} words, {{response.length}} chars</p>
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
  padding: 8px;
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
