const fs = require('fs')
const axios = require('axios')
const { urlTasksTeam, credencials } = require("../config")

async function getTasks() {
  const response = await axios.get(urlTasksTeam, credencials)
  const tasks = response.data
return tasks
}

module.exports = { getTasks }