// @CompilexBot [t.me/CompilexBot]

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);


bot.command('start', async ctx => {
    ctx.reply(`This bot can help you build and run your source code\\. You can send the source file or type /help for more information\\.\n_Currently supports \\[C/C\\+\\+, Java, Python\\]_`, { parse_mode: 'MarkdownV2' })
});

module.exports = bot;
