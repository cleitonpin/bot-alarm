require('dotenv').config();
const {
    Client, MessageEmbed, VoiceState, VoiceStateManager, 
} = require('discord.js');

const client = new Client();
const token = process.env.BOT_TOKEn;

const botPrefix = '-';
let bool = false;

client.on('voiceStateUpdate', (oldMember, newMember) => {
    if (oldMember.member.user.username === 'Lok') bool = true;
    console.log(newMember.member.user.username);
});

client.on('ready', async () => {
    console.log('Bot iniciado');

    client.user.setPresence({ activity: { name: '😉' }, afk: true, status: 'idle' });

    const embed = new MessageEmbed();
    const state = new VoiceState(client.guilds.cache.get('575815357609148426'), { 
        user_id: '294959047654768641',
        deaf: false,
    });

    const zeroFill = (n) => (`0${n}`).slice(-2);

    // eslint-disable-next-line consistent-return
    setInterval(async () => {
        const now = new Date();
        const dataHora = `${zeroFill(now.getUTCHours() - 3)}:${zeroFill(now.getMinutes())}:${zeroFill(now.getUTCSeconds())}`;
        const users = {
            lucas8x: client.users.cache.get('137268577207189504'),
            luiz: client.users.cache.get('288046326183100416'),
            arthur: client.users.cache.get('240878026810851328'),
            mauro: client.users.cache.get('294959047654768641'),
            cleitonpin: client.users.cache.get('398223947403100170'),
            rezende: client.users.cache.get('175352673304838144'),
            lucasM: client.users.cache.get('499237045911420929'),
        };
        const voice = client.voice.client.channels.cache.get('589616885197438976');
        if (dataHora === '17:00:00') {
            client.channels.cache.get('575815357609148428').send(`Compareçam no chat de voz -> ${voice} <-\n\n*_Jogadores_*\n\n${users.cleitonpin}\n${users.luiz}\n${users.lucas8x}\n?${users.arthur}\n?${users.rezende}\n?${users.lucasM}`);
        }
    
        if (dataHora === '18:00:00') {
            client.channels.cache.get('575815357609148428').send(`Agora você que ganha 10k por mês\n\n${users.mauro}`);
        } else if (dataHora === '18:05:00') {
            try {
                await state.setChannel('589616885197438976');
            } catch (err) {
                client.channels.cache.get('575815357609148428').send(`Entre no chat de voz -> ${voice} <- ${users.mauro}!!!!`);
            }
        } else if (dataHora === '18:30:00') {
            try {
                await state.setChannel('589616885197438976');
            } catch (err) {
                client.channels.cache.get('575815357609148428').send(`Desisto de chamar você ${users.mauro}`);
            }
        }
    }, 1000);
});

client.login(token);
