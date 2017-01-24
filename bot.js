var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require('./config.json');
const fs = require("fs");

bot.on("message", msg => {

  if(!msg.content.startsWith(config.prefix)) return;
  // Exit if any bot
  if(msg.author.bot) return;

  if (msg.content.startsWith(config.prefix + "ping")) {
    msg.channel.sendMessage("pong!");
  }

  else if (msg.content.startsWith(config.prefix + "foo")) {
    msg.channel.sendMessage("bar!");
  }

  else if (msg.content.startsWith(config.prefix + "change ")) {
    let args = msg.content.split(" ");
    let user = msg.mentions.users.first();
    let newName = args[2];
    msg.guild.member(user).setNickname(newName);
  }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login(config.token);
