import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.apiBaseUrl,
  namespace: config.namespace,
  headers: config.headers,
  param: '?format=json',
  buildURL() {
    return this._super(...arguments) + `${this.get('param')}`;
  }
});
