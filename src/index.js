/* eslint-disable no-shadow */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
require('dotenv').config();
const {
    Client, MessageEmbed, VoiceState, VoiceStateManager, Invite,
} = require('discord.js');
const ytdl = require('ytdl-core-discord');

const client = new Client();
const token = process.env.BOT_TOKEn;

const botPrefix = '+';

client.on('ready', async () => {
    console.log('Bot iniciado');

    client.user.setPresence({ activity: { name: '😉' }, afk: true, status: 'idle' });
    const zeroFill = (n) => (`0${n}`).slice(-2);
    
    setInterval(async () => {
        const state = new VoiceState(client.guilds.cache.get('575815357609148426'), { 
            user_id: '294959047654768641',
            deaf: false,
        });
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
        console.log("select c.name, c.language, c.salario, j.moneyj, j.workedhours from career c, job j WHERE c.id = '398223947403100170' AND j.id = '398223947403100170'");
        if (dataHora === '17:00:00') {
            client.channels.cache.get('575815357609148428').send(`Compareçam no chat de voz -> ${voice} <-\n\n_Jogadores_\n\n${users.cleitonpin}\n${users.luiz}\n${users.lucas8x}\n${users.lucasM}\n${users.rezende}\n${users.arthur}`);
            const embed = new MessageEmbed()
                .setAuthor('Hora de playing', 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png')
                .setTimestamp()
                .setFooter('Reajam para confirmar')
                .setImage('https://media1.tenor.com/images/ecc46e7dca1e13982b41fbe404764145/tenor.gif?itemid=17412863');

            const reactionEmbed = await client.channels.cache.get('575815357609148428').send(embed);
            await reactionEmbed.react('✅');
            await reactionEmbed.react('❌');

            // eslint-disable-next-line consistent-return
            const filter = (reaction, user) => {
                // eslint-disable-next-line default-case
                switch (reaction.emoji.name) {
                case "✅": return user.id;
                case "❌": return user.id;
                }
            };

            const collector = reactionEmbed.createReactionCollector(filter, { max: undefined });
            
            collector.on('collect', async (reaction, user) => {
                if (reaction.emoji.name === '✅') {
                    const usersConfirmeds = [user.username];
                    client.channels.cache.get('575815357609148428').send(`\n${usersConfirmeds.join(" ")}   ✅`);
                } else if (reaction.emoji.name === '❌') {
                    if (user.username === 'Tokisaki') return;
                    const usersNotConfirmations = [user.username];
                    client.channels.cache.get('575815357609148428').send(`\n${usersNotConfirmations.join(" ")}   ❌`);
                } else {
                    const usersFailed = [user.username];
                    client.channels.cache.get('575815357609148428').send(`\n${usersFailed.join(" ")} Não reagiram`);
                }
            });

            setTimeout(() => {
                reactionEmbed.delete();
            }, 1800000);
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

client.on('raw', async (dados) => {
    if (dados.t !== "PRESENCE_UPDATE") return;

    if (dados.t === "PRESENCE_UPDATE" && client.guilds.cache.get('575815357609148426').members.cache.get(dados.d.user.id)) {
        // console.log(dados.d)
        const serv = client.guilds.cache.get('575815357609148426');
        const membro = serv.members.cache.get(dados.d.user.id);

        const roles = {
            valorant: serv.roles.cache.get('755993993132638278'),
        };

        // eslint-disable-next-line no-useless-return
        if (dados.d.game == null || dados.d.game.name == null || dados.d.game.name === 'Custom Status') return;
    
        if (dados.d.game.name === 'VALORANT') {
            if (!membro.roles.cache.has(roles.valorant)) {
                membro.roles.add(roles.valorant);
            }
        }
    }
});

client.on('guildMemberAdd', (member) => {
    const guild = client.guilds.cache.get("575815357609148426");
    const channel = client.channels.cache.get("618232063170183198");
    const emoji = member.guild.emojis.cache.find((emojiName) => emojiName.name === "tuts");

    const embed = new MessageEmbed()
        .setColor('#0032')
        .setDescription(`${member.user}, Boas vindas ao ${guild.name}, com ${member.guild.memberCount} membros`)
        .setTitle(`${emoji} Boas vindas ${emoji}`)
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setImage('https://media.giphy.com/media/4QxQgWZHbeYwM/giphy.gif')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
        .setFooter(`ID do úsuario: ${member.user.id}`)
        .setTimestamp();

    channel.send(embed);
});
client.login(token);
