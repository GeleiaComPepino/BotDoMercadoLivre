const {Client, EmbedBuilder} = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');
const client = new Client({ intents: [100335] });
const prefix = '!';
client.on ('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
}).on ('messageCreate', message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author === client.user) return;
    const args = message.content.split(' ');
    if (!args) return message.channel.send('Digite o nome do produto que deseja procurar!');
    if (args[0] === `${prefix}mercadoLivre`) {
        args.shift()
        const search = args.join("-");
        const url = `https://lista.mercadolivre.com.br/${search}`;
        axios.get(`${url}`).then(response => {
            const $ = cheerio.load(response.data);
            const preco = $('.price-tag-amount').first().text();
            const nome = $('.ui-search-item__title').first().text();
            const embed = new EmbedBuilder()
                    .setTitle(nome)
                    .setURL(url)
                    .setDescription(`Preço: ${preco}`)
                    .setColor('#ffe601')
                    .setThumbnail('https://s2.glbimg.com/Bu6upvmSg6SRv0za635uXphThKo=/620x430/e.glbimg.com/og/ed/f/original/2020/03/28/mercado-livre.jpg')
            message.channel.send({ embeds: [embed] });
        }).catch(error => {
            console.log(error);
            message.channel.send('Não foi possível encontrar o produto!');
        });
    }
});
client.login(MTAxMDU0ODkzMTQ5MjU3NzM4MA.GJWhMo.xkBXNc4biOn_sSiFyLLxS4EoUdVQys7RScfO-0);