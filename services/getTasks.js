const fs = require('fs')
const axios = require('axios')
const { urlTasksTeam, credencials } = require("../config")

async function getTasks() {
  let allTasks = []
  let pages = 0
  
    while(pages < 10){
    let url = urlTasksTeam + pages 
    let response = await axios.get(url, credencials)
    allTasks = allTasks.concat(response.data.tasks)
    pages++
    console.log(url)
    }
    

console.log(usuarios)

return allTasks
}

module.exports = { getTasks }