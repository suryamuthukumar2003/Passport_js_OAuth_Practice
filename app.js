const express=require('express');

const app=express();

//set up view engine
app.set('view engine','ejs');


//create home route
app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(4000,()=>{
    console.log("app now listening on port 4000");

})