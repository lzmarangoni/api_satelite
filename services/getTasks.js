const axios = require('axios')
const { urlTasksTeam, urlMembers, credencials } = require("../config")

async function getTasks() {
  let allTasks = []
  let pages = 0
  /*
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
    */
    const responseUsers = await axios.get(urlMembers, credencials)
    const data = responseUsers.data.teams
    const membersID = data.map(member => member.members.map(user => user.user.id))
    console.log(membersID)
    
return allTasks
}

module.exports = { getTasks }
