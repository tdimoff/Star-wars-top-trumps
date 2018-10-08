import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import $ from 'jquery';

module('Integration | Component | hero-card', function(hooks) {
  setupRenderingTest(hooks);

  test('Check if block component yeilds person sub-component', async function(assert) {
    const description = `"Yamato" is a Battlecruiser It is capable of cruising at the staggering 40 megalights/h and is able to carry 1800000 metric tons of cargo. It is currently being operated by Jabba the Hut, Greedo, it's solid.`;

    this.setProperties({
      vsPerson: false,
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

    await render(hbs`
      {{#hero-card
        player=player
        vsPerson=vsPerson
      }}
        {{#if vsPerson}}
          {{description-person player=player}}
        {{else}}
          {{description-starship player=player}}
        {{/if}}
      {{/hero-card}}
    `);

    assert.equal($('.card-title').text().trim(), 'Yamato', 'Incorrect card title');
    assert.equal(this.element.querySelector('p').innerText.trim(), description, 'Incorrectly yielded sub-component');
  });

  test('Check if hero-card yields the person sub-component correctly', async function (assert) {
    const description = `Luke Skywalker is a Tatooinean native of human heritage. He's starred in numerous movies , amongst which "Midnight in Paris", plus, he likes rides from "Mercedes-Benz", "Lincoln", he's cool.`;

    this.setProperties({
      vsPerson: true,
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

    await render(hbs`
      {{#hero-card
        player=player
        vsPerson=vsPerson
      }}
        {{#if vsPerson}}
          {{description-person player=player}}
        {{else}}
          {{description-starship player=player}}
        {{/if}}
      {{/hero-card}}
    `);

    assert.equal($('.card-title').text().trim(), 'Luke Skywalker', 'Incorrect card title');
    assert.equal(this.element.querySelector('p').innerText.trim(), description, 'Incorrectly yielded sub-component');
  })
});
