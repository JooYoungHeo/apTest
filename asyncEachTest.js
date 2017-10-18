const async = require('async');

let testList = [1,2,3,'tmp',5];

async.each(testList, (item, callback) => {
  if (typeof item !== 'number') callback(new Error('not a number'))
  else {
    console.log(item);
    callback();
  }
}, err => {
  err? console.error(err): console.log('all done');
});

async.eachSeries(testList, (item, callback) => {
  if (typeof item !== 'number') callback(new Error('not a number'))
  else {
    console.log(item);
    callback();
  }
}, err => {
  err? console.error(err): console.log('all done');
});
