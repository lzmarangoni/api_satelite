const {Router} = require("express")
const { getTarefas } = require("../controllers/getTarefas")

const router = Router()

router.get('/tarefas', getTarefas)



module.exports = router