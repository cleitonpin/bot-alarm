require('dotenv').config();
const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
const token = process.env.BOT_TOKEn;

const botPrefix = '-';

client.on('ready', () => {
    console.log('Bot iniciado');

    client.user.setPresence({ activity: { name: '😉' }, afk: true, status: 'idle' });

    const zeroFill = (n) => (`0${n}`).slice(-2);
    setInterval(() => {
        const now = new Date();
        const dataHora = `${zeroFill(now.getHours())}:${zeroFill(now.getMinutes())}:${zeroFill(now.getSeconds())}`;
        const users = {
            lucas8x: client.users.cache.get('137268577207189504'),
            luiz: client.users.cache.get('288046326183100416'),
            arthur: client.users.cache.get('240878026810851328'),
            mauro: client.users.cache.get('294959047654768641'),
            cleitonpin: client.users.cache.get('398223947403100170'),
            rezende: client.users.cache.get('175352673304838144'),
            lucasM: client.users.cache.get('499237045911420929'),
        };
        if (dataHora === '17:00:00') {
            const voice = client.voice.client.channels.cache.get('589616885197438976');
            
            client.channels.cache.get('575815357609148428').send(`Compareçam no chat de voz -> ${voice} <-\n\n*_Jogadores_*\n\n${users.cleitonpin}\n${users.luiz}\n${users.lucas8x}\n?${users.arthur}\n?${users.rezende}`);
        }
    
        if (dataHora === '18:00:00') {
            client.channels.cache.get('575815357609148428').send(`Agora você que ganha 5k por mês\n\n${users.mauro}`);
        }
    }, 1000);
});

client.login(token);
