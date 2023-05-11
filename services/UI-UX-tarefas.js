
const axios = require('axios')


function getTasksUI(){
  
  // return JSON.parse(fs.readFileSync("tarefas.json"))

    axios.get("https://api.clickup.com/api/v2/list/217098040/task",
    {headers:{"Authorization":"pk_60976530_RQQUNMS67QZV31TXG2L5M6HTRTH4BK14"}})
  .then(res =>  console.log(res.data))
  
}
    
getTasksUI()




module.exports={ getTasksUI }