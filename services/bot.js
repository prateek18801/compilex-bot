// @CompilexBot [t.me/CompilexBot]

const { Telegraf } = require('telegraf');

const { command, template } = require('../utils/reply');

const bot = new Telegraf(process.env.BOT_TOKEN);

// commands

bot.command('start', ctx => {
    ctx.reply(command.start.reply_text, command.start.options);
});

bot.command('help', ctx => {
    ctx.reply(command.help.reply_text, command.help.options);
});

bot.command('build', ctx => {
    ctx.reply(command.build.reply_text, command.build.options);
});

bot.command('template', ctx => {
    ctx.reply(command.template.reply_text, command.template.options);
});

// actions

bot.action('C', ctx => {
    ctx.answerCbQuery();
    ctx.reply(template('c'));
});

bot.action('CPP', ctx => {
    ctx.answerCbQuery();
    ctx.reply(template('cpp'));
});

bot.action('JAVA', ctx => {
    ctx.answerCbQuery();
    ctx.reply(template('java'));
});

bot.action('PY', ctx => {
    ctx.answerCbQuery();
    ctx.reply(template('py'));
});

module.exports = bot;
