import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | description-person', function(hooks) {
  setupRenderingTest(hooks);

  test('Component displays player attributes correctly', async function(assert) {
    const description = `Mass\n\n            100\n\n\n\n     Height\n\n\n\n
    180\nLuke Skywalker is a an native\nof  heritage.\n   He's starred in numerous movies\n      , amongst which\n     "Midnight in Paris",
  plus,\n     he likes rides from\n      "Mercedes-Benz",\n      "Lincoln",\n  he's cool.`;

    this.setProperties({
      player: {
        mass: 100,
        height: 180,
        homeworld: 'Tatooine',
        name: 'Luke Skywalker',
        species: [{ name: 'human' }],
        films: [{ title: 'Midnight in Paris' }],
        vehicles: [
          {
            name: 'S600',
            manufacturer: 'Mercedes-Benz' },
          {
            manufacturer: 'Lincoln',
            name: 'Continental Mark VII'
          }]
      }
    });

    await render(hbs`{{description-person player=player}}`);

    assert.equal(this.element.querySelector('p').textContent.trim(), description, 'Description is not displayed correctly');
  });
});
