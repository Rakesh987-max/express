const express = require('express');
const app = express();

app.get('/Rakesh',(req,res)=>{
    res.send(`Rakesh is a bad boy`);
});
app.listen(5000)


