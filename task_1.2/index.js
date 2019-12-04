const fs = require('fs');
const csv=require('csvtojson');

const csvFilePath = __dirname + '/csv/node_mentoring_t1_2_input_example.csv';
const outputFile = __dirname + '/output.txt';
 
const writeStream = fs.createWriteStream(outputFile);

csv()
  .fromFile(csvFilePath)
  .on('error', (error)=> console.exception(error))
  .on('data', (chunk)=> writeStream.write(chunk.toString('utf8')));

  writeStream.on('error', (error) => console.exception(error))
  