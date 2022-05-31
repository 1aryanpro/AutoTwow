sortArr = [1, 0, 4, 6, 3, 7, 2, 5];

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
    if (greater == 0) {
      this.buff.push(this.arr[this.a]);
      this.a++;
      if (this.a >= this.mid) {
        this.buff.push(...this.arr.slice(this.b, this.right));
        this.nextBound();
        // console.log(this.left, this.mid, this.right);
      }
    } else {
      this.buff.push(this.arr[this.b]);
      this.b++;
      if (this.b >= this.right) {
        this.buff.push(...this.arr.slice(this.a, this.mid));
        this.nextBound();
      }
    }
  }
}

