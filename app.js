// @ComplilexBot [t.me/CompilexBot]

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => {
    ctx.reply('Hi there 👋');
});

bot.launch();