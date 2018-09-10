const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**السلام عليكم
سيرفرنا جميل وينقصنا جمالك
[ __ https://discord.gg/rjuhYFY __]
حياك ي عيني ...**
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**السلام عليكم
سيرفرنا جميل وينقصنا جمالك
[ __ https://discord.gg/rjuhYFY __]
حياك ي عيني ...**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
