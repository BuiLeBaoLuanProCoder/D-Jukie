module.exports = {
  command: ["taixiu"],
  author: "Hercules",
  permission: "member",
	description: "Chơi tài hoặc xỉu",
	guide: "[tài/xỉu]",
	allowListening: false,
	async listen (data) {},
	async call (data) {
	  var text = citnut.tools.getParam(data.content)
	  if (!text)
	  return citnut.send(`Vui lòng nhập tài hoặc xỉu🎲`, data)
	  if (text.toLowerCase() != 'tài' && text.toLowerCase() != 'xỉu') return citnut.send(`Vui lòng nhập tài hoặc xỉu🎲`, data)
	  var type = ['tài', 'xỉu'];
var random = type[Math.floor(Math.random() * type.length)];
var xiu = [3, 4, 5, 6, 7, 8, 9, 10];
var tai = [11, 12, 13, 14, 15, 16, 17, 18];
if (random == 'tài') {
  var defl_number = tai[Math.floor(Math.random() * tai.length)];
}
if (random == 'xỉu') {
  var defl_number = xiu[Math.floor(Math.random() * xiu.length)];
}
if (text == random ) { return citnut.send(`Bạn đã thắng\nKết quả: ${random} ${defl_number}`,data) 
} else {  return citnut.send(`Bạn đã thua\nKết quả: ${random} ${defl_number}`,data)}
}
           }