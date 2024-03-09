const { EmbedBuilder } = require("discord.js");
const pagination = require('../../../functions/pagination');

module.exports = {
    name: "test",
    description: "testing",

    async execute(client, interaction){

        const embeds = [];

        var title1 = 'Mapeado Global'
        var image1 = 'https://i.redd.it/gm8273jvjrk71.jpg'

        var title2 = 'Rutas Globales'
        var image2 = 'https://cdn.discordapp.com/attachments/1215806454989197442/1215832809240002691/image.png?ex=65fe2f8a&is=65ebba8a&hm=cce9f3ceefcd2a2aab062832ea6f6767e8fd958f78208208cd930b728f8a6740&'
        
        for (var i = 0; i<2;i++) {
            if (i + 1 == 1) embeds.push(new EmbedBuilder().setTitle(title1).setImage(image1));
            else if (i + 1 == 2) embeds.push(new EmbedBuilder().setTitle(title2).setImage(image2));
        };
        await pagination(interaction, embeds);

    }
}

