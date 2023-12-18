const colors = require('colors');
const config = require('../../settings/config');
const { ActionRowBuilder, Colors, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    once: false,
    execute: async (message) => {
        if(!message.member.roles.cache.has("1182785929165942794")){
            let blacklisted = [ 'discord.gg','https://discord.com/invite', 'discord.com','https://dsc.gg/', 'dsc.gg', ];
            let foundInText = false;
            for (var i in blacklisted) {
                if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
            }
            if (foundInText) {
                message.author.send({ content: `:x: | Non puoi inviare link di altri server`, ephemeral: true})
                message.delete();
            }
        }
    }
}
