const fs = require('fs')
const axios = require('axios')
const { urlTasksTEam, credencials } = require("../config")



async function getTasks() {
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
}








module.exports = { getTasks }