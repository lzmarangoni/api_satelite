
    const urlTasksTeam = "https://api.clickup.com/api/v2/team/36953942/task?page="
    const urlTaskTime = "https://api.clickup.com/api/v2/team/36953942/time_entries?start_date=1663784226280&assignee="
    const urlMembers = "https://api.clickup.com/api/v2/team"
    const credencials =  {headers:{
        "Authorization":"pk_60976530_RUGFYYWSIZB124CCIE655Z2Q22W0S2CH",
        "Content-Type":"application/json", 
         
    }}

   module.exports = {urlTaskTime, urlTasksTeam, urlMembers, credencials}
