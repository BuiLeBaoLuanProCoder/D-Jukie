module.exports = {
  command: ["tag"],
  author: "Hercules",
  permission: "member",
	description: "Tag ai đó trong sever :3",
	guide: "@mention",
	allowListening: false,
	async listen (data) {},
	async call (data) {
var mention = citnut.tools.getParam(data.content)
if (!mention) {
  return citnut.send("Vui lòng tag một người !!!", data);
}
setTimeout(() => citnut.send("Chèo bé"  + mention ,data), 1000);
setTimeout(() => citnut.send("Hong biết bé"  + mention +  "có còn làm ở đó hong ta???🐸", data), 2000);
setTimeout(() => citnut.send("Hú"  + mention, data), 3000);
setTimeout(() => citnut.send("Hà"  + mention, data), 4000);
setTimeout(() => citnut.send("Hề"  + mention, data), 5000);
setTimeout(() => citnut.send("Hế"  + mention, data), 6000);
setTimeout(() => citnut.send("Hê"  + mention, data), 7000);
setTimeout(() => citnut.send("Chào"  + mention +  ":3333", data), 8000);
setTimeout(() => citnut.send("Bủh dảk"  + mention ,data), 9000);
setTimeout(() => citnut.send("Lmao"  + mention +  "?????", data), 10000);
setTimeout(() => citnut.send("Bro"  + mention +  "cho tui xin tiền lì xì nhe🐧", data), 11000);
setTimeout(() => citnut.send("Hú hà"  + mention ,data), 12000);
setTimeout(() => citnut.send("Pheeeee quá"  + mention +  "ơi", data), 13000);
}
                             }