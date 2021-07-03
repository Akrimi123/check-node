var fs= require ('fs');
var hello=fs.readFileSync('text.txt');
console.log(hello.toString());
//fs.writeFileSync('text.txt',"Hello Akrimi Rabeh!§");