const { value, myarray } = require("./rakesh");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        value: value,
        myarray: myarray
    });
});

app.listen(port, () => {
    console.log("Server is running successfully");
});
