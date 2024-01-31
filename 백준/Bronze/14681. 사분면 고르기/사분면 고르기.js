const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});
let input = [];
rl.on('line', function(line) {
    input.push(parseInt(line));
}).on('close', function() {
    const A = input[0];
    const B = input[1];
    
    if(A>0) A*B>0 ? console.log(1) : console.log(4);
    else A*B>0 ? console.log(3) : console.log(2);
});