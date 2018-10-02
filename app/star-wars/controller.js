import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
  peopleMatch: true,

  people: null,

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

  // playerOne: computed('people', function () {
  //   this.get('players').push(this.people.get('firstObject'));
  // }),
  //
  // playerTwo: computed('people', function () {
  //   this.get('players').push(this.people.get('lastObject'));
  // }),

  // _generateRandom() {
  //   return Math.random(this.get('people').length, 1) * 10;
  // },

  actions: {

    play() {
      // this.playerOne = this.store('peekRecord', this._generateRandom());
      // this.playerTwo = this.store('peekRecord', this._generateRandom());
    }
  }
});
