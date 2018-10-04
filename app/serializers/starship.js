import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractRelationship(relationshipModelName, relationshipHash) {
    if (relationshipModelName === 'person') {
      relationshipHash.type = relationshipModelName;
    }

    return this._super(relationshipModelName, relationshipHash);
  }
});
