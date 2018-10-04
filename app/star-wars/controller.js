import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
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
    let recordsPerPage = 0;
    recordsPerPage = +this.get('count') % 10;

    return Math.floor(Math.random() * (recordsPerPage - 1) + 1);
  },

  _generateRandomPage(recordCount) {
    this.set('randomPage', Math.floor(Math.random() * recordCount + 1));
  },

  players: computed('resource', function() {
    const resource = this.get('resource');
    const firstPlayerIndex = this._generateRandomIndex();
    const secondPlayerIndex = this._generateRandomIndex();
    const firstPlayer = resource.objectAt(firstPlayerIndex);
    const secondPlayer = resource.objectAt(secondPlayerIndex);


    if (firstPlayerIndex === secondPlayerIndex) {
      secondPlayer.id = this.incrementProperty(secondPlayer.get('id'));
    }

    if (firstPlayer.get(this.get('commonProperty')) > secondPlayer.get(this.get('commonProperty'))) {
      this.incrementProperty('playerOneScore')
    } else if (firstPlayer.get(this.get('commonProperty')) === secondPlayer.get(this.get('commonProperty'))) {
      // TODO handle equal
    } else {
      this.incrementProperty('playerTwoScore');
    }

    return [
      firstPlayer,
      secondPlayer
    ]
  }),

  actions: {
    play() {
      this.set('isLoading', true);
      this.send('setRandomPage', this._generateRandomPage(this.get('count')));
    },

    setResource(event) {
      this.set('isLoading', true);
      // this.send('setType', event.srcElement.value);
    }
  }
});
