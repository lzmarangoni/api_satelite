const { getTasks, dados } = require("../services/getTasks")

async function getFolder(req, res) {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    })
    const tarefas = await getTasks()
    try {
        res.send(tarefas)
    } catch (error) {
        console.log(error)
    }


}



module.exports = {
    getFolder
}

