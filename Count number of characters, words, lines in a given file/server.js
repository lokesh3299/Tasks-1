const fs = require('fs');
const readline = require('readline');

const requireFile = async () => {
    const data = fs.readFileSync('./data.txt', 'utf-8');

    // For only letters
    const regex = /[^a-z]/gi;
    var lett = data.replace(regex, "").length;
    console.log(lett);

    // For characteristics
    var char = data.length;

    return char;
};

// For lines
var file = './data.txt';
var linesCount = 0;
var rl = readline.createInterface({
 input: fs.createReadStream(file),
 output: process.stdout,
 terminal: false
});
rl.on('line', function (line) {
 linesCount++; 
});
rl.on('close', function () {
 console.log(linesCount); 
});

requireFile()
    .then(res => console.log(res))
    .catch(err => {
        console.log('Error');
    })