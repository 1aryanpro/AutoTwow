<script lang="ts">
import TwowSort from '../components/twowsort.js';

import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      state: 0,
      userIDs: '',
      responseText: '',
      sort: new TwowSort([]),
      responses: {},
    };
  },
  methods: {
    nextStep() {
      if (this.state == 0) {
        let sortArr: String[] = [];
        this.responseText.split('\n').forEach((el) => {
          let line = el.split('\t');
          this.responses[line[0]] = line[1];
          sortArr.push(line[0]);
        });

        this.sort = new TwowSort(sortArr);

        this.state++;
      }
    },
  },
});
</script>

<template>
  <div :class="$style.page">
    <div v-if="state == 0">
      <input type="text" v-model="userIDs" placeholder="Your Response Codes" />
      <textarea
        name="responseText"
        id="responseText"
        rows="20"
        v-model="responseText"
        placeholder="Responses"
      ></textarea>
      <button :class="$style.submit" @click="nextStep">Start Supervoter</button>
    </div>
    <div v-if="state == 2">
       <div>
        <button :class="$style.wccheck_btn">
          {{ responses[sort.arr[sort.a]] }}</button
        ><input type="number" :class="$style.wccheck_input"/>
       </div>
    </div>
    <div v-if="state == 1">
      <div>
        <button :class="$style.resp" @click="sort.cmp(0)">
          {{ responses[sort.arr[sort.a]] }}</button
        ><button :class="$style.thumbup" @click="sort.tier(0, 0)">👍</button
        ><button :class="$style.thumbdown" @click="sort.tier(0, 1)">👎</button>
      </div>
      <div>
        <button :class="$style.resp" @click="sort.cmp(1)">
          {{ responses[sort.arr[sort.b]] }}</button
        ><button :class="$style.thumbup" @click="sort.tier(1, 0)">👍</button
        ><button :class="$style.thumbdown" @click="sort.tier(1, 1)">👎</button>
      </div>
    </div>
    <p>Array: {{sort.arr.join('')}}</p>
    <p>Up: {{sort.up.join('')}}</p>
    <p>Down: {{sort.down.join('')}}</p>
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
  font-size: 1.5rem;
  padding: 5px;
  height: 160px;
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

input,
textarea {
  border: 3px solid var(--tertiary);
  background: var(--dark);
  border-radius: 8px;
  font-family: monospace;
  font-size: 1rem;
  padding: 5px;
  color: var(--light);
  margin-top: 15px;
  resize: none;
}

input {
  width: 50%;
}

textarea {
  width: 100%;
}

button.submit {
  width: 40%;
  height: 50px;
  border: none;
  background: var(--tertiary);
  color: var(--dark);
  font-weight: bold;
  margin-top: 15px;
}

.wccheck_btn {
  width: 60%;
  border-left: 2px solid var(--tertiary);
}

.wccheck_input {
  width: 10%;
  height: 100px;
  font-size: 3rem;
}

</style>
