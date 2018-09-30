import DS from 'ember-data';
const { attr, hasMany, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  classification: attr('string'),
  designation: attr('string'),
  average_height: attr('number'),
  skin_colors: attr('string'),
  hair_colors: attr('string'),
  eye_colors: attr('string'),
  average_lifespan: attr('number'),
  planet: belongsTo('planet'),
  language: attr('string'),
  people: hasMany('person'),
  films: hasMany('film'),
  created: attr('date'),
  edited: attr('date'),
  url: attr('string')
});
