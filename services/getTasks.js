const axios = require('axios')
const { urlTasksTeam, credencials } = require("../config")

async function getTasks() {
  let allTasks = []
  let pages = 0
  
    while(true){
    let url = urlTasksTeam + pages 
    let response = await axios.get(url, credencials)
    const tasks = response.data.tasks

    if (tasks.length === 0){
      break
    }
    
    allTasks.push(...tasks)
    pages++
    console.log(url)
    }
    



return allTasks
}

module.exports = { getTasks }