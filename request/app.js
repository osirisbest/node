let http=require('http')
let opt={
    host: 'www.google.com',
    port: 80,
    path: '',
    method: 'GET'
}
for (let i=0;i++;i<100){
    setTimeout(()=>{http.request(opt,(res)=>console.log(res.toString())).end()
console.log(i)},1000)
}