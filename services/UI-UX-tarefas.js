
const axios = require('axios')


async function getTasksUI(){
  const teamID = "36953942"
  // return JSON.parse(fs.readFileSync("tarefas.json"))
  const response = await axios.get("https://api.clickup.com/api/v2/team/36953942/task",
    {headers:{"Authorization":"pk_60976530_RQQUNMS67QZV31TXG2L5M6HTRTH4BK14"}})

  return response.data
}
    





module.exports={ getTasksUI }