import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  randomPage: null,

  resource: null,

  count: null,

  winning: null,

  playerOneScore: 0,

  playerTwoScore: 0,

  peopleMatch: null,

  commonProperty: computed('peopleMatch', function () {
    return this.get('peopleMatch') ? 'mass' : 'crew'
  }),

  _generateRandomIndex() {
    let recordsPerPage = 10;
    let totalCount = this.get('count');

    if (this.get('randomPage') === Math.ceil(totalCount / 10)) {
      recordsPerPage = totalCount % 10;
    }

    return Math.floor(Math.random() * (recordsPerPage - 1) + 1);
  },

  _generateRandomPage(recordCount) {
    this.set('randomPage', Math.floor(Math.random() * recordCount + 1));
  },

  players: computed('resource', function() {
    const resource = this.get('resource');
    const firstPlayer = resource.objectAt(this._generateRandomIndex());
    const secondPlayer = resource.objectAt(this._generateRandomIndex());

    return [
      firstPlayer,
      secondPlayer
    ]
  }),

  actions: {
    play() {
      const randomPage = this._generateRandomPage(this.get('count'));
      const firstPlayer = this.get('players.firstObject');
      const secondPlayer = this.get('players')[1];

      if (firstPlayer.get('id') === secondPlayer.get('id')) {
        secondPlayer.id = this.incrementProperty(secondPlayer.get('id'));
      }

      if (firstPlayer.get(this.get('commonProperty')) > secondPlayer.get(this.get('commonProperty'))) {
        this.incrementProperty('playerOneScore')
      } else if (firstPlayer.get(this.get('commonProperty')) === secondPlayer.get(this.get('commonProperty'))) {
        // TODO handle equal
      } else {
        this.incrementProperty('playerTwoScore');
      }

      this.set('isLoading', true);
      this.send('setRandomPage', randomPage);
      this.set('randomPage', randomPage);
    },

    setResource(event) {
      this.set('isLoading', true);
      this.send('setType', event.srcElement.value);
    }
  }
});
