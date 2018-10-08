import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  resource: null,

  count: null,

  winning: null,

  playerOneScore: 0,

  playerTwoScore: 0,

  vsPerson: null,

  commonProperty: computed('vsPerson', function () {
    return this.get('vsPerson') ? 'mass' : 'crew'
  }),

  _generateRandomIndex(randomPage) {
    let recordsPerPage = 10;
    let totalCount = this.get('count');

    if (randomPage === Math.ceil(totalCount / 10)) {
      recordsPerPage = totalCount % 10;
    }

    return Math.floor(Math.random() * (recordsPerPage - 1));
  },

  _generateRandomPage(recordCount) {
    return Math.ceil(Math.random() * recordCount / 10);
  },

  actions: {
    play() {
      const resource = this.get('resource');
      const firstPlayer = resource.objectAt(this._generateRandomIndex(this.get('randomPage')));
      let secondPlayer = resource.objectAt(this._generateRandomIndex(this.get('randomPage')));

      //Prevent players from getting matched against themselves
      if (firstPlayer.get('id') === secondPlayer.get('id')) {
        secondPlayer = this.get('resource').objectAt(this._generateRandomIndex(this.get('randomPage')));
      }

      firstPlayer.set('isWinner', false);
      secondPlayer.set('isWinner', false);

      if (firstPlayer.get(this.get('commonProperty')) > secondPlayer.get(this.get('commonProperty'))) {
        firstPlayer.set('isWinner', true);
        this.incrementProperty('playerOneScore')
      } else if (firstPlayer.get(this.get('commonProperty')) < secondPlayer.get(this.get('commonProperty'))) {
        secondPlayer.set('isWinner', true);
        this.incrementProperty('playerTwoScore');
      }

      this.set('players', [firstPlayer, secondPlayer]);
      this.set('disabled', true);
      this.send('setRandomPage', this._generateRandomPage(this.get('count')));
    },

    setResource(event) {
      this.set('disabled', true);
      this.set('players', null);
      this.send('setType', event.target.value);
    }
  }
});
