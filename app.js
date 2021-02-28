const express = require('express');
const app = express();
const port = 3005;

app.listen(port, ()=> {console.log('listing on port ', port)});
app.use(express.static('web'));