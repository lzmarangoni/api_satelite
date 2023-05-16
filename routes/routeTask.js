const {Router} = require("express")
const { getFolder } = require("../controllers/getTeamTasks")

const router = Router()

router.get('/tarefas', getFolder)



module.exports = router