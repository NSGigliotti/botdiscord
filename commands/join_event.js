const { SlashCommandBuilder } = require('discord.js')


const EventController = require('../controllers/EventController.js')


module.exports = {

    data: new SlashCommandBuilder().setName("join").setDescription("Entra em um evento"),

    async execute(interaction) {
        msg = ""

        const voice_channel_id = interaction.guild.members.cache.get(interaction.member.user.id).voice.channelId

        if (EventController.eventStarted) {

            if (voice_channel_id === EventController.voiceChatId) {

                if (EventController.participants.some(objeto => objeto.userId === interaction.user.userId)) {
                    msg = `<@${interaction.user.id}> ja esta cadastrado no evento`

                    message.react('❌');
                } else {

                    EventController.addUserEvent(interaction.user)

                    msg = `<@${interaction.user.id}> participaçao no evento confirmada com sucesso`

                    const message = await interaction.reply({ content: msg, fetchReply: true })

                    message.react('✅');
                }

            } else {

                msg = `<@${interaction.user.id}> falha na confirmação do evento`

                const message = await interaction.reply({ content: msg, fetchReply: true })

                message.react('❌');
            }

        } else {
            msg = "Na ha um evento ativos"
            const message = await interaction.reply({ content: msg, fetchReply: true })

            message.react('❌');
        }

    }
}