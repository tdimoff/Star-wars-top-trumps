import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  model: attr('string'),
  manufacturer: attr('string'),
  cost_in_credits: attr('number'),
  length: attr('number'),
  max_atmosphering_speed: attr('number'),
  crew: attr('number'),
  passengers: attr('number'),
  cargo_capacity: attr('number'),
  consumables: attr('string'),
  vehicle_class: attr('string'),
  films: hasMany('film'),
  created: attr('date'),
  edited: attr('date'),
  url: attr('string')
});
