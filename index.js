'use strict'
const webp = require('webp-converter');
const fs = require('fs');

const imageConverter = (inputImagePath, outputImagePath, compression) => {
  webp.cwebp(inputImagePath, outputImagePath, compression, function (status) {
    //if exicuted successfully status will be '100'
    //if exicuted unsuccessfully status will be '101'
    console.log(status);
  });
}

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) == 'jpg'))
  .forEach((file) => {
    console.log('file ', file);
    imageConverter(file, file.slice(0,-4) + '.webp', "-q 40");
  });