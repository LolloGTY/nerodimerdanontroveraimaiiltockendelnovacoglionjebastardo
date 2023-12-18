const colors = require('colors');
const config = require('../../settings/config');
const { ActionRowBuilder, Colors, ButtonBuilder, ButtonStyle, SlashCommandBuilder,  EmbedBuilder, REST, Routes   } = require('discord.js');

module.exports = {
    name: 'ready',
    once: false,
    execute: async (client) => {
        console.log(`[READY] ${client.user.tag} (${client.user.id}) is ready !`.green);
        await client.user.setPresence({ activities: [{ name: 'NovaRP ', type: 1 }], status: 'PLAYING', afk: false });

        let channelTicket = client.channels.cache.get(config.ticket_channel);
        await channelTicket.send({ content: "." })
        await channelTicket.bulkDelete(2);

        const ticket = new EmbedBuilder()
            .setColor(Colors.Blurple)
            .setAuthor({ name: 'Ticket', iconURL: 'https://cdn.discordapp.com/attachments/1181643818932641903/1184871581244207164/nova2png.png?ex=658d8ca6&is=657b17a6&hm=284c4ad41aa0666145d4651154477277efd76bcd9ea722e5e45b33bacb0e8770&'})
            .setDescription(`Se hai bisogno di supporto, apri un ticket qua sotto!`)
            .setImage('https://cdn.discordapp.com/attachments/1184233325821444208/1184266569044459520/nova.gif?ex=658b5930&is=6578e430&hm=bc28b3cc90003636382ee6388e0993b15d35e67a38a94c8378156579d59b87c4&')

        await channelTicket.send({
            embeds: [ticket],
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder() .setCustomId('ticket') .setLabel('Open a ticket') .setStyle(ButtonStyle.Secondary)
                )
            ]
        })


        const warn = new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warna un player')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Il player da warnare'));
        
        const whitelist = new SlashCommandBuilder()
        .setName('whitelist')
        .setDescription('Metti il ruolo wl a un player')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Il player'));

        const easteregg = new SlashCommandBuilder()
        .setName('easteregg')
        .setDescription('Inserisci il codice che hai trovato')
        .addStringOption(option =>
            option.setName('code')
                .setDescription('Codice trovato'));

        //client.application.commands.create(warn, config.guild_id)

        /*
        //DELETING COMMAND
        const rest = new REST().setToken(config.token);
        // for guild-based commands
        rest.delete(Routes.applicationGuildCommand("1181643320817090651", config.guild_id, '1185249779370950686'))
            .then(() => console.log('Successfully deleted guild command'))
            .catch(console.error);
        */
    }
}
