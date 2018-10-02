import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    const transformedPayload = payload.results.map((result) => {
      result.id = this.getId(result.url);
      result.films = this.getId(result.films);
      result.pilots = this.getId(result.pilots);

      return result;
    });

    return this._super(store, primaryModelClass, transformedPayload, id, requestType);
  }
});
