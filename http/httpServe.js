let http=require('http'),
    path=require('path'),
    fs=require('fs')
http.createServer((req,res)=>{
    function badReq() {
        res.writeHead(404)
        res.write('Bad req')
        res.end()
    }
    badReq()
}).listen(80)
