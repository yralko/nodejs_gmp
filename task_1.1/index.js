var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(chunk){
    console.log(chunk.split('').reverse().join('') + '\n');
});