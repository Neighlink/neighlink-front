const express = require('express');

const app = express();

app.use(express.static('./dist/neighlink-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/neighlink-front/'}),
);

app.listen(process.env.PORT || 4200);