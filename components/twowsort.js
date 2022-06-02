function mergeBounds(start, stop) {
  if (stop - start < 2) {
    return [];
  }

  var mid = Math.floor((stop - start) / 2) + start;
  var left = mergeBounds(start, mid);
  var right = mergeBounds(mid, stop);

  return [[start, mid, stop], ...right, ...left];
}

export default class TwowSort {
  constructor(arr) {
    this.arr = arr;
    this.left = 0;
    this.right = 0;
    this.mid = 0;
    this.a = 0;
    this.b = 0;
    this.buff = [];
    this.up = [];
    this.down = [];
    this.finished = false;

    this.bounds = mergeBounds(0, arr.length);

    this.nextBound();
  }

  nextBound() {
    for (let i = this.left; i < this.right; i++) {
      this.arr[i] = this.buff.shift();
    }

    let bound = this.bounds.pop();
    if (bound == undefined) {
      this.finished = true;
      return;
    }

    this.left = bound[0];
    this.mid = bound[1];
    this.right = bound[2];
    this.a = bound[0];
    this.b = bound[1];

    this.buff = [];
  }

  cmp(greater) {
    if (this.finished) return;
    if (greater == 0) {
      this.buff.push(this.arr[this.a]);
      this.a++;
      if (this.a == this.mid) {
        this.buff.push(...this.arr.slice(this.b, this.right));
        this.nextBound();
      }
    } else {
      this.buff.push(this.arr[this.b]);
      this.b++;
      if (this.b == this.right) {
        this.buff.push(...this.arr.slice(this.a, this.mid));
        this.nextBound();
      }
    }
  }

  tier(pos, dir) {
    if (this.finished) return;
    let cur = pos == 0 ? this.a : this.b;
    let el = this.arr.splice(cur, 1)[0];
    if (dir == 0) this.up.push(el);
    else if (dir == 1) this.down.push(el);

    this.bounds = this.bounds.map((bound) =>
      bound.map((num) => (num > cur ? num - 1 : num))
    );
    this.mid = this.mid > cur ? this.mid - 1 : this.mid;
    this.right = this.right > cur ? this.right - 1 : this.right;
    this.b = this.b > cur ? this.b - 1 : this.b;

    if (this.a == this.mid) {
      this.buff.push(...this.arr.slice(this.b, this.right));
      this.nextBound();
    }
    else if (this.b == this.right) {
      this.buff.push(...this.arr.slice(this.a, this.mid));
      this.nextBound();
    }
  }
}
