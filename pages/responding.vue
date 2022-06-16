<script>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      responses: [''],
      respCount: 1,
      drpCount: 1,
    };
  },
  methods: {
    wordCount(s) {
      s = s.replace(/(^\s*)|(\s*$)/gi, ''); //exclude  start and end white-space
      s = s.replace(/[ ]{2,}/gi, ' '); //2 or more space to 1
      s = s.replace(/\n /, '\n'); // exclude newline with a start spacing
      return s.split(' ').filter((str) => str != '').length;
    },
    addResp() {
      if (this.respCount == this.responses.length) this.responses.push('');
      this.respCount++;
      this.drpCount--;
    },
    remResp() {
      if (this.respCount > 1) this.respCount--;
      this.drpCount++;
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

    <h3 :class="$style.drp">
      {{ drpCount }} DRP{{ drpCount == 1 ? '' : 's' }}
    </h3>
    <button
      @click="addResp()"
      :disabled="drpCount == 0"
      :class="drpCount == 0 ? $style.disabled : undefined"
    >
      +
    </button>
    <button
      @click="remResp()"
      :disabled="respCount == 1"
      :class="respCount == 1 ? $style.disabled : undefined"
    >
      -
    </button>

    <div
      :class="$style.resp"
      v-for="(resp, i) in responses.slice(0, respCount)"
      :key="i"
    >
      <textarea
        v-model="responses[i]"
        cols="30"
        rows="1"
        wrap="soft"
      ></textarea>
      <p>{{ wordCount(resp) }} words, {{ resp.length }} chars</p>
    </div>

    <button :class="$style.submit">
      Submit Response{{ respCount == 1 ? '' : 's' }}
    </button>
  </div>
</template>

<style lang="postcss" scoped module>
.page {
  width: 55%;
  margin: auto;
  align-items: center;
  text-align: center;
  padding-top: 10vh;
  padding-bottom: 15vh;
}

h3 {
  font-size: 1.25rem;
  color: #a0a0a0;
}

h1 {
  margin-top: 1vh;
  font-size: 2rem;
  margin-bottom: 2vh;
}

.drp {
  display: inline;
}

button {
  width: 2em;
  height: 2em;
  background: var(--tertiary);
  border: 2px solid var(--tertiary);
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
  color: var(--dark);
}

button:active {
  background: var(--dark);
  color: var(--light);
}

button.disabled {
  background: grey;
  color: var(--dark);
  border: 2px solid darkgray;
}

button.submit {
  width: auto;
  height: auto;
  padding: 4px;
  margin-top: 15px;
  font-size: 1.25em;
  font-weight: bold;
}

.resp {
}

textarea {
  width: 50vw;
  height: auto;
  display: block;
  padding: 8px;
  font-size: 1rem;
  border: 3px solid var(--tertiary);
  margin: 2vh auto 2px auto;
  border-radius: 6px;
  background-color: var(--dark);
  color: var(--light);
  text-align: center;
  resize: none;
}

p {
  color: #808080;
  display: inline;
}
</style>
