import DS from 'ember-data';
import { isArray, A } from '@ember/array';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    const transformedPayload = { data: [] };

    payload.results.forEach((obj) => {
      const links = {};
      const id = parseInt(obj.url.match(/\d+/));

      for (let prop in obj) {
        if (isArray(prop)) {
          links.push(prop);
          delete obj.prop;
        }
      }

      let transformedObj = {
        type: 'person',
        id: id,
        attributes: obj,
        relationships: {
          person: {
            links: {
              related: links
            }
          }
        }
      };

      transformedPayload.data.push(transformedObj)
    });

    return transformedPayload;
  }
});
