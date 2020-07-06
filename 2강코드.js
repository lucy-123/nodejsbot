const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI2NzQ4NTE1OTY3MTcyNjYw.Xvwx9Q.8JolMOdkvqznLWWZZLU98vi3m9U';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "엘리시움 로그인! 😀어서오세요😀";
const byeChannelComment = "😭엘리시움 오프라인 안녕히가세요😭";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === '하이 엘리시움') {
    message.reply('엘리시움 시스템 로딩중.....접속중..접속완료! 안녕하세요!');
  }
});

client.login(token);