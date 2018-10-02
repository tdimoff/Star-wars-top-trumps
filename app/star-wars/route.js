import Route from '@ember/routing/route';
import GetAll from '../mixins/get-all';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      people: this.store.findAll('person'),
      starships: this.store.findAll('starship')
    })
  },

  setupController(controller, model) {
    controller.setProperties({
      people: model.people,
      starships: model.starships
    })
  }
});
