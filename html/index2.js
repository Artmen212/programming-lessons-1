const express = require('express');
const path = require ('path');
const PORT = 3000;
const ROOT = path.join(__dirname)

const app = express ();

app.get('/',(req,rez) => {
        console.log(req,ip);
        res.sendFile(path.join(ROOT, 'index.html'));
});

app.get('*',(req,res) => {
    res.send('404 Not Found');
});

app.listen(PORT, () => console.log('Server is running...'));