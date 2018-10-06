import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  type: 'person',
  randomPage: 1,

  model() {
    return RSVP.hash({
      resource: this.store.query(this.get('type'), {
        page: this.get('randomPage')
      })
    });
  },

  setupController(controller, model) {
    controller.setProperties({
      resource: model.resource,
      count: model.resource.get('firstObject.count'),
      disabled: false,
      vsPerson: this.get('type') === 'person',
      randomPage: this.get('randomPage')
    });
  },

  actions: {
    setRandomPage(randomPage) {
      this.set('randomPage', randomPage);
      this.refresh();
    },

    setType(type) {
      this.set('type', type);
      this.set('randomPage', 1);
      this.refresh();
    }
  }
});
