const express = require('express')
const rotaTarefas = require("./routes/UI-UX-tarefas")
const app = express()

const port = 8000


app.use('/', rotaTarefas)
app.listen(port,()=>{
    console.log("escutando")
})

