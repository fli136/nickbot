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
    msg.channel.send("pong!");
  }

  // else if (msg.content.startsWith(config.prefix + "getLogs ")) {
  //   let args = msg.content.split(" ");
  //   let user = msg.mentions.users.first();
  //   let messages = user.getLogs(3, be)
  // }

  if (command == "help") {
    msg.channel.send("!change @target newName");
  }

  if (command == "change") {
    if (args === undefined || args.length == 0 || msg.mentions.users != null || msg.mentions.user.length < 1) {
      msg.channel.send("you forgot an user you goon");
      return;
    } else if (args.length < 2) {
      msg.channel.send("you need some !help");
      return;
    }
    let user = msg.mentions.users.first();
    let newName = args.slice(1).join(" ");
    msg.guild.member(user).setNickname(newName);
  }

  // if (command == "getlog") {
  //   bot.getChannelLogs(msg.channel, 3, {}, function(err, logs) {
  //     if (!err) {
  //         msg.channel.send("got logs");
  //     } else {
  //       console.log("Error getting logs: ", err);
  //     }
  //   });
  // }
});

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.login(config.token);
