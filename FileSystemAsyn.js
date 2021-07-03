var fs= require ('fs');
var hello=fs.readFile('text.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log('hello');