const fs = require('fs')
const axios = require('axios')
const { urlTasksTEam, credencials } = require("../config")



async function getTasks() {
  const response = await axios.get(urlTasksTEam, credencials)
 
 const tasks = response.data
return tasks
}








module.exports = { getTasks }