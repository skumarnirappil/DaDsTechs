

var express=require('express')
var app=express()
var path=require('path')

app.get('/Login',function(req,res){

    res.sendFile(path.join(__dirname,'login.html'))
})
app.post('/Login',function(req,res){

    res.send('Loggedin')
})



  app.listen(3000,function(){
   console.log('Server Started')
   

  })  
   
   
