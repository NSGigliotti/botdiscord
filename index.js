const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');


//? dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
client.commands = new Collection()

//! import commands
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, 'commands')
const commandsFile = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

for (const file of commandsFile) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Este comando em ${filePath} esta com "Data" ou "Execute" ausentes`);
    }
}


client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.login(TOKEN);

//? Listen de interaçoes com o bot
client.on(Events.InteractionCreate, async interacation => {
    if (!interacation.isChatInputCommand()) return
    const command = interacation.client.commands.get(interacation.commandName)
    if (!command) {
        console.error("Comando n encontrado")
        return
    }
    try {
        await command.execute(interacation)
    } catch (error) {
        console.log(error)
        await interacation.reply("houve um erro ao executar o comando")
    }
})


//! comandos "npm start" inicia o bot e o comando "node deploy-commands.js" faz deploy dos comandos