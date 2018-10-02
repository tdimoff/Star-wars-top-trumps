import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractRelationship(relationshipModelName, relationshipHash) {
    if (relationshipModelName === 'planet') {
      relationshipHash = { id: this.getId(relationshipHash), type: relationshipModelName }
    }

    return this._super(relationshipModelName, relationshipHash);
  }
});
