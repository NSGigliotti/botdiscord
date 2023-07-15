const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const EventController = require('../controllers/EventController.js')

module.exports = {

    data: new SlashCommandBuilder().setName("endevent").setDescription("Termina o evento").addStringOption(option =>
        option.setName('valor')
            .setDescription('Valor arecadado no evento, insira o valor em K, M ou B')
            .setRequired(true)),

    async execute(interaction) {


        let valor = interaction.options.getString('valor');

        var msg = ""


        const [digits, word] = valor.match(/\D+|\d+/g);

        /*  if (!EventController.eventStarted) {
 
             msg = "Nao ha um evento ativo"
 
         } else {
             if (EventController.eventStarted && interaction.user.id == EventController.idUser) {
 
                 if (word.toUpperCase() !== "K" && word.toUpperCase() !== "M" && word.toUpperCase() !== "B") {
 
                     msg = "Valor incorreto"
 
                 } else {
                     valorConvert = EventController.convert(valor)
 
                     EventController.termina()
 
                     EventController.eventStarted = !EventController.eventStarted
 
                     EventController.idUser = 0
 
                     msg = `Evento Finalisado tempo ${EventController.temp}`
 
                     //json = JSON.parse(EventController.participants)
 
                   
                 }
             } else if (interaction.user.id !== EventController.idUser && EventController.eventStarted) {
 
                 msg = `O evento so pode ser encerrado pelo usuario <@${EventController.idUser}>`
             }
         }
 
  */
       /*   teste = {}

        for (i = 0; i <= EventController.participants.length; i++) {
            user = {
                name: `${EventController.participants[i].username}`,
                value: `Inicio da participação: ${EventController.participants[i].startTemp} , e termino ${EventController.participants[i].endTemp} valor da participação : ${va}`
            }

            
        }

        const embed = new EmbedBuilder().setTitle('Valor').setDescription('Valor destribuido').setColor("Red").addFields(

            {
                name: `${EventController.participants[0].username}`,
                value: `Inicio da participação: ${EventController.participants[0].startTemp} , e termino ${EventController.participants[0].endTemp} valor da participação : ${va}`
            }
        ) */

        //await interaction.reply({ embeds: [embed], ephemeral: false });


        await interaction.addField("Don't forget to visit", '\u200B╭✧<#808311247203729429>\n ︰<#808295944911192096>\n ╰✧<#808285096213479468>\n\nHave fun! :)')

        /*   for (i = 0; i <= 5; i++) {
              await interaction.followUp(`teste: ${i}`)
          } */



    }

}