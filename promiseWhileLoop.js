const Promise = require('bluebird');
const request = require('request');

let promiseWhile = (condition, action) => {
  let resolver = Promise.defer();

  let loop = () => {
    if (!condition()) return resolver.resolve();
    return Promise.cast(action())
      .then(loop)
      .catch(resolver.reject);
  };

  process.nextTick(loop);

  return resolver.promise;
};

let sum = 0, stop = 10;

promiseWhile(() => {
  return sum < stop;
}, () => {
  return new Promise((resolve, reject) => {
    request('http://www.naver.com', (err, res, body) => {
      console.log(`${sum}: ${res.statusCode}`);
      sum++;
      resolve();
    });
  });
}).then(() => {
  console.log('done');
});
