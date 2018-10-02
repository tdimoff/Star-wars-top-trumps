import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  peopleMatch: false,

  people: null,

  starships: null,

  _generateRandomId(people) {
    return Math.floor(Math.random(1, people.length) * 10);
  },

  players: computed('people', 'starships', function() {
    const resource = this.get('peopleMatch') ? this.get('people') : this.get('starships');

    return [
      resource.objectAt(this._generateRandomId(resource)),
      resource.objectAt(this._generateRandomId(resource))
    ]
  }),

  actions: {

    play() {
      const resource = this.get('peopleMatch') ? this.get('people') : this.get('starships');

      const playerOne = resource.objectAt(this._generateRandomId(resource));
      let playerTwo = resource.objectAt(this._generateRandomId(resource));

      //if playerOne's id is the last in the store
      // if (&& people.objectAt(playerOne.get('id')) + 1)
      if (playerOne.get('id') === playerTwo.get('id')) {
        playerTwo = resource.objectAt(playerOne.get('id') + 1);
      }

      this.set('players', [playerOne, playerTwo]);

      if (playerOne.mass && playerTwo.mass) {
        playerOne.score +=1;
      } else {
        playerTwo.score +=1;
      }
    },

    setResource() {
      if (event.value === 'starships') {
        this.set('peopleMatch', false);
      }
    }
  }
});
