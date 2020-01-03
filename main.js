var express = require('express')
var dbOps= require('./dbms')
var app = express()
var bp=require('body-parser')
var JSAlert = require("js-alert");

app.use(bp());
app.use('/static',express.static('assests'))


app.get('/',(req,res) => {
    res.sendFile('cssloader.html',{root: './files'})
})

app.get('/form',(req,res) => {
    res.sendFile('form-2.html', {root: './files'})
})

app.get('/about',(req,res) => {
    res.sendFile('about.html', {root: './files'})
})

app.get('/contact',(req,res) => {
    res.sendFile('contact.html', {root: './files'})
})

app.post('/form',(req,res) => {
    console.log(req.body)    
    //This is the passing Conditions
    passCondition = (req.body.full_name!='') & (req.body.phone_number!= '') & (req.body.father_name!='') & (req.body.address!='      ') & (req.body.email_id!='') & (req.body.dropdown!='none')
    if(passCondition){
            if(req.body.declaration != 'on')
            { res.end('You Have Not Checked The declaration button.....\nPlease go back and Check it')}
            else{
                name=req.body.full_name  
                mobile=parseInt(req.body.phone_number) 
                fathersName=req.body.father_name   
                address=req.body.address   
                email=req.body.email_id      
                gender=req.body.male
                courseName=req.body.dropdown
                courseType=req.body.normal
                try{
                    dbOps.insert([name,mobile,fathersName,address,email,gender,courseName,courseType])
                }
                catch{
                    console.log('error')
                }
            }
            res.sendFile('conf.html', {root: './files'})
        }  
    else
    {res.end('Invalid input porovided...\nPlease go back and enter the valid Input')}    
    })
/*
{
  full_name: 'asd',      
  phone_number: 'asd',   
  father_name: 'asd',    
  address: 'adfsadf',    
  email_id: 'sdf',       
  male: 'male',
  normal: 'normal track',
  declaration: 'on'      
}*/




app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Started Server at http://localhost:3000')
} )
