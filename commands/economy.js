const {MessageEmbed} = require('discord.js')
module.exports ={
    name:"economy",
    description:"Displays infomation about the in game economy",
    execute(message,args){
        const embed = new MessageEmbed()
        .setColor('#FF0000')
        .setAuthor({name:"Peepee's Helper", iconURL:"https://cdn.discordapp.com/avatars/955886518638088304/04d9cc2d397db8d50fcc756113ab25d2.webp?size=80"})
        .setTitle("General economy prices")
        .setDescription("*this may not be a complete list, for more information run `/worth` with the item in your mainhand. refer to `p!commands` for economy commands")
        .addFields(
            {name:"Crops and food", value:"Bread: 0.06$ \n Baked Potato: 0.03$ \n Wheat: 0.02$ \n Potato: 0.02$ \n Carrot: 0.02$ \n Beetroot: 0.02$"},
            {name:"Items", value:"Enchanted Golden Apple: 500.0$ \n Nether Star: 300.0$ \n Netherite Ingot: 25.0$ \n Prismarine Shard: 0.10$ \n Amethyst Shard: 0.10$ \n Lead: 0.10$ \n Copper Ingot: 0.20$"},
            {name:"Blocks", value:"Glass: 0.05$ \n Obsidian: 0.10$"}
        )
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    }
}