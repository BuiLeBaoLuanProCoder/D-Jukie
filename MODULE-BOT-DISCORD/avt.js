module.exports = {
  command: ["avt"],
  author: "Hercules",
  permission: "member",
	description: "Lấy avt người dùng lệnh or được tag :3",
	guide: "",
	allowListening: false,
	async listen (data) {},
	async call (data) {
    let user = data.mentions.users.first() 
  || data.author;

let avatar = user.displayAvatarURL({size: 1024, dynamic: true})

      /* const embed = new citnut.Discord.MessageEmbed()
        .setAuthor({name: "ten",icoURL:"link",url:"" })
        .setTitle("Avatar của bạn nè!")
        .setImage(avatar)
        .setColor("RED")
        return citnut.send({embeds:[embed]},data);*/

    return data.reply({embeds:[citnut.defaultemb(`Avatar của bạn đây :3`).setImage(avatar)],"allowedMentions":citnut.allowedMentions})
	}
} 