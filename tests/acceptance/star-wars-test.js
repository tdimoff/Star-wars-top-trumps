import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('Switching resources displays different cards', async function(assert) {
    await visit('/star-wars');

  });
});
