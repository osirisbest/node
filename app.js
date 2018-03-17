let http=require('http')
let fs=require('fs')

function writeNumbers(res){
 //let i=0
 for (let i=0;i++;i<20){
    res.write(i.toString+'\n')
 }   
}

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text-plane'})
    let query = require('url').parse(req.url).query;
    console.log(query)
    fs.readFile('test.txt','utf-8',(err,data)=>{
        if (err) res.write(err.toString())
            else res.write(data)
        setTimeout(()=>{res.write('data')
        res.end()
    },10000)
        
    })
    //res.end('Hello!')
}).listen(8888)
console.log('listen 8888')
