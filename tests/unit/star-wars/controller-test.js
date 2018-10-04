import { module } from 'qunit';
import { setupTest } from 'ember-qunit';
import test from 'ember-sinon-qunit';

module('Unit | Controller | star-wars', function(hooks) {
  setupTest(hooks);

  test('Check if it generates a smaller index if on the last page', function(assert) {
    const controller = this.owner.lookup('controller:star-wars');
    const floorSpy = sinon.spy(Math, 'floor');
    const randomStub = sinon.stub(Math, 'random').returns(5);
debugger;
    controller.setProperties({
      'count': 87,
      'randomPage': 9
    });
    const generateRandomIndexValue = controller._generateRandomIndex();

    assert.ok(floorSpy.calledWith(), 'Random index not generated correctly');
  });
});
