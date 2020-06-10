const express = require('express');
const app = express();
const Datastore = require('nedb');
const port =process.env.PORT || 94;
app.listen(port, () => console.log("Listening at 94"));
app.use(express.static('public'));

const database =new Datastore('database.db');
database.loadDatabase();

app.use(express.json({limit : '1mb' }));

app.post('/api', (request,response) => {
    console.log("I got a request");
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});

app.get('/api', (request,response) => {
    database.find({},(err,data)=>{
        if(err){
            response.end();
            return ;
        }
        response.json(data);
    });
});