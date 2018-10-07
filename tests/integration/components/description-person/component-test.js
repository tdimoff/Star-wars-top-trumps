import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | description-person', function(hooks) {
  setupRenderingTest(hooks);

  test('Person component displays player attributes correctly', async function(assert) {
    const description = `Luke Skywalker is a Tatooinean native of human heritage. He's starred in numerous movies , amongst which "Midnight in Paris", plus, he likes rides from "Mercedes-Benz", "Lincoln", he's cool.`;

    this.setProperties({
      player: {
        mass: 100,
        height: 180,
        homeworld: { name: 'Tatooine'},
        name: 'Luke Skywalker',
        species: { name: 'human' },
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

    assert.equal(this.element.querySelector('p').innerText.trim(), description, 'Description is not displayed correctly');
  });
});
