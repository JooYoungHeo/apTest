const async = require('async');

let listOne = [1,2,3,4,5];
let listTwo = ['one', 'two', 'three', 'four', 'five'];

async.eachSeries(listOne, (one, cb1) => {
  console.log(one);
  async.waterfall([
    (cb2) => {
      for (let i in listTwo) {
        console.log(listTwo[i]);
      }
      cb2(null, true);
    }
  ], (err, result) => {
    console.log('------------');
    cb1();
  });
}, err => {
  err? console.error(err): console.log('all done');
});
