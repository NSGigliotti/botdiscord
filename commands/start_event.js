const { SlashCommandBuilder } = require('discord.js')

const EventController = require('../controllers/EventController.js')

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {

    data: new SlashCommandBuilder().setName("startevent").setDescription("Inicia o evento"),

    async execute(interaction) {

        var msg = ""

        const voice_channel_id = interaction.guild.members.cache.get(interaction.member.user.id).voice.channelId

        if (voice_channel_id === null) {
            msg = "Erro ao inicar o evento"
            await interaction.reply(msg)
        } else if (!EventController.eventStarted) {
            EventController.idUser = interaction.user.id
            EventController.eventStarted = !EventController.eventStarted
            EventController.nameUser = interaction.user.username
            EventController.voiceChatId = voice_channel_id

            EventController.iniciar()

            delay(1000).then(() => {
                EventController.addUserEvent(interaction.user)
            })

            msg = "evento iniciado"

            const message = await interaction.reply({ content: msg, fetchReply: true })

            message.react('☑');

        } else {
            msg = "um evento ja esta em andamento"

            await interaction.reply(msg)
        }

    }

}
