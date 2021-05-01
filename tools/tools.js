const axios = require('axios')
const filename = process.argv[2]

const csv = require('csv-parser');
const fs = require('fs');

// loc 

fs.createReadStream(filename)
  .pipe(csv())
  .on('data', (row) => {
        console.log(row);
        fs.writeFile('/Users/hainguyen/school/do-an/app-doan/tools/abc.txt', 'abc.txt', function (err) {
            
            console.log('abc')
        })      
    })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });