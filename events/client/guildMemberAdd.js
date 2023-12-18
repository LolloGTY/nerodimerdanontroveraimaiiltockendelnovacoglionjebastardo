const colors = require('colors');
const config = require('../../settings/config');
const { ActionRowBuilder, Colors, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    execute: async (member, client) => {
        const joinembed = new EmbedBuilder()
            .setColor(Colors.Blurple)
            .setAuthor({ name: '**NOVA RP**', iconURL: 'https://cdn.discordapp.com/attachments/1181643818932641903/1184871581244207164/nova2png.png?ex=658d8ca6&is=657b17a6&hm=284c4ad41aa0666145d4651154477277efd76bcd9ea722e5e45b33bacb0e8770&'})
            .setDescription(`Benvenuto nel discord di NOVA RP!`)
            .setImage('https://cdn.discordapp.com/attachments/1184233325821444208/1184266569044459520/nova.gif?ex=658b5930&is=6578e430&hm=bc28b3cc90003636382ee6388e0993b15d35e67a38a94c8378156579d59b87c4&')
            .setTimestamp()

        client.channels.cache.get(config.join_channel).send({ embeds: [joinembed], content: `Benvenuto/a <@${member.user.id}> Su NOVA RP\n\nTI RACCOMANDO PRIMA DI ENTRARE NEL SERVER LEGGI BENE IL #📃│𝖱𝖾𝗀𝗈𝗅𝖺𝗆𝖾𝗇𝗍𝗈` });
    }
}
