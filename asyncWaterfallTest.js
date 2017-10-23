const async = require('async');

let tasks = [
  cb => {
    let list = [];
    list.push(1);
    cb(null, list);
  },
  (list, cb) => {
    list.push(2);
    cb(null, list);
  }
];

async.waterfall(tasks, (err, results) =>{
  console.log(results);
});
