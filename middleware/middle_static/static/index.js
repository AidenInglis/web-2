const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
    console.log('req IP: ' + new Date());
    next();
});

app.use((req, res, next) => {
    const filePath = path.join(__dirname, 'static', req.url);
    fs.stat(filePath, (err, fileInfo) => {
        if (err) {
            next();
            return;
        }

        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.use((req, res) => {
    res.status(404);
    res.send('File Not Found');
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});