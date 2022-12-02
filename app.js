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
    console.log(`Listening on PORT:${process.env.PORT}`);
    try {
        bot.launch();
        console.log('@CompilexBot live');
    } catch (err) {
        console.error('@CompilexBot startup failed');
    }
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
});


