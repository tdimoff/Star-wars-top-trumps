import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  init() {
    this.set('score', [
      { playerOne: 0 },
      { playerTwo: 0}
    ]);
  },

  peopleMatch: true,

  people: null,

  score: null,

  _generateRandomId(people) {
    return Math.floor(Math.random(1, people.length) * 10);
  },

  players: computed('people', function() {
    const people = this.get('people');

    return [
      people.objectAt(this._generateRandomId(people)),
      people.objectAt(this._generateRandomId(people))
    ]
  }),

  actions: {

    play() {
      const people = this.get('people');
      const playerOne = people.objectAt(this._generateRandomId(people));
      const playerTwo = people.objectAt(this._generateRandomId(people));

      this.set('players', [playerOne, playerTwo]);

      if (playerOne.mass > playerTwo.mass) {
        this.set('')
      }
    },

    setResource(value) {
      if (value === 'starships') {
        this.set('peopleMatch', false);
      }
    }
  }
});
