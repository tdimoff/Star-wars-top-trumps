import Route from '@ember/routing/route';
import GetAll from '../mixins/get-all';
// import { toArray } from '@ember/array';

export default Route.extend({
  model() {
    return this.store.findAll('person');
  },

  setupController(controller, model) {
    controller.setProperties({
      people: model,
      // name: model.get('name'),
      // homeworld: model.get('homeworld'),
      // films: model.get('films'),
      // vehicle: model.get('vehicle')
    })
  }
});
