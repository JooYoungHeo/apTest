const Promise = require('bluebird');

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
    sum++;
    console.log(sum);
    resolve();
  });
}).then(() => {
  console.log('done');
});
