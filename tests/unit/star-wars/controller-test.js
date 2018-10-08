import { module,test } from 'qunit';
import { setupTest } from 'ember-qunit';
import sinon from 'sinon';
import EmberObject from '@ember/object';

module('Unit | Controller | star-wars', function(hooks) {
  setupTest(hooks);

  test('Method generates up to a smaller index if on the last page', function(assert) {
    const controller = this.owner.lookup('controller:star-wars');

    sinon.stub(Math, 'random').returns(0.5);
    controller.setProperties({
      'count': 87,
      'randomPage': 9
    });
    const generateRandomIndexValue = controller._generateRandomIndex(controller.randomPage);

    assert.equal(generateRandomIndexValue, 3, 'Records per page haven\'t been lowered for the last page');
  });

  test('Index limit should get lowered if not on the last page', function(assert){
    const controller = this.owner.lookup('controller:star-wars');

    controller.setProperties({
      'count': 87,
      'randomPage': 7
    });
    const generateRandomIndex = controller._generateRandomIndex(controller.randomPage);

    assert.equal(generateRandomIndex, 4, 'Doesn\'t use all 10 records per page');
  });

  test('If random page is calculated correctly', function (assert) {
    const controller = this.owner.lookup('controller:star-wars');

    controller.set('count', 87);
    const generateRandomPage = controller._generateRandomPage(controller.count);

    assert.equal(generateRandomPage, 5, 'Random page not generated correctly');
  });

  test('Play method doesn\'t match players against themselves', function(assert){
    const controller = this.owner.lookup('controller:star-wars');
    const _generateRandomPageStub = sinon.stub(controller, '_generateRandomPage').returns(5);
    const sendStub = sinon.stub(controller, 'send');
    const objectAt = function () {
      return this;
    };
    const objectAtSpy = sinon.spy(objectAt);
    const resource = EmberObject.create({
      id: 5,
      objectAt: objectAtSpy,
      mass: 80
    });

    controller.setProperties({
      resource: resource,
      randomPage: 5,
      commonProperty: 'mass',
      count: 87,
      _generateRandomPage: _generateRandomPageStub,
      send: sendStub
    });
    controller.actions.play.call(controller);

    assert.ok(objectAtSpy.calledThrice, 'Ids of the two players weren\'t equal');
  });

  test('Play method sets the winner and increments his score', function(assert){
    const controller = this.owner.lookup('controller:star-wars');
    // const _generateRandomPageStub = sinon.stub(controller, '_generateRandomPage').returns(5);
    const sendStub = sinon.stub(controller, 'send');
    const resource = EmberObject.create({
      id: 5,
      mass: 80,
      objectAt(){}
    });
    const resourceTwo = EmberObject.create({
      id: 6,
      mass: 100,
      objectAt(){}
    });
    const objectAtStub = sinon.stub(resource, 'objectAt');

    objectAtStub.onCall(0).returns(resource);
    objectAtStub.onCall(1).returns(resourceTwo);
    controller.setProperties({
      playerOneScore: 0,
      playerTwoScore: 0,
      resource: resource,
      randomPage: 5,
      commonProperty: 'mass',
      count: 87,
      players: null,
      send: sendStub,
      isWinner: false
    });
    controller.actions.play.call(controller);

    assert.equal(controller.playerTwoScore, 1, 'Winner\'s score isn\'t incremented');
    assert.ok(controller.players.lastObject.isWinner, 'Incorrect side marked as a winner');
  });

  test('Test if setResource sends correct resource type to the route', function(assert){
    const controller = this.owner.lookup('controller:star-wars');
    const sendStub = sinon.stub(controller, 'send');

    controller.setProperties({
      disabled: false,
      players: []
    });

    controller.actions.setResource.call(controller, ({ target: { value: 'aardvark'} }));

    assert.ok(controller.disabled, 'Button is enabled while sending a new resource request');
    assert.equal(controller.players, null, 'Player array emptied out');
    assert.ok(sendStub.calledOnce, 'Controller is sending the resource type to the route');
  });
});
