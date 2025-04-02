const ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep() {
    console.log(this.step);
  },
};

ladder.showStep();
ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep();
