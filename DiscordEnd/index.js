const Discord = require("discord.js");
require("dotenv/config");
const client = new Discord.Client();
const axios = require('axios');

client.once('ready', () => {
    console.log('ready');
});

client.login(process.env.TOKEN + "");


client.on('message', message => {
    if (message.channel.id === '749081303777017977') {
        parts = message.content.split(" ");
        if (message.content.startsWith("m?start")) {
            const data = {
                server: parts[1],
                action: 'start',
                user: 'none'
            }
            if (sendToHook(data)) {
                message.channel.send("Success!!");
            } else {
                message.channel.send("R.I.P. Fail. @sanjitsarda#1056 help")
            }
        } else if (message.content.startsWith("m?stop")) {

        } else if (message.content.startsWith("m?OPS")) {

        } else if (message.content.startsWith("m?whitelist")) {

        } else if (message.content.startsWith("m?help")) {

        } else if (message.content.startsWith("m?")) {
            message.channel.send("wtf ar you trying to say")
        }
    }
});



function sendToHook(data) {
    axios.post('http://cheese.sanjitsarda.com/webhooker/', data)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            return false;
        });
    return false;
}