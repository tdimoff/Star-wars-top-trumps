import DS from 'ember-data';
import { underscore } from '@ember/string';
import { isArray } from '@ember/array';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const transformedPayload = { data: [] };

    payload.results.forEach((obj) => {
      const relationships = {};
      const id = parseInt(obj.url.match(/\d+/));

      for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (isArray(obj[prop])) {
            relationships[prop] = {data: []};
            obj[prop].forEach((rel) => {
              relationships[prop].data.push({
                id: parseInt(rel.match(/\d+/)),
                type: prop
              });
            });

            delete obj[prop]
          }
        }
      }

      const jsonApi = {
        id: id,
        type: primaryModelClass.modelName,
        attributes: obj,
        relationships: relationships
      };

      transformedPayload.data.push(jsonApi)
    });

    return this._super(store, primaryModelClass, transformedPayload, id, requestType);
  },

  keyForAttribute(attr) {
    return underscore(attr);
  }
});
