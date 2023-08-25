const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

const port = 1245;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
