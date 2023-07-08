const { SlashCommandBuilder } = require('discord.js')

const EventController = require('../controllers/EventController.js')

module.exports = {

    data: new SlashCommandBuilder().setName("endevent").setDescription("Termina o evento"),

    async execute(interaction) {

        var mgs = ""

        if (EventController.eventStarted && interaction.user.id == EventController.idUser) {
            EventController.termina()
            EventController.eventStarted = !EventController.eventStarted
            EventController.idUser = 0
            msg = `Evento Finalisado tempo ${EventController.temp}`

        } else if (interaction.user.id !== EventController.idUser && EventController.eventStarted) {
            msg = `O evento so pode ser encerrado pelo usuario <@${EventController.idUser}>`
        } else if (!EventController.eventStarted) {
            msg = "Nem um evento iniciado"
        }


        await interaction.reply(msg)
    }

}