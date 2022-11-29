const express = require('express');

const bot = require('./services/bot');

const app = express();

app.use('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'server running'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Live on PORT:${process.env.PORT}`);
    try {
        bot.launch();
        console.log(`@CompilexBot Online`);
    } catch (err) {
        console.error();
    }
});


