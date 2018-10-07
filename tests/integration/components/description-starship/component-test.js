import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | description-starship', function(hooks) {
  setupRenderingTest(hooks);

  test('Starship component displays player attributes correctly', async function(assert) {
    const description = `"Yamato" is a Battlecruiser It is capable of cruising at the staggering 40 megalights/h and is able to carry 1800000 metric tons of cargo. It is currently being operated by Jabba the Hut, Greedo, it's solid.`;

    this.setProperties({
      player: {
        name: 'Yamato',
        model: 'Battlecruiser',
        crew: 100000,
        cargo_capacity: 1800000,
        MGLT: 40,
        pilots: [
          {
            name: 'Jabba the Hut'
          },
          {
            name: 'Greedo'
          }]
      }
    });

    await render(hbs`{{description-starship player=player}}`);

    assert.equal(this.element.querySelector('p').innerText.trim(), description, 'Description is not displayed correctly');
  });
});
