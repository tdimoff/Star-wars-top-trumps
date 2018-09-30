import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  model: attr('string'),
  manufacturer: attr('string'),
  costInCredits: attr('number'),
  length: attr('number'),
  maxAtmosphereSpeed: attr('number'),
  crew: attr('number'),
  passengers: attr('number'),
  cargo_capacity: attr('number'),
  consumables: attr('string'),
  hyperdrive_rating: attr('number'),
  MGLT: attr('number'),
  starship_class: attr('string'),
  pilots: hasMany('pilot'),
  films: hasMany('film'),
  created: attr('date'),
  edited: attr('date'),
  url: attr('string')
});
