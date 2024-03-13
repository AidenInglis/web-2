const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.use((req, res) => {
    res.status(404)
    res.send('File Not Found');
});

app.listen(3000, () => {
    console.log('server available at port 3000');
})