module.exports = {
  command: ["tagv2"],
  author: "Hercules",
  permission: "member",
	description: "Tag ai đó trong sever nhưng xịn hơn :3",
	guide: "@mention",
	allowListening: false,
	async listen (data) {},
	async call (data) {
function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
};
var mention = citnut.tools.getParam(data.content)
var content = mention;
var loadcontent = content.split(' ');
var nguoiduoctag = loadcontent[0];
var noidung = loadcontent.slice(1, loadcontent.length - 2).join(" ")
if (!mention) {
return citnut.send("Vui lòng tag một người !!!", data);
}
let solantag = loadcontent[loadcontent.length - 2];
let time = loadcontent[loadcontent.length - 1];
if (!solantag || !time) 
return citnut.send(`Sai cú pháp !!!\n\nHD: tagv2 @mention Hi 5 1 (Tag mention với nội dung hi số lần là 5 và deplay 1 giây)`, data)
if (isNaN(solantag)) 
return citnut.send(`Số lần tag phải là một con số\n\nHDSD: taglientuc @tag nội dung số lần khoảng cách\nVD: taglt @tag Hi 10 2`, data)
if (isNaN(time))
return citnut.send(`Thời gian giữa mỗi lần tag phải là một con số`, data)
time = time * 1000;
let i = 0;
citnut.send(`Đang load...`, data)
for (i = 0; i < solantag; i++) {
await delay(time);
citnut.send(nguoiduoctag + " " + noidung ,data)
};
}
}