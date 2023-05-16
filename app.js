const express = require('express')
const routeTask = require("./routes/routeTask")
const app = express()

const port = 8000


app.use('/', routeTask)
app.listen(port,()=>{
    console.log("escutando")
})

