const async = require('async');

let listOne = [1,2,3,4,5];
let listTwo = ['one', 'two', 'three', 'four', 'five'];

async.eachSeries(listOne, (one, cb1) => {
    console.log(one);

    async.eachSeries(listTwo, (two, cb2) => {
      console.log(two);
      cb2();
    }, err => {
      console.log('------------');
      cb1();
    });
}, err => {
  err? console.error(err): console.log('all done');
});
