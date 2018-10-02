import Route from '@ember/routing/route';
import GetAll from '../mixins/get-all';
import RSVP from 'rsvp';

export default Route.extend(GetAll, {
  model() {
    return RSVP.hash({
      people: this.getAll(this.store, 'person', {}),
      starships: this.getAll(this.store, 'starship', {})
    })
  },

  setupController(controller, model) {
    controller.setProperties({
      people: model.people,
      starships: model.starships
    })
  }
});
