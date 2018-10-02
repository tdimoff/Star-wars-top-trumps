import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  keyForRelationship(key, typeClass, method) {
    if (key === 'homeworld') {
      return 'planet';
    }

    return this._super(...arguments);
  }
});
