import Mixin from '@ember/object/mixin';
import RSVP from 'rsvp';

export default Mixin.create({
  getAll(store, modelName, params = {}) {
    return store.query(modelName, params).then((result) => {
      const totalRecords = [];
      const { count } = result.meta;

      const lastPage = Math.ceil(count / 10);

      totalRecords.push(result);

      for (let i = 2; i <= lastPage; i++) {
        totalRecords.push(store.query(modelName, { page: i }));
      }

      return RSVP.all(totalRecords);
    }).then((results) => {
      const records = [];

      results.forEach((result) => result.forEach((model) => records.push(model)));

      return records;
    });
  }
});
