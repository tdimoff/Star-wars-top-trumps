import { module,test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import EmberObject from '@ember/object';

module('Unit | Controller | star-wars', function(hooks) {
  setupTest(hooks);

  test('Check if it generates a smaller index if on the last page', function(assert) {
    const controller = this.owner.lookup('controller:star-wars');
    const floorSpy = sinon.spy(Math, 'floor');
    const randomStub = sinon.stub(Math, 'random').returns(0.5);

    controller.setProperties({
      'count': 87,
      'randomPage': 9
    });
    const generateRandomIndexValue = controller._generateRandomIndex(controller.randomPage);

    assert.equal(generateRandomIndexValue.recordsPerPage, 7, 'Records per page haven\'t been lowered for the last page');
    assert.ok(floorSpy.withArgs('Math.random() * (recordsPerPage - 1)'), 'Random index not generated correctly');
  });

  test('If random page is calculated correctly', function (assert) {
    const controller = this.owner.lookup('controller:star-wars');

  });

  test('Play method doesn\'t match a player against himself', function(assert){
    const controller = this.owner.lookup('controller:star-wars');
    const _generateRandomIndexSpy = sinon.stub(controller, '_generateRandomIndex').returns(5);
    // const objectAtStub = sinon.stub(controller.store, 'objectAt');
    const resource = EmberObject.create({
      id: 5,
      objectAt() {
        return this;
      }
    });

    controller.setProperties({
      resource: resource,
      randomPage: 5,
      _generateRandomIndex: _generateRandomIndexSpy
    });

    controller.send('play');

    assert.equal()
  });

  test('Test if setResource sends correct resource type to the route', function(assert){
    const controller = this.owner.lookup('controller:star-wars');
    const setResourceSpy =

    controller.setProperties({
      disabled: false,
      players: []
    });

    controller.send('setResource', ({ target: { value: 'aardvark'} }));

    assert.ok(controller.disabled, 'Button is enabled while sending a new resource request');
    assert.equal(controller.players, null, 'Player array emptied out');
    debugger;
    assert.ok()
  });
});
