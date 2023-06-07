const express = require('express')
const routeTask = require("./routes/routeTask")
const routeDuration = require("./routes/routeDuration")
const app = express()

const port = 8000


app.use('/', routeTask)
app.use('/', routeDuration)
app.listen(port,()=>{
    console.log("escutando")
})

