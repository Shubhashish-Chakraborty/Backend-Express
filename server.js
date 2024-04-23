const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));


app.use((req, res, next) => {

    let date = new Date(Date.now());

    fs.writeFileSync("./public/datetime.txt" , `${date.toLocaleString()}\n`);
    fs.writeFileSync("./templates/datetime.txt" , `${date.toLocaleString()}\n`);

    next();
})



app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile('./templates/home.html', {root: __dirname});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});