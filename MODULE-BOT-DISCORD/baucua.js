module.exports = {
  command: ["baucua"],
  author: "Hercules",
  permission: "member",
	description: "",
	guide: "",
	allowListening: false,
	async listen (data) {},
	async call (data) {
	  var text = citnut.tools.getParam(data.content)
	  if (!text)
	  return citnut.send(`Sai định dạng`, data)
	  var type = ["gà", "tôm", "bầu", "cua", "cá", "nai"];
var baucua1 = type[Math.floor(Math.random() * type.length)];
var baucua2 = type[Math.floor(Math.random() * type.length)];
var baucua3 = type[Math.floor(Math.random() * type.length)];
if (baucua1 == 'gà') {
  var icon1 = '🐓'
}
if (baucua1 == 'tôm') {
  var icon1 = '🦐'
}
if (baucua1 == 'bầu') {
  var icon1 = '🍐'
}
if (baucua1 == 'cua') {
  var icon1 = '🦀'
}
if (baucua1 == 'cá') {
  var icon1 = '🐟'
}
if (baucua1 == 'nai') {
  var icon1 = '🦌'
}
if (baucua2 == 'gà') {
  var icon2 = '🐓'
}
if (baucua2 == 'tôm') {
  var icon2 = '🦐'
}
if (baucua2 == 'bầu') {
  var icon2 = '🍐'
}
if (baucua2 == 'cua') {
  var icon2 = '🦀'
}
if (baucua2 == 'cá') {
  var icon2 = '🐟'
}
if (baucua2 == 'nai') {
  var icon2 = '🦌'
}
if (baucua3 == 'gà') {
  var icon3 = '🐓'
}
if (baucua3 == 'tôm') {
  var icon3 = '🦐'
}
if (baucua3 == 'bầu') {
  var icon3 = '🍐'
}
if (baucua3 == 'cua') {
  var icon3 = '🦀'
}
if (baucua3 == 'cá') {
  var icon3 = '🐟'
}
if (baucua3 == 'nai') {
  var icon3 = '🦌'
}
if (text == baucua1 || text == baucua2 || text == baucua3) {
            return citnut.send(`Bạn đã thắng\nKết quả: ${icon1} | ${icon2} | ${icon3}`,data) 
} else {
            return  citnut.send(`Bạn đã thua\nKết quả: ${icon1} | ${icon2} | ${icon3}`,data)}
}
           }
          