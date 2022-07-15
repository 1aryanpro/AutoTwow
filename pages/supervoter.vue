<script>
import TwowSort from '../static/twowsort.js';

function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, ''); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, ' '); //2 or more space to 1
  s = s.replace(/\n /, '\n'); // exclude newline with a start spacing
  return s.split(' ').filter((str) => str != '').length;
}

import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      state: 0,
      userIDs: '',
      responseText: '',
      sort: new TwowSort([]),
      numBounds: 0,
      responses: {},
      dTier: [],
      cTier: [],
      bTier: [],
      aTier: [],
      uTier: [],
      counts: {},
      wcConf: {},
      sortStep: 0,
      wordCount: 0,
      cur: '',
    };
  },
  computed: {
    sortedArr() {
      return [...this.uTier, ...this.aTier, ...this.bTier, ...this.cTier, ...this.dTier];
    },
  },
  methods: {
    nextStep() {
      this.state++;
      if (this.state == 1) {
        this.responseText.split('\n').forEach((el) => {
          let line = el.split('\t');
          if (line[1] == "" || line[1] == undefined) return;
          this.responses[line[0]] = line[1];
          this.counts[line[0]] = countWords(line[1]);
          this.wcConf[line[0]] = !/^[0-9A-Za-z …’“”:,'".!?]+$/.test(line[1]);
        });
        this.uTier = this.userIDs.split('');
        this.nextWcCheck();
      } else if (this.state == 2) {
        let sortArr = Object.keys(this.responses).filter(id => !this.uTier.includes(id));
        this.dTier = sortArr.filter((id) => this.counts[id] != 10);
        this.bTier = sortArr.filter((id) => this.counts[id] == 10);
        this.sort = new TwowSort(this.dTier, true, false);
        this.numBounds = this.sort.bounds.length + 1;
        this.autoCmp();
      }
    },
    nextWcCheck() {
      this.counts[this.cur] = this.wordCount;
      this.wcConf[this.cur] = false;
      this.cur = Object.keys(this.wcConf).find(
        (key) => this.wcConf[key] == true
      );
      if (this.cur == undefined) this.nextStep();
      else this.wordCount = this.counts[this.cur];
    },
    cmp(greater) {
      this.sort.cmp(greater);
      this.sortCheck();
    },
    autoCmp() {
      if (this.sortStep != 0) return;

      let wc1 = Math.abs(10 - this.counts[this.sort.arr[this.sort.a]]);
      let wc2 = Math.abs(10 - this.counts[this.sort.arr[this.sort.b]]);

      if (wc1 > wc2) this.cmp(1);
      else if (wc1 < wc2) this.cmp(0);

      if (wc1 != wc2) this.autoCmp();
    },
    tier(pos, dir) {
      this.sort.tier(pos, dir);
      this.sortCheck();
    },
    sortCheck() {
      if (!this.sort.finished) {
        this.autoCmp();
        return;
      }
      this.sortStep++;
      switch (this.sortStep) {
        case 1:
          this.bTier.push(...this.sort.up);
          this.sort = new TwowSort(this.bTier, true, true);
          this.numBounds = this.sort.bounds.length + 1;
          break;
        case 2:
          this.cTier = this.sort.down;
          this.aTier = this.sort.up;
          this.sort = new TwowSort(this.cTier, false, false);
          this.numBounds = this.sort.bounds.length + 1;
          if (this.cTier.length <= 1) this.sortCheck();
          break;
        case 3:
          this.sort = new TwowSort(this.aTier, false, false);
          this.numBounds = this.sort.bounds.length + 1;
          if (this.aTier.length <= 1) this.sortCheck();
          break;
        case 4:
          this.nextStep();
          break;
      }
    },
  },
});
</script>

<template>
  <div :class="$style.page">
    <div v-if="state == 0">
      <h1>Input Data</h1>
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
    <div v-if="state == 1">
      <h1>Confirm Word Counts</h1>
      <div>
        <button :class="$style.wccheck_resp">
          {{ responses[cur] }}</button
        ><input
          type="number"
          :class="$style.wccheck_input"
          v-model="wordCount"
        /><button :class="$style.wccheck_submit" @click="nextWcCheck()">
          Next
        </button>
      </div>
      <button :class="$style.submit" @click="nextStep">Skip</button>
    </div>
    <div v-if="state == 2">
      <progress
        :value="
          numBounds -
          sort.bounds.length -
          1 +
          (sort.a - sort.left + sort.b - sort.mid) / (sort.right - sort.left)
        "
        :max="numBounds"
      ></progress>
      <h1>
        Sorting
        {{
          sortStep == 0
            ? 'D Tier'
            : sortStep == 1
            ? 'B Tier'
            : sortStep == 2
            ? 'C Tier'
            : 'A Tier'
        }}
        Responses
      </h1>
      <div>
        <button :class="$style.resp" @click="cmp(0)">
          {{ responses[sort.arr[sort.a]] }}</button
        ><button
          :class="$style.thumbup"
          @click="sort.tier(0, 0)"
          v-if="sort.tierUp"
        >
          👍</button
        ><button
          :class="$style.thumbdown"
          @click="sort.tier(0, 1)"
          v-if="sort.tierDown"
        >
          👎
        </button>
      </div>
      <div>
        <button :class="$style.resp" @click="cmp(1)">
          {{ responses[sort.arr[sort.b]] }}</button
        ><button :class="$style.thumbup" @click="tier(1, 0)" v-if="sort.tierUp">
          👍</button
        ><button
          :class="$style.thumbdown"
          @click="tier(1, 1)"
          v-if="sort.tierDown"
        >
          👎
        </button>
      </div>
    </div>
    <div v-if="state == 3">
      <h1>Finished!</h1>
      [KEYWORD {{ sortedArr.join('') }}]
      <pre :class="$style.final_list">{{ sortedArr.map(id => `${id}\t${responses[id]}`).join('\n') }}</pre>
    </div>
    <!-- <p>Array: {{ sort.arr.join('') }}</p> -->
    <!-- <p>Up: {{ sort.up.join('') }}</p> -->
    <!-- <p>Down: {{ sort.down.join('') }}</p> -->

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
  text-align: center;
}

progress {
  width: 60%;
  height: 40px;
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

h1 {
  margin-bottom: 20px;
}

.wccheck_resp {
  width: 60%;
  border-left: 2px solid var(--tertiary);
}

.wccheck_resp:hover {
  cursor: default;
  background: var(--dark);
}

.wccheck_submit {
  width: 10%;
  border-left: 2px solid var(--tertiary);
}

.wccheck_input {
  width: 10%;
  height: 100px;
  font-size: 3rem;
  border-radius: 0;
}

.final_list {
  text-align: left;
  margin-top: 10px;
  line-height: 1.25rem;
  font-size: 1rem;
}
</style>
