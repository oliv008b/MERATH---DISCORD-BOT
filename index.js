const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjIyMTU2NzA1OTYyMzkzNjAw.XX0UmA.xCXaMwOerTeMEAqdRIHFGYK92Y8';

bot.login(process.env.token);

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('MERATH - BOT er klar til brug! :)');
})


// sender velkommens besked
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('527549468824829995').send("Hej " + member.user +", Velkommen til **MERATH - NPRISON** :tada::hugging:! - Håber du nyder dit ophold på MERATH  :rainbow: :blush:\n\n ***HUSK!*** At læse vores Regler ind under #📋regler📋 - Tak på forhånd!:stuck_out_tongue_winking_eye:\n\nKunne du tænke dig at donere til serveren? - /buy:wink:✌️\n\nSer du en Hacker?! Report spilleren ind under #💣report-en-hacker💣  - Så vil STAFF TEAM klar resten! Tak skal du have! :skull::robot:\n\n"); 
 
    //Giver roller
    var role = member.guild.roles.find('name', 'Fange');
    member.addRole(role);
});
// kommandoer
bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
                message.channel.sendMessage("pong!");
                break;
        case 'support':
            message.reply(" Sæt dig i venlist i <#527633237791735808> og afvent en <@&617089243990196244> !");
            break;


    }
})
