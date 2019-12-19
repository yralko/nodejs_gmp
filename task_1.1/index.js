import readline from 'readline';

const { stdin, stdout } = process;

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
    terminal: false
});

rl.on('line', (chunk) => {
    console.log(`${chunk.split('').reverse().join('')  }\n`);
});
