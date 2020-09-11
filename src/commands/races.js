const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed();
    
    embed.setColor('#330000');
    embed.setTitle('Exceed');
    embed.setDescription('O Exceed (十六 種族 イ ク シ ー ド, Ikushīdo) refere-se às 16 raças conscientes de Disboard às quais os Dez Pactos se aplicam. Eles são classificados com base em sua afinidade com a magia.');
    embed.addField('Rank', [
        '1º',
        '2º',
        '3º',
        '4º',
        '5º',
        '6º',
        '7º',
        '8º',
        '9º',
        '10º',
    ], true);
    embed.addField('Nome', [
        'Old Deus',
        'Phantasma',
        'Elemental',
        'Dragonia',
        'Giant',
        'Flügel',
        'Elfo',
        'Dwarf',
        'Fairy',
        'Ex-Machina',
    ], true);
    embed.addField('Representado/País/Peça da raça', [
        'Horou - N/A - Peão', 
        ' **?** - **?** - Peão',
        ' **?** - **?** - Peão',
        ' **?** - **?** - Peão',
        ' **?** - **?** - Peão',
        'Azriel - Avant Heim - Rainha',
        ' **?** - Elven Gard - Torre',
        'Veig Drauvnil - Hardenfell - Bispo',
        ' **?** - **?** - Peão',
        'Eizing - N/A - Bispo',
    ], true);
    embed.setFooter('Para mais informações digite -nome/characters [nome_raça/nome_personagem]');
    // embed.setThumbnail('https://vignette.wikia.nocookie.net/no-game-no-life/images/c/c3/Revamp.jpg/revision/latest/scale-to-width-down/200?cb=20200512001211');

    message.channel.send(embed);
};
