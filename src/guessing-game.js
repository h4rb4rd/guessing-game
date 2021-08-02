class GuessingGame {
  constructor() {
    this.max = 0;
    this.min = 0;
    this.mid = 0;
  }

  setRange(min, max) {
    this.max = max;
    this.mim = min;
  }

  guess() {
    return (this.mid = Math.ceil((this.max + this.min) / 2));
  }

  lower() {
    return (this.max = this.mid);
  }

  greater() {
    return (this.min = this.mid);
  }
}

module.exports = GuessingGame;

