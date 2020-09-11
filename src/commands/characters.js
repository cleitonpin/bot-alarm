const { MessageEmbed } = require('discord.js');

function getCaracterInfo() {

}

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed();
    
    embed.setColor('#F00C');
    
    if (args[0] === 'Azriel') {
        embed.setTitle(`Personagem ${args[0]}`);
        embed.setDescription('Azriel (ア ズ リ ー ル, Azurīru) é o primeiro dos Flügel, tornando-se assim a "irmã mais velha" de Jibril e representante do Conselho das Dezoito Asas. Seu título permite sua primeira palavra durante emergências, mas quaisquer outras decisões ainda devem passar pelo Conselho (do qual ela é membro). Ela foi a primeira Flügel criada e, portanto, é a mais velha entre eles.');
        embed.setImage('https://vignette.wikia.nocookie.net/no-game-no-life/images/5/5c/Azriel1.jpg/revision/latest/scale-to-width-down/350?cb=20200214181242');
    } else {
        embed.addField('Personagens principais', 'Sora - Shiro - Steph - Jibril - Tet');
        embed.addField('Personagens secundários', 'Chlammy Zell - Feel Nirvalen - Hatsuse Izuna');
        embed.setImage('https://vignette.wikia.nocookie.net/no-game-no-life/images/0/02/CharacterHeader.png/revision/latest/scale-to-width-down/500?cb=20200729053119');
    }

    message.channel.send(embed);
};
