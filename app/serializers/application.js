import DS from 'ember-data';
import { isArray } from '@ember/array';
import { singularize } from 'ember-inflector';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload.results || payload, id, requestType)
  },

  getId(url){
    return url.match(/\d+/)[0]
  },

  extractId(modelClass, resourceHash) {
    for (let prop in resourceHash) {
      if (isArray(resourceHash[prop])) {
       resourceHash[prop].forEach((film) => {
          resourceHash[prop].push({
            type: singularize(prop),
            id: film.match(/\d+/)[0]
          });
        });

       resourceHash[prop].splice(0, resourceHash[prop].length / 2);
      }
    }

    return this.getId(resourceHash.url);
  }
});
