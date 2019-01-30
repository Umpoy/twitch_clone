const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const port = 5002;

// app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.listen(port, () => {
    console.log('Port running on localhost:' + port)
});

