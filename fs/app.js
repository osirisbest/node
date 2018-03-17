let fs=require('fs')
let js=JSON.stringify({f:'2'})
for (let i=0;i<3;i++){
fs.writeFile('./'+i.toString(),js,'utf8',(err,data)=>{
if(err){throws(err)
}else{
    console.log(data)
}
})
}