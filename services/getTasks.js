const fs = require('fs')
const axios = require('axios')
const { urlTasksTeam, credencials } = require("../config")

async function getTasks() {
<<<<<<< HEAD
  const response = await axios.get(urlTasksTeam, credencials)
  const tasks = response.data
return tasks
=======
  let allTasks = []
  let pages = 0
  
 
  while(pages < 10){
    let url = urlTasksTEam + pages
    let response = await axios.get(url, credencials)
    allTasks = allTasks.concat(response.data.tasks)
    pages++
    console.log(url)
  }



 
return allTasks
>>>>>>> 2214f241a351fe0ef33c79fa481d5816d2439813
}

module.exports = { getTasks }