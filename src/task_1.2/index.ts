
import fs from 'fs';
import { pipeline } from 'stream';
import csv from 'csvtojson';

const csvFilePath: string = `${__dirname}/csv/node_mentoring_t1_2_input_example.csv`;
const outputFile: string = `${__dirname}/output.txt`;

pipeline(
    fs.createReadStream(csvFilePath),
    csv(),
    fs.createWriteStream(outputFile),
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
