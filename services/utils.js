const service = {};

/*
  turns this: ['one', 'two', 'three']
  into this: {
    'one': ['one'],
    'two': ['two'],
    'three': ['three']
  }
*/
service.objOfArraysForEachArrayItem = array => array.reduce((obj, arrayItem) => {
  obj[arrayItem] = [arrayItem];
  return obj;
}, {});

service.getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

module.exports = service;