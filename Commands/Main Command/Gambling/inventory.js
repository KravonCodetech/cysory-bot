const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    commands: ['inventory', 'inv'],
    description: 'show item in inventory',

    callback: async(message, args, _, client) => {
        const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let fishrod = db.fetch(`fishrod_${User.id}`)
        if (fishrod === null) fishrod = '0'
        let picx = db.fetch(`picx_${User.id}`)
        if (picx === null) picx = '0'
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`${User.user.username}'s inventory`)
        .setDescription(`\`Cần câu\`: \`${fishrod}\`\n\`Cuốc Sắt\`: \`${picx}\``)
        .setTimestamp()
        message.channel.send({embeds:[Embed]})
    }
}