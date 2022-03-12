module.exports = {
  command: ["rps"],
  author: "Hercules",
  permission: "member",
	description: "",
	guide: "",
	allowListening: false,
	async listen (data) {},
	async call (data) {
	  const moment = require("moment-timezone");
	  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm");
	  var text = citnut.tools.getParam(data.content)
	  if (!text)
	  return citnut.send(`Sai định dạng`, data)
	  var kbb = ["kéo", "búa", "bao"];
	  var rdkbb = kbb[Math.floor(Math.random() * kbb.length)];
	  if (text == "kéo") {
	    if (rdkbb == "búa") {
	    return citnut.send(`Kết quả: Bot Thắng, ${gio}\nBạn: Kéo\nBot: Búa`, data)
	    } else if (rdkbb == "bao")
	    return citnut.send(`Kết quả: Bạn Thắng, ${gio}\nBạn: Kéo\nBot: Bao`, data)
	    else if  (rdkbb == "kéo")
	    return citnut.send(`Kết quả: Hoà, ${gio}\nBạn: Kéo\nBot: Kéo`, data)
	  
} 
else if (text == "búa") {
	    if (rdkbb == "bao") {
	    return citnut.send(`Kết quả: Bot Thắng, ${gio}\nBạn: Búa\nBot: Bao`, data)
	    } else if  (rdkbb == "kéo")
	    return citnut.send(`Kết quả: Bạn Thắng, ${gio}\nBạn: Búa\nBot: Kéo`, data)
	   else if  (rdkbb == "búa")
	    return citnut.send(`Kết quả: Hoà, ${gio}\nBạn: Búa\nBot: Búa`, data)
	  
}
else if (text == "bao") {
	    if (rdkbb == "kéo") {
	    return citnut.send(`Kết quả: Bot Thắng, ${gio}\nBạn: Bao\nBot: Kéo`, data)
	    } else if  (rdkbb == "búa")
	    return citnut.send(`Kết quả: Bạn Thắng, ${gio}\nBạn: Bao\nBot: Búa`, data)
	   else if (rdkbb == "bao")
	    return citnut.send(`Kết quả: Hoà, ${gio}\nBạn: Bao\nBot: Bao`, data)
	  
}
}
        }