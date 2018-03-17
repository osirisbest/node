let http=require('http')
let opt={
    host: 'www.google.com',
    port: 80,
    path: '',
    method: 'GET'
}
console.log('start')
for (let i=0;i<100;i++){
    setTimeout(()=>{http.request(opt,(res)=>console.log(res.toString())).end()
console.log(i.toString())},1000)
}