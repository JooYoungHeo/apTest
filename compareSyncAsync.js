const fs = require('fs');
const dirPath = '.';

// let filenames = fs.readdirSync(dirPath);
//
// for (let i = 0 ; i < filenames.length ; i++) {
//   console.log(filenames[i]);
// }
//
// console.log('ready');
//
// console.log('can process next job');

fs.readdir(dirPath, (err, filenames) => {
  for (let i = 0 ; i < filenames.length ; i++) {
    console.log(filenames[i]);
  }
  console.log('ready');
});

console.log('can process next job');
