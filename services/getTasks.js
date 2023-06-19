const axios = require('axios')
const {urlTasksTeam, credencials } = require("../config")
const fs = require('fs')

async function getTasks() {
  let allTasks = []
  let pages = 0
 
  
    while(true){
    let url = urlTasksTeam + pages 
    let response = await axios.get(url, credencials)
    
    let tasks = response.data.tasks

    if (tasks.length === 0){
      break
    }
    tasks = tasks.map(task => {
      
      
      task.date_created = new Date(+task.date_created)
      task.date_updated = new Date(+task.date_updated)
      
      return task
    })
    

    allTasks.push(...tasks)
    pages++
    console.log(url)
    }

return allTasks
}

module.exports = { getTasks }
