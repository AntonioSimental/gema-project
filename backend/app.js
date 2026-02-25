const express = require('express');
const app = express();
const registerRouter = require('./src/routes/registerRouter.js');
const loginRouter = require('./src/routes/loginRouter.js');
const cookieParser = require('cookie-parser');

app.use(express.json());

app.use(cookieParser());
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    };
    console.log(`http://localhost:${PORT}`);
});