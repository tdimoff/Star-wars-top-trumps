import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  extractRelationship(relationshipModelName, relationshipHash) {
    if (relationshipModelName === 'planet') {
      relationshipHash = { id: this.getId(relationshipHash), type: relationshipModelName }
    }
    else if (relationshipModelName === 'species') {
      relationshipHash = relationshipHash.get('firstObject');
    }

    return this._super(relationshipModelName, relationshipHash);
  }
});
