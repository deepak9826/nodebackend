const express=require('express')

require('dotenv').config()
const app=express()

const port=4000
 app.get('/',(req,res)=>{
    res.send("This is first!");
 })

 app.get('/twitter',(req,res)=>{
    res.send('Deepak_Malviya');
 })

 app.get('/youtube',(req,res)=>{
    res.send("youtube unofficial");
 })
 app.get('/login',(req,res)=>{
    res.send('<h1>please login at my page </h1>');
 })
 app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${process.env.PORT}`);
 })