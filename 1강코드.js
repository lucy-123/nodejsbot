const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI2NzQ4NTE1OTY3MTcyNjYw.XvsMVw.s3BKIoRsmI0Lw4L1GJm4wZ-KpEg';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '엘리시움 로그인! 😀어서오세요😀') {
    message.reply('😭엘리시움 오프라인 안녕히가세요😭');
  }
});

client.login(token);