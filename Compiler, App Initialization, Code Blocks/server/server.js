const express = require('express');
const cors = require('cors');
const mongoese = require('mongoose')

require('dotenv').config();

const runCode = require('./routes/runCode');


const app = express();
const port = 5000;
const uri = process.env.ATLAS_URI;

mongoese.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoese.connection;
connection.once('open', ()=>{
    console.log("MongoDB connected Successfully");
});

if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use(cors());
app.use(express.json());

app.use('/' , runCode);



app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});