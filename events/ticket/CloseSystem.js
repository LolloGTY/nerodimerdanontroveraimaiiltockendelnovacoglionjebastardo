const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors } = require('discord.js')
const config = require('../../settings/config');
const transcript = require('discord-html-transcripts');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if(!interaction.isButton()) return;

        if(interaction.customId === "close") {
            interaction.reply({
                content: `Sei sicuro di voler eliminare il ticket?`,
                ephemeral: true,
            });
            interaction.channel.send({
                embeds: [{
                    title: "Ticket",
                    description: "Il ticket sara chiuso vuoi il transcript?",
                    color: Colors.Blurple,
                    footer: {
                        text: "NovaRP"
                    },
                    timestamp: new Date()
                }],
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder() .setCustomId('yes') .setLabel('Yes') .setStyle(ButtonStyle.Success),
                        new ButtonBuilder() .setCustomId('no') .setLabel('No') .setStyle(ButtonStyle.Danger)    
                    )
                ]
            });
        }
        else if (interaction.customId === "yes") {
            let ticket_logs = client.channels.cache.get(config.ticket_logs);

            await ticket_logs.send({
                embeds: [{
                    title: "Ticket",
                    description: `Nuovo ticket chiuso (${interaction.channel.name}) by ${interaction.user}`,
                    color: Colors.Blurple,
                    footer: {
                        text: "NovaRP"
                    },
                    timestamp: new Date()
                }],
                files: [await transcript.createTranscript(interaction.channel)]
            });

            await interaction.channel.send({
                embeds: [{
                    title: "Ticket",
                    description: `Nuovo ticket chiuso ${interaction.user}`,
                    color: Colors.Blurple,
                    footer: {
                        text: "NovaRP"
                    },
                    timestamp: new Date()
                }]
            });

            await interaction.channel.delete();
        }
        else if (interaction.customId === "no") {
            interaction.channel.send({
                embeds: [{
                    title: "Ticket",
                    description: `Nuovo ticket chiuso ${interaction.user}`,
                    color: Colors.Blurple,
                    footer: {
                        text: "NovaRP"
                    },
                    timestamp: new Date()
                }]
            });
            await interaction.channel.delete();
        }
    }
}