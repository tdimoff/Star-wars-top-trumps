import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | star-wars', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:star-wars');
    assert.ok(route);
  });
});
