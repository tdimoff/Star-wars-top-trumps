import Controller from '@ember/controller';

export default Controller.extend({
  playerOne: null,
  playerTwo: null,

  actions: {
    play() {
      const player = Math.random(this.get('people').length, 1);
    }
  }
});
