import DS from 'ember-data';
const { attr, hasMany, belongsTo } = DS;

export default DS.Model.extend({
  name: attr('string'),
  height: attr('number'),
  mass: attr('number'),
  hair_color: attr('string'),
  skin_color: attr('string'),
  eye_color: attr('string'),
  birth_year: attr('string'),
  gender: attr('string'),
  homeworld: belongsTo('planet'),
  films: hasMany('film'),
  species: belongsTo('species'),
  vehicles: hasMany('vehicle'),
  starships: hasMany('starship'),
  created: attr('date'),
  edited: attr('date'),
  url: attr('string'),
  count: attr('number')
});
