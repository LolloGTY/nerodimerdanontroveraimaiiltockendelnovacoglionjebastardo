const { ActionRowBuilder, ChannelType, Colors, PermissionFlagsBits, StringSelectMenuBuilder,  EmbedBuilder   } = require('discord.js')
const config = require('../../settings/config');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if(!interaction.isButton()) return;

        if(interaction.customId == 'ticket') {
            
            let AlreadyChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id);
            if (AlreadyChannel) return interaction.reply({
                content: ":x: | Hai gia un ticket aperto",
                ephemeral: true
            });

            const ticket = new EmbedBuilder()
                .setColor(Colors.Blurple)
                .setAuthor({ name: 'Ticket', iconURL: 'https://cdn.discordapp.com/attachments/1181643818932641903/1184871581244207164/nova2png.png?ex=658d8ca6&is=657b17a6&hm=284c4ad41aa0666145d4651154477277efd76bcd9ea722e5e45b33bacb0e8770&'})
                .setDescription(`Per favore seleziona la categoria per il ticket!`)
                .setImage('https://cdn.discordapp.com/attachments/1184233325821444208/1184266569044459520/nova.gif?ex=658b5930&is=6578e430&hm=bc28b3cc90003636382ee6388e0993b15d35e67a38a94c8378156579d59b87c4&')
            
            interaction.reply({
                embeds: [ticket],
                components: [
                    new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                        .setCustomId('category')
                        .setPlaceholder('Select a category')
                        .addOptions([
                            {
                                label: 'Generale',
                                description: 'Ticket Generale',
                                value: 'general',
                                emoji: '💭'
                            },
                            {
                                label: 'Wl di Gruppo',
                                description: 'Ticket Wl',
                                value: 'wlgruppo',
                                emoji: '🎫'
                            },
                            {
                                label: 'Donazione',
                                description: 'Ticket Donazione',
                                value: 'donation',
                                emoji: '<:payp:1172804555138924564>'
                            },
                            {
                                label: 'Fazioni',
                                description: 'Ticket Fazione',
                                value: 'faz',
                                emoji: '🔫'
                            },
                            {
                                label: 'Anticheat',
                                description: 'Ticket Anticheat',
                                value: 'ant',
                                emoji: '🔎'
                            },
                            {
                                label: 'PermaDeath',
                                description: 'Ticket PermaDeath',
                                value: 'perma',
                                emoji: '💀'
                            },
                            {
                                label: 'Rivalutazioni Azioni',
                                description: 'Ticket Rivalutazzioni',
                                value: 'azioni',
                                emoji: '💫'
                            },
                            {
                                label: 'Attività',
                                description: 'Ticket Attività',
                                value: 'att',
                                emoji: '🏪'
                            },
                            {
                                label: 'Founder',
                                description: 'Ticket Founder',
                                value: 'founder',
                                emoji: '👑'
                            }
                        ])
                    )
                ],
                ephemeral: true
            });
        }
    }
}