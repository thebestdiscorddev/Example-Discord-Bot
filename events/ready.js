const db = require("quick.db")

module.exports.run = (client) => {
  console.log("Made By Aryan.#2021 )
  client.user.setActivity(db.get(`status`) || "No Status :D"); 
}
