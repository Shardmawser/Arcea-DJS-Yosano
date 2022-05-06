const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '*';
const token = 'OTcyMDAzOTU0MTYwNDQ3NDg4.G3HCpW.NGHDBOpzsZlc1nuIjklmDaIrfjZxlfFVO-N4oE';

client.on('ready', () => {
    console.log("Yosano is online");
})

client.on('messageCreate', (message) => {
        if (message.content == "hi"){
            message.reply("Hi, shard is handsome :D")
        }
        
})

client.login(process.env.TOKEN);