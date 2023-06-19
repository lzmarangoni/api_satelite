const axios = require('axios')
const { urlTaskTime, urlMembers, credencials } = require("../config")
const fs = require('fs')

async function getDuration(){
    const responseUsers = await axios.get(urlMembers, credencials)
    const data = responseUsers.data.teams
    let membersID = data.map(member => member.members.map(user => user.user.id))
    let members = membersID.flat()
    let timeTracking = []

    for(let i = 0; i < members.length; i++){
      
      let getTime = await axios.get(urlTaskTime + members[i], credencials)
      let response = getTime.data.data
      if (response.length === 0){
        continue
      }

      response.map( task => {
        task.start = new Date (+task.start)
        task.end = new Date (+task.end)
        
        
        const durationInSeconds = parseInt(task.duration);

const hours = Math.floor(durationInSeconds / 3600);
const minutes = Math.floor((durationInSeconds % 3600) / 60);
const seconds = durationInSeconds % 60;

const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

task.duration = formattedDuration

        timeTracking.push(task) 
      })
        
      
    }

    
    console.log(timeTracking)
    return timeTracking
    
}
module.exports = { getDuration }