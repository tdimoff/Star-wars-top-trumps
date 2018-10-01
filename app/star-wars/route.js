import Route from '@ember/routing/route';

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
