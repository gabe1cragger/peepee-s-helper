const {EmbedBuilder} = require("discord.js")
const fs = require('fs');
module.exports={
    name:"queue",
    description:"Shows the current queue for songs",
    execute(client, message, agrs){
        const play = "▶️"
        const pause = "⏸️"
        const queue = client.distube.getQueue(message)
        const songs = queue.songs
        .map((song, pos) => {
          return `${
            pos === 0 ? `Current:` : `#${pos}.`
          } **${song.name}** \`[${
            song.formattedDuration
          }]\``;
        })
        .slice(0, 20)
        .join("\n");

      const embed = new EmbedBuilder()
        .setDescription(
          `${(
            `Here's the server queue${
              queue.songs.length > 20
                ? `1-20/${queue.songs.length}`
                : queue.songs.length
            } songs):`,
            queue.paused
              ? pause
              : play
          )}\n${songs}`
        );

      message.reply({
        embeds: [embed],
      });
    }
}