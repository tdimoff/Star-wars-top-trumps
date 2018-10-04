import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /star-wars', async function(assert) {
    await visit('/star-wars');

    assert.equal(currentURL(), '/star-wars');
  });
});
