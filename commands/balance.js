const Economy = require('discord-economy-super');
const {EmbedBuilder} = require('discord.js');
const { execute } = require('./work');
const eco = new Economy({
    storagePath: './storage.json', // Full path to a JSON File. Default: './storage.json'.
    checkStorage: true, // Checks the if database file exists and if it has errors. Default: true.
    dailyCooldown: 60000 * 60 * 24, // Daily Cooldown, ms (24 Hours = 1 Day). Default: 24 Hours (60000 * 60 * 24) ms.
    workCooldown: 60000 * 60, // Work Cooldown, ms (1 Hour). Default: 1 Hour (60000 * 60) ms.
    weeklyCooldown: 60000 * 60 * 24 * 7, // Cooldown for Weekly Command (in ms). Default: 7 Days (60000 * 60 * 24 * 7) ms
    dailyAmount: 100, // Daily Amount. Default: 100.
    workAmount: [0, 100], // Work Amount: first element is min value, second is max value (It also can be a Number). Default: [10, 50].
    weeklyAmount: 1000, // Amount of money for Weekly Command. Default: 1000.
    updateCountdown: 1000, // Checks for if storage file exists in specified time (in ms). Default: 1000.
    dateLocale: 'en', // The region (example: ru; en) to format date and time. Default: 'ru'.
    updater: {
          checkUpdates: false, // Sends the update state message in console on start. Default: true.
          upToDateMessage: true // Sends the message in console on start if module is up to date. Default: true.
      },
      errorHandler: {
          handleErrors: true, // Handles all errors on start. Default: true.
          attempts: 5, // Amount of attempts to load the module. Use 'null' for infinity attempts. Default: 5.
          time: 3000 // Time between every attempt to start the module. Default: 3000.
      },
      optionsChecker: {
          ignoreInvalidTypes: false, // Allows the method to ignore the options with invalid types. Default: false.
          ignoreUnspecifiedOptions: false, // Allows the method to ignore the unspecified options. Default: false.
          ignoreInvalidOptions: false, // Allows the method to ignore the unexisting options. Default: false.
          showProblems: false, // Allows the method to show all the problems in the console. Default: false.
          sendLog: false, // Allows the method to send the result in the console. Default: false.
          sendSuccessLog: false // Allows the method to send the result if no problems were found. Default: false.
      }
  });
  module.exports={
    name:"balance",
    description:"Shows your balance",
    execute(client, message, args){
    const member = message.guild.members.cache.get(message.mentions.members.first()?.id || message.author.id)    
    const balance = eco.balance.fetch(member.id, message.guild.id)
    const bank = eco.bank.fetch(member.user.id, message.guild.id)
    const embed = new EmbedBuilder()
    .setColor("#FF0000")
    .setTitle("Your Balance")
    .setDescription(`**${member.user.username}**'s Balance:\nCash: **${balance}** pepsis.\nBank: **${bank}** pepsis.`)
    message.channel.send({embeds:[embed]})
    }
  }
