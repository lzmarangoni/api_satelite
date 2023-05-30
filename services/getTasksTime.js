const fs = require('fs')
const axios = require('axios')
const { urlTaskTime, credencials } = require("../config")




async function getTaskTime() {
  let taskDuration = []
  let date = Date.parse("2023/05/01")
  let startDate = date
  let pages = 0
 
  while(pages < 10){
    let url = urlTaskTime + "60987139"
    let response = await axios.get(url, credencials)
    taskDuration = taskDuration.concat(response.data)
    pages++
    console.log(url)
  }

  


 
return taskDuration
}








module.exports = { getTaskTime }