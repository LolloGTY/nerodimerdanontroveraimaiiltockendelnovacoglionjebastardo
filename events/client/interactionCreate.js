const config = require('../../settings/config');
module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if(interaction.commandName==='warn'){  
            const target = interaction.options.getMember('user');
            const staff = interaction.guild.members.cache.get(interaction.user.id);
            const hasStaff = staff.roles.cache.has(config.support_team);
            if(hasStaff){
                if(!target.roles.cache.has(config.warn1)){
                    target.roles.add(config.warn1);  
                    interaction.reply({ content: `:white_check_mark: | Hai warnato con successo ${target} che ora e al Warn 1.\nNon dimenticare di segnarlo sull'apposito canale`, ephemeral: true})
                }else if (!target.roles.cache.has(config.warn2)){
                    target.roles.add(config.warn2);
                    interaction.reply({ content: `:white_check_mark: | Hai warnato con successo ${target} che ora e al Warn 2.\nNon dimenticare di segnarlo sull'apposito canale`, ephemeral: true})   
                }else if (!target.roles.cache.has(config.warn3)){
                    target.roles.add(config.warn3);
                    interaction.reply({ content: `:white_check_mark: | Hai warnato con successo ${target} che ora e al Warn 3.\nNon dimenticare di segnarlo sull'apposito canale`, ephemeral: true})
                }else {
                    interaction.reply({ content: `:x: | ${target} Ha gia 3 Warn mi sembrerebbe il caso di bannarlo per un pò`, ephemeral: true})
                }
            }else{
                interaction.reply({ content: `:x: | Solo gli staff possono eseguire questo comando`, ephemeral: true})
            }
        }
        if(interaction.commandName==='whitelist'){
            const target = interaction.options.getMember('user');
            const staff = interaction.guild.members.cache.get(interaction.user.id);
            const hasStaff = staff.roles.cache.has(config.support_team);
            if(hasStaff){
                target.roles.add(config.wlrole)
                target.roles.add(config.cittadino)
                target.roles.remove(config.attwl)
                interaction.reply({ content: `:white_check_mark: | Hai messo con successo il ruolo wl a ${target}`, ephemeral: true})
            }else{
                interaction.reply({ content: `:x: | Solo gli staff possono eseguire questo comando`, ephemeral: true})
            }
        }

    }
}