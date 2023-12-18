const { Client, Collection, GatewayIntentBits, Partials, ActivityType } = require("discord.js");
const colors = require("colors");

const client = new Client({
    intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
    partials: [ Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User ],
    restTimeOffset: 0,
    failIfNotExists: false,
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false
    }
});

const config = require('./settings/config');
client.login(process.env.tofken);

module.exports = client;

client.slashCommands = new Collection();

client.on("ready", async () => {

    require('./handler')(client);

    const readyEvent = require('./events/client/ready');
    await readyEvent.execute(client);
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;

    //ASS 1
    if(oldMember.channelId === "1182786308565901482")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 2
    else if(oldMember.channelId === "1182786332423114832")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 3
    else if(oldMember.channelId === "1182786335086481498")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 4
    else if(oldMember.channelId === "1182786337670168668")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 5
    else if(oldMember.channelId === "1182786339192713226")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 6
    else if(oldMember.channelId === "1182786342200017008")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 7
    else if(oldMember.channelId === "1182786344896954379")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 8
    else if(oldMember.channelId === "1182786349074485379")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 9
    else if(oldMember.channelId === "1182786350261481613")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
    //ASS 10
    else if(oldMember.channelId === "1182786354367709256")
    { 
        const member = oldMember.member;
        member.roles.remove(config.ass_role);
    }
 });

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;

    //ASS 1
    if(newMember.channelId === "1182786308565901482")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 2
    else if(newMember.channelId === "1182786332423114832")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 3
    else if(newMember.channelId === "1182786335086481498")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 4
    else if(newMember.channelId === "1182786337670168668")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 5
    else if(newMember.channelId === "1182786339192713226")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 6
    else if(newMember.channelId === "1182786342200017008")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 7
    else if(newMember.channelId === "1182786344896954379")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 8
    else if(newMember.channelId === "1182786349074485379")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 9
    else if(newMember.channelId === "1182786350261481613")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    //ASS 10
    else if(newMember.channelId === "1182786354367709256")
    { 
        const member = newMember.member;
        member.roles.add(config.ass_role);
    }
    
 });

process.on("unhandledRejection", (error) => {
    if (error.code == 10062) return; // Unknown interaction

    console.log(`[ERROR] ${error}`.red);
})