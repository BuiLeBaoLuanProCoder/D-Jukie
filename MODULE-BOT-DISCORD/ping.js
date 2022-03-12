module.exports = {
  command: ["ping"],
  author: "Hercules",
  permission: "member",
	description: "Tag tất cả mọi người trong sever",
	guide: "",
	allowListening: false,
	async listen (data) {},
	async call (data) {
	  return citnut.send(`@everyone `, data)
	}
}