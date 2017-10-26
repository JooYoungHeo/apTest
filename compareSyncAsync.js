const fs = require('fs');
const dirPath = '.';

/* simple read dir - sync */
// let filenames = fs.readdirSync(dirPath);
//
// for (let i = 0 ; i < filenames.length ; i++) {
//   console.log(filenames[i]);
// }
//
// console.log('ready');
//
// console.log('can process next job');

/* simple read dir - async */
// fs.readdir(dirPath, (err, filenames) => {
//   for (let i = 0 ; i < filenames.length ; i++) {
//     console.log(filenames[i]);
//   }
//   console.log('ready');
// });
//
// console.log('can process next job');

/* calc all file bytes - sync */
// function calculateBytes() {
//   let totalBytes = 0;
//   let filenames = fs.readdirSync(dirPath);
//
//   for (let i in filenames) {
//     let stats = fs.statSync(`${dirPath}/${filenames[i]}`);
//     totalBytes += stats.size;
//   }
//
//   console.log(totalBytes);
// }

/* calc all file bytes - async */
function calculateBytes() {
  fs.readdir(dirPath, (err, filenames) => {
    let count = filenames.length;
    let totalBytes = 0;

    for (let i = 0 ; i < filenames.length ; i++) {
      fs.stat(`${dirPath}/${filenames[i]}`, (err, stats) => {
        totalBytes += stats.size;
        count --;
        if (count === 0) console.log(totalBytes);
      });
    }
  });
}

calculateBytes();
