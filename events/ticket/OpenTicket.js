const { ActionRowBuilder, ChannelType, Colors, ButtonBuilder, ButtonStyle, PermissionFlagsBits, } = require('discord.js')
const config = require('../../settings/config');

module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if(!interaction.isStringSelectMenu()) return;

        let support_team = config.support_team;

    
        if(interaction.values[0] === 'general') {
            let ticket = interaction.guild.channels.create({
                name: `Ticket of ${interaction.user.username}`,
                topic: interaction.user.id,
                type: ChannelType.GuildText,
                parent: config.ticket_category_general,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: support_team,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                        color: Colors.Blurple,
                        footer: {
                            text: "NovaRP"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket. `, ephemeral: true});
        } 
        else if (interaction.values[0] === "donation") {
            let ticket = interaction.guild.channels.create({
                name: `Ticket of ${interaction.user.username}`,
                topic: interaction.user.id,
                type: ChannelType.GuildText,
                parent: config.ticket_category_donation,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: support_team,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre dicci cosa vorresti`,
                        color: Colors.Blurple,
                        footer: {
                            text: "NovaRP"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
        }
        else if (interaction.values[0] === "faz") {
             let ticket =  interaction.guild.channels.create({
                name: `Ticket of ${interaction.user.username}`,
                topic: interaction.user.id,
                type: ChannelType.GuildText,
                parent: config.ticket_category_faz,
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: support_team,
                        allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                        deny: [PermissionFlagsBits.MentionEveryone]
                    },
                    {
                        id: interaction.guild.id,
                        deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                    }
                ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket System",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Ticket System"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
        }
        else if (interaction.values[0] === "ant") {
            let ticket =  interaction.guild.channels.create({
               name: `Ticket of ${interaction.user.username}`,
               topic: interaction.user.id,
               type: ChannelType.GuildText,
               parent: config.ticket_category_ant,
               permissionOverwrites: [
                   {
                       id: interaction.user.id,
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: "1182785951936811048",
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: "1182789692001886208",
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: interaction.guild.id,
                       deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                   }
               ]
           }).then((c) => {
               c.send({
                   embeds: [{
                       title: "Ticket System",
                       description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                       color: Colors.Blurple,
                       footer: {
                           text: "Ticket System"
                       },
                       timestamp: new Date()
                   }],
                   components: [
                       new ActionRowBuilder()
                       .addComponents(
                           new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                       )
                   ]
               });
               c.send({
                   content: `${interaction.user} <@${config.support_team}>`
               }).then(msg => {
                   setTimeout(() => {
                       msg.delete(), 1000
                   })
               });
           });
           await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
       }
       else if (interaction.values[0] === "perma") {
        let ticket =  interaction.guild.channels.create({
           name: `Ticket of ${interaction.user.username}`,
           topic: interaction.user.id,
           type: ChannelType.GuildText,
           parent: config.ticket_category_perma,
           permissionOverwrites: [
               {
                   id: interaction.user.id,
                   allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                   deny: [PermissionFlagsBits.MentionEveryone]
               },
               {
                   id: support_team,
                   allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                   deny: [PermissionFlagsBits.MentionEveryone]
               },
               {
                   id: interaction.guild.id,
                   deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
               }
           ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket System",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Ticket System"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
        }
        else if (interaction.values[0] === "azioni") {
            let ticket =  interaction.guild.channels.create({
               name: `Ticket of ${interaction.user.username}`,
               topic: interaction.user.id,
               type: ChannelType.GuildText,
               parent: config.ticket_category_az,
               permissionOverwrites: [
                   {
                       id: interaction.user.id,
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: support_team,
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: interaction.guild.id,
                       deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                   }
               ]
           }).then((c) => {
               c.send({
                   embeds: [{
                       title: "Ticket System",
                       description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                       color: Colors.Blurple,
                       footer: {
                           text: "Ticket System"
                       },
                       timestamp: new Date()
                   }],
                   components: [
                       new ActionRowBuilder()
                       .addComponents(
                           new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                       )
                   ]
               });
               c.send({
                   content: `${interaction.user} <@${config.support_team}>`
               }).then(msg => {
                   setTimeout(() => {
                       msg.delete(), 1000
                   })
               });
           });
           await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
       }
       else if (interaction.values[0] === "att") {
           let ticket =  interaction.guild.channels.create({
           name: `Ticket of ${interaction.user.username}`,
           topic: interaction.user.id,
           type: ChannelType.GuildText,
           parent: config.ticket_category_att,
           permissionOverwrites: [
               {
                   id: interaction.user.id,
                   allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                   deny: [PermissionFlagsBits.MentionEveryone]
               },
               {
                   id: support_team,
                   allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                   deny: [PermissionFlagsBits.MentionEveryone]
               },
               {
                   id: interaction.guild.id,
                   deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
               }
           ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket System",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Ticket System"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
        }
        else if (interaction.values[0] === "founder") {
               let ticket =  interaction.guild.channels.create({
               name: `Ticket of ${interaction.user.username}`,
               topic: interaction.user.id,
               type: ChannelType.GuildText,
               parent: config.ticket_category_founder,
               permissionOverwrites: [
                   {
                       id: interaction.user.id,
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: support_team,
                       allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                       deny: [PermissionFlagsBits.MentionEveryone]
                   },
                   {
                       id: interaction.guild.id,
                       deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                   }
               ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket System",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Ticket System"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
        }
        else if (interaction.values[0] === "wlgruppo") {
            let ticket =  interaction.guild.channels.create({
            name: `Ticket of ${interaction.user.username}`,
            topic: interaction.user.id,
            type: ChannelType.GuildText,
            parent: config.ticket_category_wlgruppo,
            permissionOverwrites: [
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                    deny: [PermissionFlagsBits.MentionEveryone]
                },
                {
                    id: "1182785929165942794", //OWNER
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                    deny: [PermissionFlagsBits.MentionEveryone]
                },
                {
                    id: "1182785930860445827", //FOUNDER
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                    deny: [PermissionFlagsBits.MentionEveryone]
                },
                {
                    id: "1182785931992911933", //COFOUNDER
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages],
                    deny: [PermissionFlagsBits.MentionEveryone]
                },
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.ReadMessageHistory, PermissionFlagsBits.SendMessages, PermissionFlagsBits.MentionEveryone]
                }
            ]
            }).then((c) => {
                c.send({
                    embeds: [{
                        title: "Ticket System",
                        description: `Grazie per aver aperto un ticket ${interaction.user}, Lo staff ti rispondera il prima possiblie.\nNel mentre esponi il tuo problema`,
                        color: Colors.Blurple,
                        footer: {
                            text: "Ticket System"
                        },
                        timestamp: new Date()
                    }],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder() .setCustomId('close') .setLabel('Close') .setStyle(ButtonStyle.Danger)
                        )
                    ]
                });
                c.send({
                    content: `${interaction.user} <@${config.support_team}>`
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete(), 1000
                    })
                });
            });
            await interaction.reply({content: `Grazie per aver aperto un ticket.`, ephemeral: true});
        }
    }
}
