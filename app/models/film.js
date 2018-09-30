import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string'),
  episode_id: attr('number'),
  opening_crawl: attr('string'),
  director: attr('string'),
  producer: attr('string'),
  release_date: attr('date'),
  characters: hasMany('person'),
  planets: hasMany('planet'),
  starships: hasMany('starship'),
  vehicles: hasMany('vehicle'),
  species: hasMany('species'),
  created: attr('date'),
  edited: attr('date'),
  url: attr('string')
});
