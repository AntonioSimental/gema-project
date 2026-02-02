const express = require('express');
const app = express();
const registerRouter = require('./src/routes/registerRouter.js');

app.use(express.json());
app.use('/api/register', registerRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    };
    console.log(`http://localhost:${PORT}`);
});