const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'kick',
    description: 'kicks a user',
    execute(message, args, client){
      const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const target = message.mentions.members.first()
        
        const reason = args.slice(1).join(" ")
        
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply(`You don't have the authority to kick someone`)
        
        if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply(`I don't have power to kick someone`)
        
        if(!args[0]) return message.reply(`Please mention someone to kick`)
        
        if(!target) return message.reply(`I can't find that member`)
        
        if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.ownerId) {
          return message.reply(`They have more power than you`)
        }
        
        if(target.id === message.author.id) return message.reply(`You can't kick yourself :skull:`)
        
        if(target.bannable) {
          let embed = new MessageEmbed()
                    .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
                    .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
                    .setColor(`RANDOM`)
                    .setDescription(`
        **Member Kicked**
        **Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
        **Reason:** ${reason || "None"}
                    `)
          message.channel.send({embeds:[embed]})
          
          target.kick()
          
          message.delete()
          
        } else {
          return message.reply(`I can't kick them. make sure that my role is above theirs`)
        }
        return undefined
    }}
