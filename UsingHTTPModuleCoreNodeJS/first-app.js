const fs = require('fs');
//fs.writeFileSync('notes.txt', 'This file was created by Node.js');

fs.readFileSync('notes.txt', 'utf8');

console.log(fs.readFileSync('notes.txt', 'utf8'));



//async code becuase it takes time to execute
setTimeout(()=>{
    console.log('Timer is done!')
 }, 2000);
 

 //sync code becuase it will do hello and hi one after the other
console.log('Hello!');
console.log('Hi!');