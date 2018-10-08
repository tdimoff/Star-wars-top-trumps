import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { click, fillIn } from '@ember/test-helpers';
import $ from 'jquery';
import { later } from '@ember/runloop';

module('Acceptance | star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('Switching resources displays different cards', async function(assert) {
    await visit('/star-wars');

    const secondOption = $('option:eq(1)');

    await fillIn('select', secondOption.val());
    await click('select');
    await $('select').trigger('change');

    $('.btn').trigger('click');

    later(()=> {
      assert.ok($('img').attr('alt') === 'starship', 'Resource hasn\'t been set correctly');
    }, 2000)
  });
});
