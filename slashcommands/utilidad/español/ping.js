const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping Command",

    async execute(client, interaction){
        let ping = Date.now() - interaction.createdTimestamp;

        const embed = new EmbedBuilder()
        .setDescription(`Ping => ${ping}`)

        interaction.reply({ embeds: [embed] })
    }
}