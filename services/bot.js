// @CompilexBot [t.me/CompilexBot]

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);


bot.command('start', async ctx => {
    ctx.reply(`This bot can help you build and run your source code\\. You can send the source file or type /help for more information\\.\n_Currently supports \\[C/C\\+\\+, Java, Python\\]_`, { parse_mode: 'MarkdownV2' })
});

bot.command('help', ctx => {
    ctx.reply(`/start: start bot\n/help: need help\n/build: to build source coden\n/template: get templates for different languages`, { parse_mode: 'MarkdownV2' });
});

bot.command('build', ctx => {
    ctx.reply(`Build under progress`);
});

module.exports = bot;
