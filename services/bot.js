// @CompilexBot [t.me/CompilexBot]

const { Telegraf } = require('telegraf');
const path = require('path');
const fs = require('fs');

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

bot.command('template', ctx => {
    ctx.reply(`Select your preferred language from the given languages`, {
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'C', callback_data: 'C' },
                    { text: 'C++', callback_data: 'CPP' }
                ],
                [
                    { text: 'Java', callback_data: 'JAVA' },
                    { text: 'Python', callback_data: 'PY' }
                ]
            ]
        }
    });
});

bot.action('C', ctx => {
    ctx.answerCbQuery();
    ctx.reply(fs.readFileSync(path.join(__dirname, '..', 'data', 'template.c'), { encoding: 'utf-8' }));
});

bot.action('CPP', ctx => {
    ctx.answerCbQuery();
    ctx.reply(fs.readFileSync(path.join(__dirname, '..', 'data', 'template.cpp'), { encoding: 'utf-8' }));
});

bot.action('JAVA', ctx => {
    ctx.answerCbQuery();
    ctx.reply(fs.readFileSync(path.join(__dirname, '..', 'data', 'template.java'), { encoding: 'utf-8' }));
});

bot.action('PY', ctx => {
    ctx.answerCbQuery();
    ctx.reply(fs.readFileSync(path.join(__dirname, '..', 'data', 'template.py'), { encoding: 'utf-8' }));
});

module.exports = bot;
