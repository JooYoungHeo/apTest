const async = require('async');

let list = [];

let tasks = [
  test1,
  test2,
  test3
];

async.waterfall(tasks, (err, results) =>{
  err? console.error(err): console.log(results);
});

function test1(cb) {
  let list = [];
  list.push(1);
  console.log('test1 done');
  cb(null, list);
}

function test2(list, cb) {
  list.push(2);
  console.log('test2 done');
  // cb('error', null);
  cb(null, list);
}

function test3(list, cb) {
  list.push(3);
  list.push(100);
  console.log('test3 done');
  cb(null, list);
}
