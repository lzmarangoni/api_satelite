const fs = require("fs")

function getAllTasks(){
    return JSON.parse(fs.readFileSync("tarefas.json"))
}

function getTarefa(id){
    const tarefas = JSON.parse(fs.readFileSync("tarefas.json"))
    
}

module.exports={ getAllTasks }