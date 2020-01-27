const path=require('path');
const express=require('express');
const app=express();
const port=process.env.PORT||3000;
const PublicPath=path.join(__dirname,'..','public');
app.use(express.static(PublicPath));
app.get('*',(req,res)=>{
    res.sendFile(path.join(PublicPath,'index.html'));
})
app.listen(port,()=>{
    console.log('listening at port 3000');
})
