const express=require('express')
const mongoose=require('mongoose')
const url = 'mongodb://localhost/AdityaDB'
const app = express();

mongoose.connect(url,{useNewUrlParser : true});

const con = mongoose.connection
con.on('open',function(){
    console.log("Connected");
})

app.use(express.json());

const serverRouter =require('./routes/Server')
app.use('/Server',serverRouter);
app.listen(94,() => {
    console.log("Server started");
})