const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");

bot.on("message", msg => {

  //Exits if bot
  if(msg.author.bot) return;

  //Checks for prefix
  if(!msg.content.startsWith(config.prefix)) return;

  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == "ping") {
    msg.channel.sendMessage("pong!");
  }

  // else if (msg.content.startsWith(config.prefix + "getLogs ")) {
  //   let args = msg.content.split(" ");
  //   let user = msg.mentions.users.first();
  //   let messages = user.getLogs(3, be)
  // }


  if (command == "change") {
    let user = msg.mentions.users.first();
    let newName = args[1];
    msg.guild.member(user).setNickname(newName);
  }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login(config.token);
