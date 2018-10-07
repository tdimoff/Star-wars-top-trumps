import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { click,fillin } from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('Switching resources displays different cards', async function(assert) {
    await visit('/star-wars');

    await fillin('select', '2');
    $('select').trigger('change');
    debugger;
  });
});
