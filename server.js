const express=require ('express')
const app= express();

app.get('/',(req,res)=>{
    res.send('hello world');

})
app.get('/user',(req,res)=>{
    res.send('This is users root');
})
app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})
